import '../styles/Input.css';

function Input({ type, value, action }) {
  return (
    <input 
      type={type}
      value={value}
      onChange={action} 
      placeholder="Digite o nome ou o ID do Pokémon (entre 1 e 1025, inclusive)." 
      className="input-text" 
    />
  );
};

export default Input;