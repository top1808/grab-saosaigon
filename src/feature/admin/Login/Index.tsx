"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export interface FormLoginState {
  email?: string;
  password?: string;
}

const LoginPage = () => {
  const [form] = Form.useForm<FormLoginState>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormLoginState) => {
    setIsLoading(true);
    const res = await fetch("api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setIsLoading(false);

    const response = await res.json();
    if (res.status === 404) {
      Swal.fire({
        title: "Thất bại!",
        text: response.message,
        icon: "error",
        confirmButtonText: "Đóng",
      });
    } else if (res.status === 200) {
      window?.localStorage?.setItem("grab_auth", JSON.stringify(response.user));
      router.push("/admin");
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const user: FormLoginState = window?.localStorage?.getItem(
        "grab_auth"
      ) as FormLoginState;
      if (!!user) {
        router.push("/admin");
      }
    }
  }, [router]);

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:w-1/4 lg:max-w-screen-md">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <Form layout="vertical" onFinish={onSubmit} form={form}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Địa chỉ email chưa chính xác.",
                },
              ]}
              hasFeedback
            >
              <Input size="large" placeholder="Nhập tài khoản email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: "Bạn chưa nhập mật khẩu" }]}
              hasFeedback
            >
              <Input.Password size="large" placeholder="Nhập mật khẩu" />
            </Form.Item>
            <Form.Item className="text-center mt-8">
              <Button
                className="bg-green-600 text-white"
                htmlType="submit"
                size="large"
                loading={isLoading}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
