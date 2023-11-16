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
            <p>
                {/* ADD FUNCTION LATER */}
                <button class="button is-success is-inverted">Chicken</button>
                <button class="button is-success is-inverted">Pork</button>
                <button class="button is-success is-inverted">Beef</button>
                <button class="button is-success is-inverted">Seafood</button>
                <button class="button is-success is-inverted">Other</button>
            </p>
            {content}
        </div>
    )
}

export default RecipeList;