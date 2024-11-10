async function fetchPokemon(name) {
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  try {
    const response = await fetch(`${baseURL}${name.toLowerCase()}`);
    if (!response.ok) throw new Error("Pokémon não encontrado");

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error.message);
  }
}

export default fetchPokemon;