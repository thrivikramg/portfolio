import React from 'react';
import Card from './Card';
import imageSrc4 from './Meemes_maamey.png';
import imageSrc5 from './ViMusic.png'; 
import imageSrc6 from './Vipdf.png'; 

const App = () => {
  return (
    <div className="App">
      <Card
        title="Example Card 1"
        content="This is some content for the first card."
        imageUrl={imageSrc4}
      />
      <Card
        title="Example Card 2"
        content="This is some content for the second card."
        imageUrl={imageSrc5}
      />
      <Card
        title="Example Card 3"
        content="This is some content for the third card."
        imageUrl={imageSrc6}
      />
    </div>
  );
}

export default App;
