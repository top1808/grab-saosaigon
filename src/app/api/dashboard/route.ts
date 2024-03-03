import { SettingState } from "@/feature/admin/Dashboard/Index";
import { NextResponse } from "next/server";
import { changeSettings, getSettings } from "../../../../prisma";

export const GET = async () => {
  try {
    const settings = await getSettings();

    return NextResponse.json({ settings }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const data = await req.text();
    const body = JSON.parse(data) as SettingState;
    const res = await changeSettings(
      Object.keys(body)[0],
      body?.phone as string
    );

    return NextResponse.json({ message: "Lưu cài đặt thành công." }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 });
  }
};
