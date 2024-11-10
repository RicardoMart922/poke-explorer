import '../styles/Button.css';

function Button({ label, action }) {
  return (
    <button 
      className='button'
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;