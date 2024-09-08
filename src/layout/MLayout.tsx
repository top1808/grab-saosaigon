"use client";
import ModalRegister from "@/feature/Home/components/ModalRegister";
import { Button, Col, Layout, Row } from "antd";
import React, { useEffect, useState } from "react";
import Logo from "../../public/images/grab_logo.png";
import Image from "next/image";
import Link from "next/link";
import { Setting } from "@/feature/admin/Dashboard/Index";

const { Header, Footer, Content } = Layout;

export const formatPhonenumber = (phoneNumber: string) => {
  return phoneNumber?.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
};

const MLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);
  const [information, setInformation] = useState<Setting[]>();

  const handleOpenModalRegister = () => {
    setIsOpenModalRegister(true);
  };

  useEffect(() => {
    const getSettings = async () => {
      const res = await fetch("api/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setInformation(data?.settings);
    };
    getSettings();
  }, []);

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
            <Image src={Logo} alt="logo_grab" className="w-full" />
          </Link>
        </div>
        <h1 className="text-base xl:text-xl hidden sm:block font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          Trở thành đối tác Grab
        </h1>
        <a
          href="tel:0343577939"
          className="text-xl xl:text-2xl font-bold cursor-pointer"
        >
          Tổng đài: &nbsp;
          {formatPhonenumber(
            information?.find((s: Setting) => s.key === "phone")?.value ||
              "0343577939"
          )}
        </a>
      </Header>
      <Content>{children}</Content>
      <Footer className="bg-green-800 text-white mt-4">
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
