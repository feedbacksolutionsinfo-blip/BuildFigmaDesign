/**
 * POST /api/send-lead
 * Body: { nev: string, telefon?: string, email?: string, products: string[] }
 * Sends the demo-request form data to hello@thinkai.hu via Brevo transactional email.
 * Requires the BREVO_API_KEY environment variable (set in Vercel project settings).
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nev, telefon, email, products } = req.body ?? {};

  if (!nev || typeof nev !== "string" || nev.trim().length < 2) {
    return res.status(400).json({ error: "A név megadása kötelező." });
  }
  if (!telefon && !email) {
    return res.status(400).json({ error: "Adj meg legalább egy elérhetőséget (telefon vagy e-mail)." });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Érvénytelen e-mail cím." });
  }

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const productList = Array.isArray(products) && products.length > 0 ? products.join(", ") : "—";

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY ?? "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "eaisy.hu – Űrlap", email: "lead@thinkai.hu" },
      to: [{ email: "hello@thinkai.hu", name: "eaisy" }],
      replyTo: email ? { email: esc(email), name: esc(nev) } : undefined,
      subject: `Új demókérés – ${nev.trim()}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 560px;">
          <h2 style="margin: 0 0 16px;">Új demókérés érkezett az eaisy.hu oldalról</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; width: 140px;">Név</td><td style="padding: 8px 12px;">${esc(nev)}</td></tr>
            <tr><td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Telefon</td><td style="padding: 8px 12px;">${esc(telefon) || "—"}</td></tr>
            <tr><td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">E-mail</td><td style="padding: 8px 12px;">${esc(email) || "—"}</td></tr>
            <tr><td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Érdeklődés</td><td style="padding: 8px 12px;">${esc(productList)}</td></tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 16px;">Küldve az eaisy.hu demókérő űrlapról.</p>
        </div>`,
    }),
  });

  if (!brevoRes.ok) {
    const detail = await brevoRes.text();
    console.error("Brevo error:", brevoRes.status, detail);
    return res.status(502).json({ error: "Az e-mail küldése nem sikerült. Próbáld újra később." });
  }

  return res.status(200).json({ ok: true });
}
