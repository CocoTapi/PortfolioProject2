import { useFetchRecipeQuery } from "../store";
import RecipeListItem from "./RecipeListItem";
//import {useState} from 'react';

function RecipeList ({ searchTerm }) {
    const { data, error, isFetching } = useFetchRecipeQuery();
    //const [filterTerm, setFilterTerm ] = useState(searchTerm);
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
            <div>
                {/*TODO: ADD FUNCTION LATER */}
                <button >Chicken</button>
                <button >Pork</button>
                <button >Beef</button>
                <button >Seafood</button>
                <button >Other</button>
            </div>
            {content}
        </div>
    )
}

export default RecipeList;