import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";

export async function GET() {
	const prisma = getPrismaClient();
	const recipes = await prisma.recipe.findMany();

	return NextResponse.json(recipes, { status: 200 });
}

export async function PATCH(
	req: Request,
	{ params: { id } }: { params: { id: string } }
) {
	const prisma = getPrismaClient();
	const { content, title } = await req.json();

	await prisma.recipe.update({
		where: {
			id: id,
		},
		data: {
			content,
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
