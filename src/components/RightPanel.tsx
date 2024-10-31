import React, { useEffect, useState } from 'react';
import Card from './Card';
import { movies } from '../Data/movies';
import { Movie } from './types';
interface favori {
    favori : Boolean
}

const RightPanel: React.FC<favori> = ({favori}) => {
    const [data , setData] = useState<Movie[]>()
    const [id, setId] = useState<number[]>([])

    useEffect(() => {
        if (!favori) {
            setData(
                movies.filter((item) => id.includes(item.id))
            );
        } else {
            setData(movies); 
        }
    } , [id , favori])   
    

    return (
        <div className="flex flex-wrap justify-center items-center bg-gray-100 p-10 w-1/2 h-full overflow-y-auto space-x-4 md:w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {favori
                    ? movies.map((item, i) => (
                        <Card key={i} movie={item} setId={setId} id={id} />
                    ))
                    : data && data.length > 0
                        ? data.map((item, i) => (
                            <Card key={i} movie={item} setId={setId} id={id} />
                        ))
                        : 'Nothing to display'}
            </div>
        </div>
    );
};

export default RightPanel;
