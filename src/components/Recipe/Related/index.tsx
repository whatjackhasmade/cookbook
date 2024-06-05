import { recipes } from "@/data/recipes";
import { RecipeSlug } from "@/enums";
import Link from "next/link";

function isNotNullish<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

interface RelatedProps {
  related: RecipeSlug[];
}

export default function Related({ related }: RelatedProps) {
  const relatedRecipes = related.map((slug) => recipes.find((recipe) => recipe.slug === slug)).filter(isNotNullish);

  return (
    <section>
      <h2>Related Recipes</h2>
      {relatedRecipes.map((recipe) => (
        <Link href={`/recipes/${recipe.slug}`} key={recipe.slug}>
          <h3>{recipe.title}</h3>
        </Link>
      ))}
    </section>
  );
}
