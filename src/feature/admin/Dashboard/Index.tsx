"use client";
import { checkPhoneNumber } from "@/feature/Home/Index";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export interface SettingState {
  logo?: string;
  phone?: string;
}

export interface Setting {
  key?: string;
  value?: string;
}

const Dashboard = () => {
  const [form] = Form.useForm<SettingState>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: SettingState) => {
    setIsLoading(true);
    const res = await fetch("api/dashboard", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setIsLoading(false);

    if (res.status === 200) {
      Swal.fire({
        title: "Thành công!",
        text: "Lưu cài đặt thành công",
        icon: "success",
        confirmButtonText: "Đóng",
      });
    } else {
      Swal.fire({
        title: "Thất bại!",
        text: "Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại.",
        icon: "error",
        confirmButtonText: "Đóng",
      });
    }
  };

  useEffect(() => {
    const getSettings = async () => {
      setIsLoading(true);
      const res = await fetch("api/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      const data = await res.json();

      form.setFieldsValue({
        phone: data?.settings?.find((s: Setting) => s.key === "phone")?.value,
        logo: data?.settings?.find((s: Setting) => s.key === "logo")?.value,
      });
    };
    getSettings();
  }, [form]);

  return (
    <div className="bg-white min-h-screen p-12">
      <div className="shadow p-4 rounded">
        <h1 className="text-xl font-semibold">Cài đặt</h1>
        <Divider />
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Row gutter={[12, 12]}>
            <Col xs={24} xl={6}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  { required: true, message: "Bạn chưa nhập số điện thoại" },
                  {
                    validator: (_, value) => checkPhoneNumber(value),
                    message: "Vui lòng nhập số điện thoại hợp lệ",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Nhập số điện thoại"
                  className="w-full"
                />
              </Form.Item>
            </Col>
            <Col xs={24} className="flex justify-center mt-4">
              <Form.Item>
                <Button
                  className="bg-green-600 text-white"
                  htmlType="submit"
                  loading={isLoading}
                >
                  Lưu cài đặt
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Dashboard;
