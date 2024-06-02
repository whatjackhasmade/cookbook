import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const { id } = await prisma.user.create({
		data: {
			email: "jack@noface.co.uk",
			firstName: "Jack",
			lastName: "Pritchard",
		},
	});

	await prisma.recipe.create({
		data: {
			title: "Bangers and Mash",
			authorId: id,
			content: "Cook the sausages and mash the potatoes.",
			published: true,
		},
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
