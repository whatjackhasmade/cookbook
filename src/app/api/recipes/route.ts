import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";

export async function GET() {
	const prisma = getPrismaClient();
	const recipes = await prisma.recipe.findMany();
	return NextResponse.json(recipes, { status: 200 });
}

export async function POST(req: Request) {
	const prisma = getPrismaClient();
	const { ingredients, steps, title } = await req.json();

	console.log({
		ingredients,
		steps,
		title,
	});

	const recipe = await prisma.recipe.create({
		data: {
			title: title,
			ingredients: {
				create: ingredients,
			},
			steps: {
				create: steps,
			},
		},
	});

	return NextResponse.json(recipe, { status: 201 });
}
