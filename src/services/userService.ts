import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.user.findMany();
};

export const createUser = async (email: string, name: string) => {
    return await prisma.user.create({
        data: { email, name },
    });
};