import { useRef, useState } from "react";

import * as S from "./styles";

import { TbSearch } from "react-icons/tb";

import { useSetRecoilState } from "recoil";
import { atomPokemonSearch } from "../../store/atoms";
import { theme } from "../../styles/theme";

export function SearchInput() {
  const searchPokemon = useRef<HTMLInputElement | null>(null);
  const setPokemon = useSetRecoilState(atomPokemonSearch);

  function handleSearchPokemon(event: React.FormEvent) {
    event.preventDefault();

    setPokemon(searchPokemon.current?.value);
  }

  return (
    <S.SearchInputContainer onSubmit={handleSearchPokemon}>
      <input type="text" ref={searchPokemon} placeholder="Enter Pokémon name or number" />

      <button type="submit">
        <TbSearch size={16} color={theme.colors.text} />
      </button>
    </S.SearchInputContainer>
  );
}
