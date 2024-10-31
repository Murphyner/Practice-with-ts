import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';


const App: React.FC = () => {
  const [favori, setFavori] = useState<Boolean>(true)
  console.log(favori);
  
  return (
    <div className="flex h-screen">
      <LeftPanel setFavori={setFavori} />
      <RightPanel favori={favori} />
    </div>
  );
};

export default App;
