import { NextResponse } from "next/server";
import { authLogin, register } from "../../../../../../prisma";
import { FormLoginState } from "@/feature/admin/Login/Index";

export const POST = async (req: Request) => {
  try {
    const data = await req.text();
    const body = JSON.parse(data) as FormLoginState;
    const user = await authLogin(body.email as string, body.password as string);

    if (!user) {
      return NextResponse.json(
        { message: "Sai thông tin đăng nhập" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (e) {
    console.log("🚀 ~ POST ~ e:", e)
    return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 });
  }
};
