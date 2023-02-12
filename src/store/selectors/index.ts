import { selector } from "recoil";
import { Pokemon, PokemonFetch } from "../../interfaces/index";
import { getAllPokemon } from "../../services/getAllPokemon";
import { getPokemon } from "../../services/getPokemon";
import { atomPokemonFetch, atomPokemonOffset, atomPokemonSearch } from "../atoms";

export const selectorGetPokemonSearch = selector<Pokemon>({
  key: "selectorGetPokemonSearch",
  get: async ({ get }) => {
    const pokemon = get(atomPokemonSearch);

    if (pokemon) {
      const pokemonNameFormatted = pokemon.toLowerCase().trim();

      const { data } = await getPokemon(pokemonNameFormatted);

      return data;
    }
  },
});

export const selectorGetPokemon = selector({
  key: "selectorGetPokemon",
  get: async ({ get }) => {
    const pokemonFetch = get(atomPokemonFetch);

    if (pokemonFetch.length) {
      const list = pokemonFetch.map((pokemon: PokemonFetch) => pokemon.name);
      const result = list.map(async (pokemon) => {
        const { data } = await getPokemon(pokemon);

        return data;
      });

      const pokemonList = Promise.all(result);

      return pokemonList;
    }
  },
});

export const selectorGetAllPokemon = selector({
  key: "selectorGetAllPokemon",
  get: async ({ get }) => {
    const fetchOffset = get(atomPokemonOffset);

    const { data } = await getAllPokemon(fetchOffset);

    return data;
  },
});
