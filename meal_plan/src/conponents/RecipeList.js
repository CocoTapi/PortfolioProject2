import { useFetchRecipeQuery } from "../store";
import RecipeListItem from "./RecipeListItem";

function RecipeList ({ searchTerm }) {
    const { data, error, isFetching } = useFetchRecipeQuery();

    let content;
    if (isFetching) {
        content = <div>Loading</div>
      } else if (error) {
        console.log(error)
        content = <div>Error loading recipes</div>
      } else {
        content = data
            .filter((recipe) => {
               return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map(recipe => {
            return <RecipeListItem key={recipe.id} recipe={recipe} />
            });
      }

    return (
        <div>
            {content}
        </div>
    )
}

export default RecipeList;