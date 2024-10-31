// components/LeftPanel.tsx
import React, { SetStateAction } from 'react';

interface setFavori {
    setFavori: React.Dispatch<React.SetStateAction<Boolean>>
}
const LeftPanel: React.FC<setFavori> = ({setFavori}) => {
    return (
        <div className="flex flex-col justify-center items-start bg-blue-900 text-white p-10 w-1/2 h-full space-y-6 md:w-full">
            <h1 className="text-4xl font-bold">Explore Your Options</h1>
            <p className="text-lg">
                Discover the endless possibilities with our curated selection of features and tools.
            </p>
            <div className="space-x-4">
                <button onClick={() => setFavori(true)} className="px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all">
                    All Movies
                </button>
                <button onClick={() => setFavori(false)} className="px-4 py-2 bg-transparent border-2 border-yellow-500 rounded-md hover:bg-yellow-500 transition-all">
                    Favorites
                </button>
            </div>
        </div>
    );
};

export default LeftPanel;
