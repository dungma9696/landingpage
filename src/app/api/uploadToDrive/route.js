// app/api/uploadToDrive/route.js
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { NextResponse } from 'next/server';

// Hàm tạo file Excel
const createExcelFile = (data) => {
  const xlsx = require("xlsx");
  const ws = xlsx.utils.json_to_sheet([data]);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

  const filePath = path.join("/tmp", "user_data.xlsx");
  xlsx.writeFile(wb, filePath);

  return filePath;
};

// Hàm xác thực với Google API
const googleAuth = async () => {
  const credentials = JSON.parse(
    fs.readFileSync(path.resolve("./credentials.json"))
  );

  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const tokenPath = path.resolve("./token.json");
  if (fs.existsSync(tokenPath)) {
    const token = JSON.parse(fs.readFileSync(tokenPath));
    oAuth2Client.setCredentials(token);
    return oAuth2Client;
  }

  return await getNewToken(oAuth2Client);
};

// Hàm lấy token OAuth mới
const getNewToken = async (oAuth2Client) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/drive.file"],
  });

  console.log("Authorize this app by visiting this url:", authUrl);
  
  const code = await new Promise((resolve) => {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter the code from that page here: ", (code) => {
      rl.close();
      resolve(code);
    });
  });

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  fs.writeFileSync(path.resolve("./token.json"), JSON.stringify(tokens));
  return oAuth2Client;
};

// API Handler
export async function POST(req) {
  const { name, email } = await req.json();

  try {
    const filePath = createExcelFile({ name, email });

    const auth = await googleAuth();
    const drive = google.drive({ version: "v3", auth });

    const fileMetadata = {
      name: "user_data.xlsx",
      mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };
    const media = {
      mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      body: fs.createReadStream(filePath),
    };

    const driveResponse = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    return NextResponse.json({ message: "File uploaded successfully", fileId: driveResponse.data.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to upload file to Google Drive" }, { status: 500 });
  }
}
