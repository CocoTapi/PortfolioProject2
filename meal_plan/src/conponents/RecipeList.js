import { useFetchRecipeQuery } from "../store";
import RecipeListItem from "./RecipeListItem";
import {useState} from 'react';

function RecipeList ({ searchTerm }) {
    const { data, error, isFetching } = useFetchRecipeQuery();
    const [filterTerm, setFilterTerm ] = useState(searchTerm);
    let content;
    if (isFetching) {
        content = <div>Loading</div>
      } else if (error) {
        console.log(error)
        content = <div>Error loading recipes</div>
      } else {
        content = data
            .filter((recipe) => {
               return recipe.title.toLowerCase().includes(filterTerm.toLowerCase());
            })
            .map(recipe => {
            return <RecipeListItem key={recipe.id} recipe={recipe} />
            });
      }

    return (
        <div>
            <p>
                {/*TODO: ADD FUNCTION LATER */}
                <button class="button is-success is-inverted" onClick={()=> setFilterTerm('chicken')}>Chicken</button>
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