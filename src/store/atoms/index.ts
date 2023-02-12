import { atom } from "recoil";
import { PokemonFetch, Pokemon } from "../../interfaces/index";

export const atomPokemonSearch = atom<string | undefined>({
  key: "atomPokemonSearch",
  default: undefined,
});

export const atomPokemonFetch = atom<PokemonFetch[]>({
  key: "atomPokemonFetch",
  default: [],
});

export const atomPokemonOffset = atom<number>({
  key: "atomPokemonOffset",
  default: 0,
});

export const atomPokemonList = atom<Pokemon[]>({
  key: "atomPokemonList",
  default: [],
});
