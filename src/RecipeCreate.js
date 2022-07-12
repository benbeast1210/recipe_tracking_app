import React, { useState } from "react";

export default function RecipeCreate({recipes, createRecipe}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const onChange = ({target}) => setFormData({ ...formData, [target.name]: target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);

    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                onChange={onChange}
                value={formData.name}
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
              />
            </td>
            <td>
              <input
                onChange={onChange}
                value={formData.cuisine}
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
              />
            </td>
            <td>
              <input
                onChange={onChange}
                value={formData.photo}
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
              />
            </td>
            <td>
              <textarea
                onChange={onChange}
                value={formData.ingredients}
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                rows={3}
              />
            </td>
            <td>
              <textarea
                onChange={onChange}
                value={formData.preparation}
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                required={true}
                rows={3}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}