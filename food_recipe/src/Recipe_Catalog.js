import React from 'react';
import "./Recipe_Catalog.css"

export default function Recipe_Catalog({recipe}) {
  return (
        // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null &&
         (
        <div className='recipe_Catalog' onClick={() => { window.open(recipe["recipe"]["url"])}}>
            <img className='recipe_catalog__image' src={recipe["recipe"]["image"]} />
            <p className='recipe_catalog__name'> {recipe["recipe"]["label"]} </p>
        </div>
    )
   );
}
