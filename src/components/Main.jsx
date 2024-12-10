import { useState } from "react";
function Main() {
  function clickMe() {
    console.log("hello world");
  }
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((food) => (
    <li key={food}>{food}</li>
  ));

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main>
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="add ingredient"
          name="ingredient"
        />
        <button>add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}

export default Main;
