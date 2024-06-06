import { recipes } from "@/data/recipes";
import { VisuallyHidden } from "../VisuallyHidden";
import Link from "next/link";

import * as S from "./styles";

export default function Recipes() {
  return (
    <>
      {recipes.map((recipe) => (
        <S.Item key={recipe.slug}>
          <h2>
            <span role="img">{recipe.emojis}</span> ~ {recipe.title}
          </h2>
          <Link href={`/recipes/${recipe.slug}`}>
            <VisuallyHidden>{recipe.title}</VisuallyHidden>
          </Link>
        </S.Item>
      ))}
    </>
  );
}
