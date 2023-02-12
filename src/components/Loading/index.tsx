import * as S from "./styles";

import { TbPokeball } from "react-icons/tb";

export function Loading() {
  return (
    <S.LoadingContainer>
      <TbPokeball size="10rem" />
    </S.LoadingContainer>
  );
}
