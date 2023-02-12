import * as S from "./styles";

import { HeaderTitle } from "../Heading";
import { PokemonCard } from "../PokemonCard";

export function Container() {
  return (
    <S.Container>
      <HeaderTitle>Pokédex</HeaderTitle>
      <PokemonCard />
    </S.Container>
  )
}