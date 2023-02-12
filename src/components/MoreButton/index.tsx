import { useRecoilState } from "recoil";

import * as S from "./styles";

import { TbCirclePlus } from "react-icons/tb";
import { ImSpinner9 } from "react-icons/im";

import { atomPokemonOffset } from "../../store/atoms";

import { MoreButtonProps } from "./types";

export function MoreButton(props: MoreButtonProps) {
  const [pokemonOffset, setPokemonOffset] = useRecoilState(atomPokemonOffset);

  function handleLoadMorePokemon() {
    setPokemonOffset(pokemonOffset + 9);
  }

  return (
    <S.ButtonContainer {...props} onClick={handleLoadMorePokemon}>
      Carregar mais <TbCirclePlus size={16} />
    </S.ButtonContainer>
  );
}
