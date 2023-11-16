import { useFetchRecipeQuery } from "../store";
import RecipeListItem from "./RecipeListItem";

function RecipeList ({ searchTerm }) {
    const { data, error, isFetching } = useFetchRecipeQuery();
    console.log(searchTerm);

    let content;
    if (isFetching) {
        content = <div>Loading</div>
      } else if (error) {
        console.log(error)
        content = <div>Error loading recipes</div>
      } else {
        content = data
            // .filter(item => {
            //     return searchTerm.toLowerCase() === ''
            //         ? item
            //         : item.title.toLowerCase().includes(searchTerm);
            // })
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