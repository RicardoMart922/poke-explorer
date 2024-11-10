import '../styles/App.css';
import { useState } from 'react';
import fetchPokemon from '../services/pokemonServices';
import Input from './Input';
import Button from './Button';
import Image from './Image';
import Card from './Card';


function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [stats, setStats] = useState('');
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  
  const handlerNamePokemon = (event) => {
    setPokemonName(event.target.value);
  }

  const handlerFetch = () => {
    fetchPokemon(pokemonName)
      .then((pokemon) => {
        setStats(pokemon.stats);
        setImgUrl(pokemon.sprites.front_default);
        setName(pokemon.name);
      })
      .catch((error) => {
        console.error('Erro ao buscar o Pokémon: ', error);
      });
  };

  return (
    <div className="">
      <div className='App'>
        <Input 
          type={'text'}
          value={pokemonName}
          action={handlerNamePokemon}
        />
        <Button 
          label={'Buscar'}
          action={handlerFetch}
        />    
      </div>
      <Card 
        banner={
          <Image 
            url={imgUrl} 
            name={name}
          />
        }
        content={stats} 
      />
    </div>
  );
}

export default App;
