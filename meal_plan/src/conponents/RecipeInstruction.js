function RecipeInstruction ({ recipe }) {
    return (
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
        </div>
    )
}

export default RecipeInstruction;