import { TRecipe } from "../Types/index.js"




export const RecipeDetails = (recipe: TRecipe) => {
  return (
    <div>
        <h4>{recipe.title}</h4>
        <p>{recipe.description}</p>
        {recipe.steps?.map(s => <p>{s}</p>)}

    </div>
  )
}
