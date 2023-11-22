import { useState } from "react";
import RecipeDetail from "./RecipeDetail";

function RecipeListItem ({ recipe }) {
    const [openDetail, setOpenDetail] = useState(false);

    const handleClick = () => {
        setOpenDetail(true);
    }

    const handleClose = () => {
        setOpenDetail(false);
    }

    return (
        <div>
            <div onClick={handleClick}>
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/707175.jpeg" alt="Placeholder image"/>
                    </figure>
                </div>
                <div onClick={handleClick}>
                    <div>
                        <div>
                            <h2>{recipe.title}</h2>
                            <p>by {recipe.userName}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            Eat with: {recipe.eatWith} | Protein: {recipe.protein}
                        </div>
                        <div>
                            Prep Time: {recipe.prepTime} min | Cook Time: {recipe.cookTime} min | Total Time: {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} min
                        </div>
                    </div>
                </div>
                {openDetail && <RecipeDetail key={recipe.id} recipe={recipe} onClick={handleClose}/>}
            </div>
        </div>
    )
};

export default RecipeListItem;