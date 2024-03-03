import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authLogin = async (email: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });
  return user;
};

export const register = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  return user;
};

export const getSettings = async () => {
  const settings = await prisma.setting.findMany();
  return settings;
};

export const changeSettings = async (key: string, value: string) => {
  const updateSetting = await prisma.setting.update({
    where: {
      key: key,
    },
    data: {
      value: value,
    },
  });
  return updateSetting;
};
