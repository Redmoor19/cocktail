function CartIngredientList({ cart }) {
  const ingredientsList = [];

  cart.forEach(({ ingredients }) => {
    ingredients.forEach((ingredient) => {
      if (ingredientsList.indexOf(ingredient.ingredient) === -1) {
        ingredientsList.push(ingredient.ingredient);
      }
    });
  });

  return (
    <div>
      <h2 className="py-4 text-center text-lg font-bold w-2/3 mx-auto text-stone-800">
        Unfortunately you cannot buy anything using our service, but we will
        provide you with ingredients list that you need to make picked
        cocktails.
      </h2>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {ingredientsList.map((ingredient) => (
          <div key={ingredient} className="flex gap-3">
            <input className="w-5 h-5" type="checkbox" />
            <p>{ingredient}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartIngredientList;
