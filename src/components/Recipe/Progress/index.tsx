import { useRecipe } from "../context";

import * as S from "./styles";

export default function Progress() {
  const { stage, goToStage, recipe, checkedIngredients } = useRecipe();

  return (
    <section>
      <S.Stages>
        <S.Stage
          $isCurrent={stage === 0}
          onClick={() => goToStage(0)}
          type="button"
        >
          <S.StageTitle>Ingredients</S.StageTitle>
          <S.Meta>
            ({checkedIngredients.length} of {recipe.ingredients.length})
          </S.Meta>
        </S.Stage>
        <S.Stage
          $isCurrent={stage === 1}
          onClick={() => goToStage(1)}
          type="button"
        >
          <S.StageTitle>Steps</S.StageTitle>
        </S.Stage>
      </S.Stages>
    </section>
  );
}
