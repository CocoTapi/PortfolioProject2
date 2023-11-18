import { useState } from 'react';
import EditRecipe from './form/EditRecipe';

function RecipeDetail ({ recipe }) {
    const [openEditPage, setOpenEditPage] = useState(false);

    const handleClick = () => {
        setOpenEditPage(true);
    }

    return (
        <div>
            {openEditPage ? [
                <EditRecipe recipe={recipe} />
            ] : [
                <div>
                    <div class="content">
                    <div>Ingredients</div>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>  
                            ))}
                        </ul>
                    </div>
                    <div class="content">
                        <div>Instructions</div>
                        <ol>
                            {recipe.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>  
                            ))}
                        </ol>
                    </div>
                    <button onClick={handleClick}>Edit</button>
                </div>
            ]}
        </div>
    )
}

export default RecipeDetail;