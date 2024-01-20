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
            // .filter((recipe) => {
            //    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
            // })
            .map(recipe => {
            return <RecipeListItem key={recipe.id} recipe={recipe} />
            });
      }

    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols- sm:grid-cols-2 gap-6 bg-wheat">
            {content}
        </div>
    )
}

export default RecipeList;