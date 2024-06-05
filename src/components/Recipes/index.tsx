import { recipes } from "@/data/recipes";
import Link from "next/link";

export default function Recipes() {
  return (
    <>
      {recipes.map((recipe) => (
        <article key={recipe.slug}>
          <Link href={`/recipes/${recipe.slug}`}>
            <h2>
              <span role="img">{recipe.emojis}</span> ~ {recipe.title}
            </h2>
          </Link>
        </article>
      ))}
    </>
  );
}
