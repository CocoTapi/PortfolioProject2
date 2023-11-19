import { useState } from 'react';
import EditRecipe from './form/EditRecipe';

function RecipeDetail ({ recipe, onClick }) {
    const [openEditPage, setOpenEditPage] = useState(false);

    const handleClick = () => {
        setOpenEditPage(true);
    }

    return (
        <div>
            {openEditPage ? [
                // 
                <div key="edit-recipe">
                    <EditRecipe key={recipe.id} recipe={recipe}/>
                </div>
            ] : [
                <div key={`recipe-detail-${recipe.id}`}>
                    <div>
                    <div>Ingredients</div>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient.amount} {ingredient.unit} {ingredient.item}</li>  
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div>Instructions</div>
                        <ol>
                            {recipe.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>  
                            ))}
                        </ol>
                    </div>
                    <button onClick={handleClick}>Edit</button>
                    <button onClick={onClick}>Close</button>
                </div>
            ]}
        </div>
    )
}

export default RecipeDetail;