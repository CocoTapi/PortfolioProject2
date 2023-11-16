import { useState } from "react";
import RecipeInstruction from "./RecipeInstruction";

function RecipeListItem ({ recipe }) {
    const [goRecipe, setGoRecipe ] = useState(false);

    const handleClick = () => {
        setGoRecipe(true);
    }

    return (
        <div>
            <div class="card" onClick={handleClick}>
                {/* <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/707175.jpeg" alt="Placeholder image"/>
                    </figure>
                </div> */}
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{recipe.title}</p>
                            <p class="subtitle is-6">by {recipe.userName}</p>
                        </div>
                    </div>
                    <div class="content">
                        <div>Eat with: {recipe.eatWith} | Protein: {recipe.protein}</div>
                        <div>Prep Time: {recipe.prepTime} min | Cook Time: {recipe.cookTime} min | Total Time: {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} min</div>
                    </div>
                </div>
                {goRecipe && <RecipeInstruction key={recipe.id} recipe={recipe}/>}
            </div>
        </div>
    )
};

export default RecipeListItem;