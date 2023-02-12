import { api } from "../lib/axios";

export async function getAllPokemon(offset: number,) {
  return await api.get(`pokemon?limit=9&offset=${offset}`);
}
