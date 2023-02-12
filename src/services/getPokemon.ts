import { api } from "../lib/axios";

export async function getPokemon(pokemon: string) {
  return await api.get(`/pokemon/${pokemon}`);
}
