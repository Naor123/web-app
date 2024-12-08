function Main() {
  function clickMe() {
    console.log("hello world");
  }
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map((food) => (
    <li key={food}>{food}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient)
    console.log(ingredients)
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
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
