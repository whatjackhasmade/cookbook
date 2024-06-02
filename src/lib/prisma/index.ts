// Singleton pattern for Prisma client
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export function getPrismaClient() {
	if (!prisma) {
		prisma = new PrismaClient();
	}

	return prisma;
}
