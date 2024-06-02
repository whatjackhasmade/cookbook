import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";
import { SHA256 } from "crypto-js";

export async function POST(req: Request) {
	const prisma = getPrismaClient();
	const { email, password } = await req.json();

	if (!email || !password) {
		return NextResponse.json({ message: "invalid inputs" }, { status: 400 });
	}

	const { password: userPassword, ...user } =
		(await prisma.user.findUnique({
			where: { email: email },
			select: {
				id: true,
				firstName: true,
				lastName: true,
				email: true,
				password: true,
			},
		})) ?? {};

	if (user && userPassword && password === SHA256(userPassword).toString()) {
		return NextResponse.json(user, { status: 200 });
	} else {
		return NextResponse.json(
			{ message: "invalid credentials" },
			{ status: 401 }
		);
	}
}
