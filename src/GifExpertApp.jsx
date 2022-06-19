import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Simple GIF Searcher</h1>

            <AddCategory onNewCategory={onAddCategory} />
            
            {categories.map(c => <GifGrid key={c} category={c} />)}

            <p className="credits">App creada en el curso de Fernando Herrera</p>
        </>
    )
}
