import React from "react";

export default function RecipeList({ recipes, createRecipe, deleteRecipe }) {

  //const handleDeleteOnClick = (id) => deleteRecipe(id); 
  function handleDeleteOnClick(index) {
    deleteRecipe(index);
  }

  let rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => {
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} alt="Recipe" />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={() => handleDeleteOnClick(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}