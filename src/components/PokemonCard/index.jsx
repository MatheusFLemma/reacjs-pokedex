import axios from "axios";
import { useState } from "react";

import Container from "./styles";

function PokemonCard() {
  // STATES
  // INITIAL STATE = SEARCH INPUT
  const [pokemon, setPokemon] = useState("");
  // INITIAL STATE = ARRAY POKEMON DATA
  const [pokemonData, setPokemonData] = useState([]);
  // INITIAL STATE = POKEMON TYPE
  const [pokemonType, setPokemonType] = useState("");

  // FETCH FUNCTION
  const getPokemon = async () => {
    const toArray = [];

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (error) {
      console.log(error);
    }
  };

  // FUNCTION CHANGE INPUT
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  // FUNCTION INPUT SEARCH SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokémon Name"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div
            data-aos="fade-down"
            key={Math.random()}
            className={`pokemon ${pokemonType}`}
          >
            <div className="pokemon__infos" key={data.id}>
              <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
              <p>{("#" + "00" + data.id).slice(-3)}</p>
              <div className="type">
                <div className="type__name">
                  {pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}
                </div>
              </div>
            </div>

            <div className="pokemon__image">
              <img
                src={data.sprites["front_default"]}
                alt={`${data.name} game sprite`}
              />
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default PokemonCard;
