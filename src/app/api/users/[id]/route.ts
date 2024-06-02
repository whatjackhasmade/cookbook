import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";
import { SHA256 } from "crypto-js";

export async function GET(
	req: Request,
	{ params: { id } }: { params: { id?: string } }
) {
	const prisma = getPrismaClient();

	if (id) {
		const user = await prisma.user.findUnique({
			where: {
				id: id,
			},
		});

		return NextResponse.json(user, { status: 200 });
	}

	const users = await prisma.user.findMany();
	return NextResponse.json(users, { status: 200 });
}

// We hash the user entered password using crypto.js
export const hashPassword = (string: string) => {
	return SHA256(string).toString();
};

export async function POST(req: Request) {
	const prisma = getPrismaClient();
	const { email, firstName, lastName, password } = await req.json();

	if (!email || !firstName || !lastName || !password) {
		return NextResponse.json(
			{ message: "Missing required fields" },
			{ status: 400 }
		);
	}

	if (password.length < 8) {
		return NextResponse.json(
			{ message: "Password must be at least 8 characters long" },
			{ status: 400 }
		);
	}

	const user = await prisma.user.create({
		data: {
			email,
			firstName,
			lastName,
			password: SHA256(password).toString(),
		},
	});

	return NextResponse.json(user, { status: 201 });
}
