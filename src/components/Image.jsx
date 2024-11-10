import { useEffect, useState } from 'react';
import '../styles/Image.css';

function Image({ url, name }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (url) {
      setImage(
        <>
          <img 
            className="img" 
            src={url} 
            alt={name} 
            />
          <h3 className="name">
            {name}
          </h3>
        </>
      );
    }
  }, [url, name]);

  return (
    <div className="image">
      {image}
    </div>
  );
}

export default Image;
