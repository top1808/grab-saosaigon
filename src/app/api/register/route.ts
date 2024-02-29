import { FormState } from "@/feature/Home/components/ModalRegister";
import { google } from "googleapis";

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
    return new Response(JSON.stringify(response.data), {
      status: 200,
    })
  } catch (e) {
    console.log("🚀 ~ e:", e);
  }
}
