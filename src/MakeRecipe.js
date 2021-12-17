import React from "react";

function MakeRecipe({ recipes, setRecipes }) {
  const handleDelete = (id) => {
    setRecipes([...recipes].filter((recipe, index) => id !== index));
  };
  const recipeElements = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={name.id}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} alt={photo} />
        </td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td>
          <button name="delete" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </td>
      </tr>
    )
  );
  return <>{recipeElements}</>;
}

export default MakeRecipe;
