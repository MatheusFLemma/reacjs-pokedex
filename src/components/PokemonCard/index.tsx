import { useEffect, useMemo } from "react";
import { useRecoilRefresher_UNSTABLE, useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil";

import * as S from "./styles";

import { SearchInput } from "../SearchInput";
import { Loading } from "../Loading";
import { MoreButton } from "../MoreButton";
import { toast } from "react-toastify";

import {
  selectorGetAllPokemon,
  selectorGetPokemon,
  selectorGetPokemonSearch,
} from "../../store/selectors";
import { atomPokemonFetch, atomPokemonList } from "../../store/atoms";

import { typeTranslate } from "../../utils/typeTranslate";

import { PokemonType } from "./types";

export function PokemonCard() {
  const setFetchPokemon = useSetRecoilState(atomPokemonFetch);
  const [pokemonList, setPokemonList] = useRecoilState(atomPokemonList);
  const { contents: searchPokemonContents, state: searchPokemonState } =
    useRecoilValueLoadable(selectorGetPokemonSearch);
  const { contents: allPokemonContents, state: allPokemonState } =
    useRecoilValueLoadable(selectorGetAllPokemon);
  const { contents: getPokemonContents, state: getPokemonState } =
    useRecoilValueLoadable(selectorGetPokemon);

  const disabledFetchMorePokemon = useMemo(() => {
    if (
      getPokemonState === "hasError" ||
      getPokemonState === "loading" ||
      searchPokemonState === "hasError" ||
      searchPokemonState === "loading"
    ) {
      return true;
    } else {
      return false;
    }
  }, [getPokemonContents, getPokemonState]);

  const hasFetchPokemonError = useMemo(() => {
    if (
      getPokemonState === "hasError" ||
      searchPokemonState === "hasError"
    ) {
      return true;
    } else {
      return false;
    }
  }, [getPokemonContents, getPokemonState]);

  useEffect(() => {
    if (allPokemonState === "hasValue" && allPokemonContents !== undefined) {
      setFetchPokemon(allPokemonContents.results);
    }
  }, [allPokemonContents, allPokemonState]);

  useEffect(() => {
    if (getPokemonState === "hasValue" && getPokemonContents !== undefined) {
      if (pokemonList.length) {
        setPokemonList(pokemonList.concat(getPokemonContents));
      } else {
        setPokemonList(getPokemonContents);
      }
    }
  }, [getPokemonContents, getPokemonState]);

  return (
    <S.Container>
      <SearchInput />

      {hasFetchPokemonError && toast.error(searchPokemonContents.message)}
      {searchPokemonState === "loading" && <Loading />}

      {searchPokemonState === "hasValue" && searchPokemonContents !== undefined && (
        <S.Card
          data-aos="fade-down"
          key={searchPokemonContents.name}
          pokemonPrincipalType={searchPokemonContents.types[0].type.name}
        >
          <S.CardInformation>
            <h2>
              {searchPokemonContents.name.charAt(0).toUpperCase() +
                searchPokemonContents.name.slice(1)}
            </h2>
            <p>{("#" + "000" + searchPokemonContents.id).slice(-5)}</p>
            <S.CardTypes className="type">
              {searchPokemonContents.types.map(({ type }: PokemonType) => {
                const typeTranslatedAndCapitalized =
                  typeTranslate[type.name].charAt(0).toUpperCase() +
                  typeTranslate[type.name].slice(1);

                return <p key={type.name}>{typeTranslatedAndCapitalized}</p>;
              })}
            </S.CardTypes>
          </S.CardInformation>

          <S.CardImageWrapper>
            <img
              src={searchPokemonContents.sprites.front_default}
              alt={`${searchPokemonContents.name} game sprite`}
            />
          </S.CardImageWrapper>
        </S.Card>
      )}

      <S.CardContainer>
        {pokemonList.map((pokemon) => (
          <S.Card
            data-aos="fade-down"
            key={pokemon.name}
            pokemonPrincipalType={pokemon.types[0].type.name}
          >
            <S.CardInformation>
              <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
              <p>{("#" + "000" + pokemon.id).slice(-5)}</p>
              <S.CardTypes className="type">
                {pokemon.types.map(({ type }: PokemonType) => {
                  const typeTranslatedAndCapitalized =
                    typeTranslate[type.name].charAt(0).toUpperCase() +
                    typeTranslate[type.name].slice(1);

                  return <p key={type.name}>{typeTranslatedAndCapitalized}</p>;
                })}
              </S.CardTypes>
            </S.CardInformation>

            <S.CardImageWrapper>
              <img src={pokemon.sprites.front_default} alt={`${pokemon.name} game sprite`} />
            </S.CardImageWrapper>
          </S.Card>
        ))}
      </S.CardContainer>

      <MoreButton disabled={disabledFetchMorePokemon} />
    </S.Container>
  );
}
