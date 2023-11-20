import { useState } from 'react';
import EditRecipe from './form/EditRecipe';
import Button from './Button';

function RecipeDetail ({ recipe, onClick }) {
    const [openEditPage, setOpenEditPage] = useState(false);

    const handleClick = () => {
        setOpenEditPage(true);
    }

    const handleGoBack = () => {
        setOpenEditPage(false);
    }

    return (
        <div>
            {openEditPage ? [
                // 
                <div key="edit-recipe">
                    <EditRecipe key={recipe.id} recipe={recipe} onClick={handleGoBack}/>
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
                    <Button warning onClick={handleClick}>Edit</Button>
                    <Button primary onClick={onClick}>Close</Button>
                </div>
            ]}
        </div>
    )
}

export default RecipeDetail;