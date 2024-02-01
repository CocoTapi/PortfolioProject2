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
                <div>
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/707175.jpeg" alt="Placeholder image"/>
                        </figure>
                    </div>
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
                    </div>
                    <Button warning onClick={handleClick}>Edit</Button>
                    <Button primary onClick={onClick}>Close</Button>
                </div>
            ]}
        </div>
    )
}

export default RecipeDetail;