import '../styles/Input.css';

function Input({ type, value, action }) {
  return (
    <input 
      type={type}
      value={value}
      onChange={action} 
      placeholder="Digite o nome ou id do pokemon" 
      className="input-text" 
    />
  );
};

export default Input;