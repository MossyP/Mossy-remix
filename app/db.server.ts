import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
    let __db__: PrismaClient;
}

// このアプローチはプロダクション環境でのみ新しいPrismaClientを作成します
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.__db__) {
    global.__db__ = new PrismaClient();
    }
    prisma = global.__db__;
}

export { prisma }; 