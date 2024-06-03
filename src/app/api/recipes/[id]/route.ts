import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";

export async function GET(req: Request) {
	const prisma = getPrismaClient();
	const { id } = await req.json();

	const recipes = await prisma.recipe.findUnique({
		where: {
			id,
		},
	});

	return NextResponse.json(recipes, { status: 200 });
}

export async function PATCH(
	req: Request,
	{ params: { id } }: { params: { id: string } }
) {
	const prisma = getPrismaClient();
	const { title } = await req.json();

	await prisma.recipe.update({
		where: {
			id: id,
		},
		data: {
			title,
		},
	});

	return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function DELETE(req: Request) {
	const prisma = getPrismaClient();
	const { id } = await req.json();

	await prisma.recipe.delete({
		where: {
			id: id,
		},
	});

	return NextResponse.json({ message: "Deleted" }, { status: 200 });
}
