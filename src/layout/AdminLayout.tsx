"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Layout, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/grab_logo.png";
import { UserOutlined } from "@ant-design/icons";
import { FormLoginState } from "@/feature/admin/Login/Index";
import { useRouter } from "next/navigation";

const { Header, Content } = Layout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<FormLoginState | null>(null)

  const profileItems: MenuProps["items"] = [
    {
      label: (
        <div
          className="flex items-center gap-2"
          onClick={() => {
            localStorage.removeItem("grab_auth");
            router.push("/admin/login")
          }}
        >
          Log out
        </div>
      ),
      key: "3",
    },
  ];

  useEffect(() => {
    const getUser = localStorage.getItem("grab_auth") ? JSON.parse(localStorage.getItem("grab_auth") || "") : null;
    setUser(getUser || null);
    if (!getUser) {
        router.push("/admin/login")
    }
  }, [router])

  return (
    <Layout>
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
        <Dropdown menu={{ items: profileItems }} trigger={["click"]}>
          <div className="cursor-pointer hover:opacity-80">
            <div className="mx-2">
              <div className="text-base flex gap-2 items-center">
                <div>
                  Hello, <strong>{user?.email}</strong>
                </div>
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </div>
            </div>
          </div>
        </Dropdown>
      </Header>
      <Content>{!!user && children}</Content>
    </Layout>
  );
};

export default AdminLayout;
