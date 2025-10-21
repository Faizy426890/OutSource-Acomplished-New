import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "weathersportifyteam@gmail.com",
    pass: "stnyiaraqnatomgs",
  },
});

// Email template for admin
const getEmailTemplate = (fullName, phone, email, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;font-family:'Arial',sans-serif;background-color:#f4f4f4;">
  <table role="presentation" style="width:100%;border-collapse:collapse;">
    <tr>
      <td align="center" style="padding:40px 0;">
        <table role="presentation" style="width:600px;border-collapse:collapse;background-color:#fff;box-shadow:0 4px 6px rgba(0,0,0,0.1);border-radius:10px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:bold;text-transform:uppercase;letter-spacing:2px;">
                New Contact Form Submission
              </h1>
              <p style="margin:10px 0 0;color:#f0f0f0;font-size:14px;">You have received a new message from your website</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:20px;background-color:#f8f9fa;border-radius:8px;">
                    <p style="margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Full Name</p>
                    <p style="margin:5px 0 0;color:#212529;font-size:16px;font-weight:600;">${fullName}</p>
                  </td>
                </tr>
                <tr><td style="height:15px;"></td></tr>
                <tr>
                  <td style="padding:20px;background-color:#f8f9fa;border-radius:8px;">
                    <p style="margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Email Address</p>
                    <p style="margin:5px 0 0;">
                      <a href="mailto:${email}" style="color:#667eea;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr><td style="height:15px;"></td></tr>
                <tr>
                  <td style="padding:20px;background-color:#f8f9fa;border-radius:8px;">
                    <p style="margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Phone Number</p>
                    <p style="margin:5px 0 0;">
                      <a href="tel:${phone}" style="color:#667eea;text-decoration:none;">${phone}</a>
                    </p>
                  </td>
                </tr>
                <tr><td style="height:15px;"></td></tr>
                <tr>
                  <td style="padding:20px;background-color:#f8f9fa;border-radius:8px;">
                    <p style="margin:0;color:#6c757d;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
                    <p style="margin:10px 0 0;color:#212529;font-size:15px;line-height:1.6;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 30px 40px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;padding:15px 40px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;text-decoration:none;border-radius:50px;font-weight:600;font-size:16px;box-shadow:0 4px 15px rgba(102,126,234,0.4);transition:all 0.3s ease;">
                Reply to ${fullName}
              </a>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8f9fa;padding:30px;text-align:center;border-top:3px solid #667eea;">
              <p style="margin:0;color:#6c757d;font-size:13px;">This email was sent from your website contact form</p>
              <p style="margin:10px 0 0;color:#adb5bd;font-size:12px;">© ${new Date().getFullYear()} Outsource Accomplished. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// Auto-reply template for user
const getAutoReplyTemplate = (fullName) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin:0;padding:0;font-family:'Arial',sans-serif;background-color:#f4f4f4;">
  <table role="presentation" style="width:100%;border-collapse:collapse;">
    <tr>
      <td align="center" style="padding:40px 0;">
        <table role="presentation" style="width:600px;background-color:#fff;box-shadow:0 4px 6px rgba(0,0,0,0.1);border-radius:10px;overflow:hidden;">
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:32px;font-weight:bold;">Thank You! 🎉</h1>
              <p style="margin:10px 0 0;color:#f0f0f0;font-size:16px;">We've received your message</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px;">
              <p style="font-size:18px;color:#212529;">Hi <strong>${fullName}</strong>,</p>
              <p style="font-size:16px;color:#495057;line-height:1.8;">Thank you for reaching out to us! We’ve received your message and our team will respond within 24 hours on business days.</p>
              <p style="font-size:16px;color:#495057;line-height:1.8;">Meanwhile, feel free to explore our services or connect with us on social media.</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8f9fa;padding:30px;text-align:center;border-top:3px solid #667eea;">
              <p style="margin:0;color:#6c757d;font-size:13px;">
                <strong style="color:#212529;">Outsource Accomplished</strong><br />
                Your Digital Success Partner
              </p>
              <p style="margin:15px 0 0;color:#adb5bd;font-size:12px;">© ${new Date().getFullYear()} Outsource Accomplished. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

// ✅ Named export for POST (App Router compatible)
export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phone, email, message } = body;

    if (!fullName || !phone || !email || !message) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    // Send to Admin
    const adminMailOptions = {
      from: '"Website Contact Form" <no-reply@growedgex.com>',
      to: "admin@growedgex.com",
      subject: `New Contact Form Submission from ${fullName}`,
      html: getEmailTemplate(fullName, phone, email, message),
    };

    const userMailOptions = {
      from: '"GrowEdgeX Corp." <no-reply@growedgex.com>',
      to: email,
      subject: "Thank You for Contacting Us!",
      html: getAutoReplyTemplate(fullName),
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return Response.json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
