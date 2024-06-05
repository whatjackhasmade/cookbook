import Recipe from "@/components/Recipe";
import { recipes } from "@/data/recipes";

export default async function RecipeRoute({ params }: { params: { slug: string } }) {
  const recipe = recipes.find((recipe) => recipe.slug === params.slug);

  if (!recipe) {
    return <h1>Recipe not found</h1>;
  }

  return <Recipe recipe={recipe} />;
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}
