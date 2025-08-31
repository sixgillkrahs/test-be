import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.userAuth.findMany();
};

export const createUser = async (email: string, name: string) => {
    return await prisma.userAuth.create({
        data: { email, name },
    });
};