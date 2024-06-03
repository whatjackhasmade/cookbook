import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.recipe.create({
		data: {
			title: "Bangers and Mash",
		},
	});

	console.log("Created recipe: Bangers and Mash");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
