"use client";
import ModalRegister from "@/feature/Home/components/ModalRegister";
import { Button, Col, Layout, Row } from "antd";
import React, { useState } from "react";
import Logo from "../../public/images/grab_logo.png";
import Image from "next/image";
import Link from "next/link";

const { Header, Footer, Content } = Layout;

const MLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);

  const handleOpenModalRegister = () => {
    setIsOpenModalRegister(true);
  };
  return (
    <Layout>
      <ModalRegister
        isOpen={isOpenModalRegister}
        handleClose={setIsOpenModalRegister}
      />
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
          boxShadow: "0 0 1px 1px #888",
        }}
        className="shadow-lg px-2 xl:px-12"
      >
        <div className="xl:text-2xl">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-full" />
          </Link>
        </div>
        <div className="text-base xl:text-xl hidden sm:block font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          Trở thành đối tác Grab
        </div>
        <a
          href="tel:0902340912"
          className="text-base xl:text-xl font-bold cursor-pointer"
        >
          090 234 0912
        </a>
      </Header>
      <Content>{children}</Content>
      <Footer className="bg-green-800 text-white">
        <Row gutter={[12, 12]} justify="space-between" align="middle">
          <Col xs={24} xl={16}>
            <div className="text-4xl font-bold">
              Bắt đầu hành trình của bạn cùng Grab
            </div>
          </Col>
          <Col xs={24} xl={6}>
            <Button
              className="bg-green-600 text-white w-full h-20 text-xl"
              shape="round"
              onClick={handleOpenModalRegister}
            >
              Đăng ký
            </Button>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default MLayout;
