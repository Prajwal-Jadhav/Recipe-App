import React from "react";

const Recipe = ({ recipes }) => {
  let renderedList = recipes.map(recipe => {
    return (
      <div className="recipe__body" key={recipe.recipe.uri}>
        <h2 className="recipe__heading">{recipe.recipe.label}</h2>
        <ul className="recipe__list">
          {recipe.recipe.ingredients.map(ingredient => {
            return <li className="recipe__list__item">{ingredient.text}</li>;
          })}
        </ul>
        <p className="recipe__calories">{recipe.recipe.calories}</p>
        <img
          className="recipe__image"
          src={recipe.recipe.image}
          alt={recipe.recipe.label}
        />
      </div>
    );
  });

  return <div className="Recipe">{renderedList}</div>;
};

export default Recipe;
