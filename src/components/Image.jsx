import '../styles/Image.css';
import { useEffect, useState } from 'react';

function Image({ url, name, weight, height }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (url) {
      setImage(
        <div className='content-image'>
          <div className='pokemon-name'>
            <h3>
              {name}
            </h3>
          </div>
          <img 
            className="pokemon-img" 
            src={url} 
            alt={name} 
            />
          <div className='characteristics'>
            <span>Altura: {height} m Peso: {weight} kg</span>
          </div>
        </div>
      );
    }
  }, [url, name, weight, height]);

  return (
    <div className="content-box">
      {image}
    </div>
  );
}

export default Image;
