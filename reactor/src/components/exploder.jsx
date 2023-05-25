import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import explosionSound from '/src/assets/rumblekick.wav';
import explodeGif from '/src/assets/explode.gif';

export default function Exploder() {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const gifDuration = 1500; // Replace this with the duration of your GIF in milliseconds
  const [play] = useSound(explosionSound);
  const gifStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1000,
    display: isGifVisible ? 'block' : 'none',
  };

  const handleClick = () => {
    setIsGifVisible(true);
    setGifKey(gifKey + 1);
    play();
  };

  useEffect(() => {
    if (isGifVisible) {
      const timer = setTimeout(() => {
        setIsGifVisible(false);
      }, gifDuration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isGifVisible, gifDuration]);

  return (
    <div className="Exploder">
      <header className="App-header">
        <button onClick={handleClick}>☢️ Initiate Destruction ☢️ </button>
        <img
          key={gifKey}
          src={isGifVisible ? explodeGif : '/static_image.png'}
          alt="GIF"
          style={gifStyle}
        />
      </header>
    </div>
  );
}
      