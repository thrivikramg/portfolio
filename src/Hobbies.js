// App.js

import React from 'react';
import Card from './Card';
import imageSrc1 from './luffy.jpg';
import imageSrc2 from './miles.jpg'; 
import imageSrc3 from './songs.jpg'; 

const App = () => {
  return (
    <div className="App">
      <Card
        title="Example Card 1"
        content="This is some content for the first card."
        imageUrl={imageSrc1}
      />
      <Card
        title="Example Card 2"
        content="This is some content for the second card."
        imageUrl={imageSrc2}
      />
      <Card
        title="Example Card 3"
        content="This is some content for the third card."
        imageUrl={imageSrc3}
      />
    </div>
  );
}

export default App;
