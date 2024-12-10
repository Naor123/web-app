import { useState } from "react";
function Main() {
 
  const [ingredients, setIngredients] = useState([]);

  const [recipieShown , setRecipieShown] = useState(false)

  const ingredientsListItems = ingredients.map((food) => (
    <li key={food}>{food}</li>
  ));

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  function flipState(){setRecipieShown((laststate)=>!laststate)}

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
      {ingredients.length > 0 && (
        <section>
          <h2>ingredients on hand</h2>
          <ul>{ingredientsListItems}</ul>
          {ingredients.length > 3 && <div>
            <div>
              <h3>ready for a recipie?</h3>
              <p> generate a recipie from your list of ingredients</p>
            </div>
            <button onClick={flipState}>get a recipie</button>
          </div>}
        </section>)}
        {recipieShown && <h1>its working</h1>}
    </main>
  );
}

export default Main;
