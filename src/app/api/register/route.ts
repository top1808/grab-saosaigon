import { FormState } from "@/feature/Home/components/ModalRegister";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.text();
  const body = JSON.parse(data) as FormState;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name,
            body.phone,
            body.identification,
            body.province,
            body.type,
          ],
        ],
      },
    });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "top180802@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mainOptions = {
      from: "Grab-App",
      to: "huonglt070819@gmail.com",
      subject: "Khách hàng đăng ký Grab",
      text: "Bạn đã nhận được 1 thông báo đăng ký mới",
      html: `
        <p>Thông tin khách hàng đăng ký mới:</p>
        <ul>
          <li>Tên khách hàng: ${body.name}</li>
          <li>Số điện thoại: ${body.phone}</li>
          <li>CMND/CCCD: ${body.identification}</li>
          <li>Tỉnh thành đăng ký: ${body.province}</li>
          <li>Loại đối tác đăng ký: ${body.type === "bike" ? "Đối tác 2 bánh": "Đối tác 4 bánh"}</li>
        </ul>
      `
    };

    await transporter.sendMail(mainOptions);

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (e) {
    throw new Error("Có lỗi xảy ra.");
  }
}
