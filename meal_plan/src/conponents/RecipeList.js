import { useFetchRecipeQuery } from "../store";
import RecipeListItem from "./RecipeListItem";
import Button from "./Button";
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
        <div className="bg-wheat">
            <div>
                {/*TODO: ADD FUNCTION LATER */}
                <Button primary className='mb-1'>Chicken</Button>
                <Button primary className='mb-1'>Pork</Button>
                <Button primary className='mb-1'>Beef</Button>
                <Button primary className='mb-1'>Seafood</Button>
                <Button primary className='mb-1'>Other</Button>
            </div>
            {content}
        </div>
    )
}

export default RecipeList;