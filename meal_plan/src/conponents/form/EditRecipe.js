import { useEditRecipeMutation, useRemoveRecipeMutation } from "../../store";
import { useState } from 'react';
import IngredientForm from './IngredientForm';
import { RiDeleteBinFill } from "react-icons/ri";
import Button from "../Button";


function EditRecipe ({ recipe, onClick }) {
    const [updateRecipe, { isLoading, error }] = useEditRecipeMutation();
    const [removeRecipe] = useRemoveRecipeMutation();
    const initial = {
        userName: recipe.userName,
        title: recipe.title, 
        eatWith: recipe.eatWith, 
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        ingredients: [],
        instructions: recipe.instructions
    }
    for (const ingredient of recipe.ingredients) {
        initial.ingredients.push({ amount: ingredient.amount, unit: ingredient.unit, item: ingredient.item });
    }

    const [formData, setFormData] = useState(initial);
    //const history = useHistory();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    };

    //for ingredients
    const handleIngredientChange = (event, index, property) => {
        const newIngredients = [...formData.ingredients];
        newIngredients[index][property] = event.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, ingredients: newIngredients }));
    };
    const handleAddIngredient = (event) => {
        event.preventDefault();
        setFormData((prevFormData) => ({ ...prevFormData, ingredients: [...prevFormData.ingredients, { amount: "", unit: "", item: "" }] }));
    };
    const handleDeleteIngredients = (event, index) => {
        const values = [...formData.ingredients];
        values.splice(index, 1);
        setFormData((prevFormData) => ({ ...prevFormData, ingredients: values }));
    }

    //for instructions
    const handleInstructionChange = (event, index) => {
        const newInstructions = [...formData.instructions];
        newInstructions[index] = event.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, instructions: newInstructions }));
    };
    const handleAddInstruction = (event) => {
        event.preventDefault();
        setFormData((prevFormData) => ({ ...prevFormData, instructions: [...prevFormData.instructions, ""]}));
    };
    const handleDeleteInstructions = (event, index) => {
        const values = [...formData.instructions];
        values.splice(index, 1);
        setFormData((prevFormData) => ({ ...prevFormData, instructions: values }));
    };

    //output
    const output = {
            userName: formData.userName,
            title: formData.title, 
            eatWith: formData.eatWith, 
            prepTime: formData.prepTime,
            cookTime: formData.cookTime,
            servings: formData.servings,
            ingredients: [],
            instructions: formData.instructions,
            id: recipe.id
    }
    for (const ingredient of formData.ingredients) {
        output.ingredients.push({ amount: ingredient.amount, unit: ingredient.unit, item: ingredient.item });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (output) {
            console.log(output);
            await updateRecipe(output)
        } else if (error) {
            console.log(error);
        }
    }

    const handleDeleteRecipe = () => {
        removeRecipe(recipe);
    }

    return (
        <div className="menu-form" key={`edit-recipe-${recipe.id}`}>
            <h4 className="subtitle is-3">Edit Recipe</h4>
            <form onSubmit={handleSubmit}>
                {/* user name */}
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='userName'>User Name</label>
                        <input 
                            className="inout is-expanded"
                            type='text'
                            id='userName'
                            name='userName'
                            value={formData.userName}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                {/* recipe title */}
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='title'>Recipe Title</label>
                        <input 
                            className="inout is-expanded"
                            type='text'
                            id='title'
                            name='title'
                            value={formData.title}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                {/* eat with */}
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='eatWith'>Eat with</label>
                        <div className="control">
                            <div className="select">
                                <select id='eatWith' name='eatWith' value={formData.eatWith} onChange={handleChange}>
                                <option>Select One</option>
                                <option value="rice">Rice</option>
                                <option value="bread">Bread</option>
                                <option value="pasta">Pasta</option>
                                <option value="all of them">All of them</option>
                                <option value="other">Other</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* prep time */}
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='prepTime'>Prep Time</label>
                        <input 
                            className="inout is-expanded"
                            id='prepTime'
                            name='prepTime'
                            value={formData.prepTime || ''}
                            onChange={handleChange} 
                            type="number"
                        />
                        <div>mins</div>
                    </div>
                </div>
                {/* cook time */}
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='cookTime'>Cook Time</label>
                        <input 
                            className="inout is-expanded"
                            id='cookTime'
                            name='cookTime'
                            value={formData.cookTime || ''}
                            onChange={handleChange} 
                            type="number"
                        />
                        <div>mins</div>
                    </div>
                </div>
                {/* servings */}
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='servings'>Servings</label>
                        <input 
                            className="inout is-expanded"
                            id='servings'
                            name='servings'
                            value={formData.servings || ''}
                            onChange={handleChange} 
                            type="number"
                        />
                    </div>
                </div>
                {/* ingredients */}
                <div className='label'>Ingredients</div>
                {formData.ingredients.map((ingredient, index) => (
                    <div className='field' key={`ingredient-${index}`}>
                        <IngredientForm
                        ingredient={ingredient}
                        index={index} 
                        onAmountChange={(event) => handleIngredientChange(event, index, 'amount')}
                        onUnitChange={(event) => handleIngredientChange(event, index, 'unit')}
                        onItemChange={(event) => handleIngredientChange(event, index, 'item')}
                        onClick={handleAddIngredient}
                        setFormData={setFormData}
                        />
                        <Button onClick={(event) => handleDeleteIngredients(event, index)} secondary>
                            <RiDeleteBinFill />
                        </Button>
                    </div>
                ))}
                <Button onClick={handleAddIngredient} primary>
                    Add Ingredient
                </Button>
                {/* instructions */}
                <div className='label'>Instructions</div>
                {formData.instructions.map((instruction, index) => (
                    <div className="field-group" key={`instruction-${index}`} >
                        <div className="field">
                            <label className="label" htmlFor={`instruction-${index}`}>
                                {index + 1}
                            </label>
                            <input 
                                className="inout is-expanded"
                                type='text'
                                id={`instruction-${index}`}
                                name={`instruction-${index}`}
                                value={instruction}
                                onChange={(event) => handleInstructionChange(event, index)} 
                            />
                            <Button onClick={(event) => handleDeleteInstructions(event, index)} secondary>
                                <RiDeleteBinFill />
                            </Button>
                        </div>
                    </div>
                ))
                }
                <Button onClick={handleAddInstruction} primary>
                    Add Instruction
                </Button>
                <div className="field">
                    <Button success className='m-4'>Submit</Button>
                </div>
                <div>
                    <Button onClick={handleDeleteRecipe} danger>Delete Recipe</Button>
                </div>
                <div>
                    <Button onClick={onClick} success outline>Back</Button>
                </div>
            </form>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error updating recipe</div>}
        </div>
    )
}

export default EditRecipe;