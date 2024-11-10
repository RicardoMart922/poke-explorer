import '../styles/Card.css';

function Card({ banner, content }) {

  const stats = Array.isArray(content) 
  ? content.map((item) => (
      <li key={item.stat.name}>
        <strong>{item.stat.name}:</strong> {item.base_stat}
      </li>
    ))
  : null;


  return (
    <div className="card">
      <div className="banner">
        {banner}
      </div>
      <div className="content">
        <ul>
          {stats}
        </ul>
      </div>
    </div>
  );
};

export default Card;