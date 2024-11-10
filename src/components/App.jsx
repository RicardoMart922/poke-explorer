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
  const [abilities, setAbilities] = useState('');
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [weight, setWeight] = useState(0);
  const [heigth, setHeight] = useState(0);
  
  const handlerNamePokemon = (event) => {
    setPokemonName(event.target.value);
  }

  const handlerFetch = () => {
    fetchPokemon(pokemonName)
      .then((pokemon) => {
        setWeight(pokemon.weight);
        setHeight(pokemon.height / 10);
        setStats(pokemon.stats);
        setAbilities(pokemon.abilities)
        setImgUrl(pokemon.sprites.front_default);
        setName(pokemon.name);
      })
      .catch((error) => {
        alert('Pokémon não encontrado.')
        console.error('Erro ao buscar o Pokémon: ', error);
      });
  };

  return (
    <div className="body">
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
            weight={weight}
            height={heigth}
          />
        }
        content={[stats, abilities]} 
      />
    </div>
  );
}

export default App;
