export class PokeService {
    public getPokemon = async (pokemon: string) => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon,{method: "GET"}).then((response) => response.json());
        return response;
    }
}