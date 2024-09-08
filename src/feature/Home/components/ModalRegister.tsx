import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { checkPhoneNumber } from "../Index";
import Swal from "sweetalert2";

export interface FormState {
  name?: string;
  phone?: string;
  province?: string;
  type?: string;
}

const ModalRegister = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  const onSubmit = async (data: FormState) => {
    setIsLoading(true);
    const res = await fetch("api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 500) {
      Swal.fire({
        title: "Thất bại!",
        text: "Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại.",
        icon: "error",
        confirmButtonText: "Đóng",
      });
    }
    setIsLoading(false);
    const content = await res?.json();

    if (content) {
      Swal.fire({
        title: "Thành công!",
        text: "Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ bạn sớm nhất có thể.",
        icon: "success",
        confirmButtonText: "Đóng",
      });
      handleClose(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      form.resetFields();
    }
  }, [form, isOpen]);

  return (
    <>
      <Modal
        title=""
        open={isOpen}
        onCancel={() => handleClose(false)}
        footer={null}
        centered
      >
        <div className="text-2xl text-green-600 text-center font-semibold">
          Đăng ký Grab Van | GrabCar
        </div>
        <div className="text-base text-center my-4">
          Điền thông tin theo form dưới đây để được nhân viên tư vấn hỗ trợ
          nhanh nhất
        </div>
        <Form layout="vertical" onFinish={onSubmit} form={form}>
          <Form.Item
            name="name"
            label="Họ và tên"
            rules={[{ required: true, message: "Bạn chưa nhập họ và tên" }]}
          >
            <Input size="large" placeholder="Nhập họ và tên" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {required: true, message: "Bạn chưa nhập số điện thoại"},
              {
                validator: (_, value) => checkPhoneNumber(value),
                message: "Vui lòng nhập số điện thoại hợp lệ",
              },
            ]}
          >
            <Input size="large" placeholder="Nhập số điện thoại" />
          </Form.Item>
          <Form.Item
            name="province"
            label="Tỉnh thành đăng ký"
            rules={[
              {
                required: true,
                message: "Bạn chưa nhập tỉnh thành đăng ký",
              },
            ]}
          >
            <Input size="large" placeholder="Nhập tỉnh thành" />
          </Form.Item>
          <Form.Item
            name="type"
            label="Loại đối tác"
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn loại đối tác",
              },
            ]}
          >
            <Select
              options={[
                { value: "car", label: "Đối tác 4 bánh" },
                { value: "van", label: "Xe tải Van" },
              ]}
              size="large"
              placeholder="Chọn loại đối tác"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="bg-green-600 text-white w-full h-14 text-xl"
              shape="round"
              htmlType="submit"
              loading={isLoading}
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
        <div className="mt-4">
          Bằng cách tiếp tục, tôi đồng ý rằng Grab có thể thu thập, sử dụng và
          tiết lộ thông tin do tôi cung cấp, thay mặt cho công ty đăng ký, theo
          Thông báo Bảo mật của Grab mà tôi đã đọc và hiểu.
        </div>
      </Modal>
    </>
  );
};

export default ModalRegister;
