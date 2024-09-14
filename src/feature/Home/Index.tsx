"use client";
import { Button, Col, Collapse, CollapseProps, Row } from "antd";
import React, { useState } from "react";
import Image1 from "../../../public/images/image1.jpeg";
import Image2 from "../../../public/images/image2.jpeg";
import Image3 from "../../../public/images/image3.jpeg";
import LogoCar from "../../../public/images/logo-drive-car.png";
import ImageCar from "../../../public/images/grab-car.jpg";
import ImageBanner from "../../../public/images/image-dax-header-drive.jpeg";
import Image from "next/image";
import { ArrowDownOutlined } from "@ant-design/icons";
import ModalRegister from "./components/ModalRegister";

const vietnamesePhoneNumberRegex = /(0|\+84)(\d{9})\b/;

export const checkPhoneNumber = (phoneNumber: string) => {
  if (!vietnamesePhoneNumberRegex.test(phoneNumber)) {
    return Promise.reject("Please enter a valid phone number");
  }
  return Promise.resolve();
};

const collapseCarItems: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex justify-between">
        <div className="text-base font-medium">GrapCar</div>
      </div>
    ),
    children: (
      <ul className="text-base ml-12">
        <li>
          Cung cấp phương tiện di chuyển hàng ngày an toàn cho hàng triệu Khách
          hàng trên nền tảng của Grab.
        </li>
        <li>
          Các yêu cầu, hồ sơ cần chuẩn bị và hướng dẫn đăng ký GrabCar đã được
          ghi chú phía trên. Nếu còn thắc mắc nào khác Đối tác vui lòng tham
          khảo thêm tại mục Câu hỏi thường gặp.
        </li>
      </ul>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex justify-between">
        <div className="text-base font-medium">GrabTaxi</div>
      </div>
    ),
    children: (
      <ul className="text-base ml-12">
        <li>Lái taxi và đón thêm thật nhiều khách qua ứng dụng Grab.</li>
        <li>
          Với dịch vụ GrabTaxi, Đối tác cần chuẩn bị các loại giấy tờ như bên
          dưới.
          <p className="font-semibold mt-4">Hồ sơ cần chuẩn bị</p>
          <ul className="ml-4">
            <li>Chứng minh nhân dân/hộ chiếu/thẻ căn cước</li>
            <li>Giấy phép lái xe hạng B2</li>
            <li>Xác nhận nhân sự của công ty</li>
            <li>Giấy đăng kiểm xe ô tô</li>
            <li>Phù hiệu Taxi</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const HomePage = () => {
  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);

  const handleOpenModalRegister = () => {
    setIsOpenModalRegister(true);
  };

  return (
    <div className="w-full bg-white">
      <ModalRegister
        isOpen={isOpenModalRegister}
        handleClose={setIsOpenModalRegister}
      />
      <h1 className="w-full bg-green-600 text-center text-white p-2 text-2xl">
        Đăng ký Grab Van | Grab Car
      </h1>
      <div>
        <Row gutter={[12, 12]}>
          <Col xs={24} xl={14}>
            <div className="text-center xl:p-12 p-4">
              <div className="drop-shadow-lg">
                <h2 className="xl:text-5xl text-4xl font-semibold">
                  Trở thành đối tác của Grab
                </h2>
                <div className="xl:px-12 xl:text-xl text-base my-4">
                  Trở thành Đối tác của Grab để làm chủ cuộc sống của mình và
                  hơn thế nữa. Hãy cùng nhau bắt đầu hành trình ngay nào.
                </div>
                <div className="flex justify-center">
                  <Button
                    className="bg-green-600 text-white w-80 h-20 text-xl xl:mt-12"
                    shape="round"
                    onClick={handleOpenModalRegister}
                  >
                    Đăng ký
                  </Button>
                </div>
                <div className="text-xl text-center mt-4 font-semibold">
                  Đăng ký để trở thành đối tác Grab
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} xl={10}>
            <div className="xl:p-12 p-4">
              <Image src={ImageBanner} alt="image" className="w-full" loading="lazy" />
            </div>
          </Col>
        </Row>
        <div className="xl:py-4 px-4 xl:px-24">
          <div className="my-8">
            <a
              href=""
              onClick={(e) => {
                let car = document.getElementById("car");
                e.preventDefault();
                car &&
                  car.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="w-full flex justify-between items-center py-8 text-base border-t border-black"
            >
              <strong>Đối tác 4 bánh</strong>
              <div>Cung cấp dịch vụ di chuyển bằng xe hơi hoặc xe hơi</div>
              <ArrowDownOutlined className="text-4xl" />
            </a>
          </div>

          <Row gutter={[12, 12]} className="mt-8" justify="space-between">
            <Col xs={24} xl={6}>
              <Image src={Image1} alt="image" className="w-full" />
              <h3 className="text-2xl font-semibold my-4">
                Tự do và tự chủ về thời gian
              </h3>
              <ul className="text-base ml-4">
                <li>
                  Thời gian linh động, bạn hoàn toàn có thể chủ động quyết định
                  thời gian làm việc của mình
                </li>
                <li>
                  Được hỗ trợ với các tính năng hướng dẫn đối tác tài xế đến khu
                  vực có nhu cầu đặt xe cao
                </li>
                <li>
                  Thêm cuốc xe - thêm thu nhập mỗi ngày với đa dạng các dịch vụ
                  trên ứng dụng Grab
                </li>
              </ul>
            </Col>
            <Col xs={24} xl={6} className="xl:mt-40">
              <Image src={Image2} alt="image" className="w-full" />
              <h3 className="text-2xl font-semibold my-4">
              Thu nhập tin cậy
              </h3>
              <ul className="text-base ml-4">
                <li>Rút tiền siêu nhanh</li>
                <li>
                  Có nhiều chương trình gắn kết giúp tăng trải nghiệm của bạn
                </li>
                <li>
                  Có bảng sao kê thu nhập trực tuyến trên ứng dụng giúp bạn quản
                  lý tài chính của mình tốt hơn
                </li>
              </ul>
            </Col>
            <Col xs={24} xl={6} className="xl:mt-80">
              <Image src={Image3} alt="image" className="w-full" />
              <h3 className="text-2xl font-semibold my-4">
              Hỗ trợ nhanh chóng và liên tục
              </h3>
              <ul className="text-base ml-4">
                <li>Hỗ trợ Đối tác 24/7</li>
                <li>
                  Trung tâm trợ giúp được tích hợp trên ứng dụng Grab Driver
                </li>
                <li>Các khóa đào tạo và hướng dẫn trực tuyến/ trực tiếp</li>
              </ul>
            </Col>
          </Row>
          <div id="car">
            <Row gutter={[12, 12]} justify="space-between" className="mt-20">
              <Col xs={24} xl={12}>
                <Image src={LogoCar} alt="Đối tác 4 bánh" className="w-full" />
                <div className="text-base mt-8">
                  Trở thành Đối tác Tài xế của Grab để tự chủ thời gian làm
                  việc. Chỉ cần bật ứng dụng là bạn có thể kết nối với hàng
                  triệu hành khách trên ứng dụng Grab.
                </div>
              </Col>
              <Col xs={24} xl={10}>
                <Image src={ImageCar} alt="image" className="w-full" />
              </Col>
            </Row>
            <Row gutter={[12, 12]} justify="space-between" className="mt-12">
              <Col xs={24} xl={6}>
                <div className="text-2xl font-semibold">Yêu cầu</div>
                <ul className="text-base ml-4">
                  <li>
                    Công dân Việt Nam trong độ tuổi: Nam từ 18 đến 65 tuổi, Nữ
                    từ 18 đến 60 tuổi
                  </li>
                  <li>Đạt điều kiện sức khỏe lái xe hạng B2</li>
                  <li>Âm tính với heroin</li>
                  <li>
                    Xe có niên hạn sử dụng không quá 11 năm đối với dịch vụ
                    GrabCar và 12 năm đối với dịch vụ GrabTaxi (tính từ năm sản
                    xuất)
                  </li>
                </ul>
              </Col>
              <Col xs={24} xl={6}>
                <div className="text-2xl font-semibold">Hồ sơ cần chuẩn bị</div>
                <ul className="text-base ml-4">
                  <li>
                    Chứng minh nhân dân/hộ chiếu/thẻ căn cước (còn hạn trong
                    vòng 1 tháng)
                  </li>
                  <li>Giấy phép lái xe hạng B2 trở lên</li>
                  <li>
                    Lý lịch tư pháp (LLTP): Bản gốc LLTP (không quá 10 tháng)
                    hoặc giấy hẹn LLTP (ngày hẹn trả còn hạn), biên lai bưu điện
                  </li>
                  <li>Giấy khám sức khỏe (có test heroin)</li>
                  <li>
                    Giấy đăng ký xe ô tô hoặc biên nhận thế chấp còn thời hạn
                  </li>
                  <li>Giấy chứng nhận kiểm định</li>
                  <li>Bảo hiểm bắt buộc TNDS (có kinh doanh)</li>
                  <li>
                    Mã số thuế cá nhân để thực hiện các nghĩa vụ thuế với cơ
                    quan chức năng . Đăng ký mã số thuế &nbsp;
                    <a
                      href="https://thuedientu.gdt.gov.vn/"
                      target="_blank"
                      className="underline text-blue-500"
                    >
                      tại đây
                    </a>
                  </li>
                  <li>Giấy xác nhận xã viên HTX, Phụ đính 1,2</li>
                  <li>Phù hiệu xe hợp đồng</li>
                  <li>Tem phản quang</li>
                </ul>
              </Col>
              <Col xs={24} xl={6}>
                <div className="text-2xl font-semibold">Bước tiếp theo</div>
                <ul className="text-base ml-4">
                  <li>Chuẩn bị và cập nhật hồ sơ trực tuyến</li>
                  <li>
                    Chờ tin nhắn thông báo lịch hẹn (ngày, giờ, địa điểm) nộp hồ
                    sơ từ Grab
                  </li>
                  <li>Nộp hồ sơ theo đúng địa điểm và thời gian đã được hẹn</li>
                  <li>
                    Hoàn thành và vượt qua khóa đào tạo trực tuyến được gửi về
                    tin nhắn điện thoại đã đăng ký.
                  </li>
                  <li>
                    Trang bị đồng phục và tài khoản của bạn sẽ được kích hoạt
                    tài khoản
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="bg-gray-100 p-4 xl:p-12 rounded mt-8">
              <h2 className="text-4xl font-semibold mb-8">
                Dễ dàng và nhanh chóng tăng thêm thu nhập
              </h2>
              <Collapse
                items={collapseCarItems}
                style={{ background: "#fff" }}
              />
            </div>
            <div className="mt-8">
            <iframe title="company-address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4022.4420269194!2d106.72602117515599!3d10.707495889437155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752568b2fc62af%3A0xb9ba30f3f18fa833!2zSOG7o3AgdMOhYyB4w6MgduG6rW4gdOG6o2kgU2FvIFPDoGkgR8Oybg!5e1!3m2!1sfr!2s!4v1725790588643!5m2!1sfr!2s" width="100%" height="450" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
