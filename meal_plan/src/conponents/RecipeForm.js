import { useAddRecipeMutation } from '../store';
import { useState } from 'react';

function RecipeForm ({ setFormVisible }) {
    const [formData, setFormData] = useState(
        {
            userName: "",
            title: "", 
            eatWith: "", 
            protein: "",
            prepTime: "",
            cookTime: "",
            servings: "",
            ingredients: [""],
            instructions: [""]
        }
    );

    const [addRecipe] = useAddRecipeMutation();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    };
    
    //for ingredients FIX LATER
    const handleIngredientChange = (event, index) => {
        const newIngredients = [...formData.ingredients];
        newIngredients[index] = event.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, ingredients: newIngredients }));
    }

    const handleAddIngredient = (event) => {
        event.preventDefault();
        setFormData((prevFormData) => ({ ...prevFormData, ingredients: [...prevFormData.ingredients, ""]}));
    }

    //for instructions FIX LATER
    const handleInstructionChange = (event, index) => {
        const newInstructions = [...formData.instructions];
        newInstructions[index] = event.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, instructions: newInstructions }));
    }

    const handleAddInstruction = (event) => {
        event.preventDefault();
        setFormData((prevFormData) => ({ ...prevFormData, instructions: [...prevFormData.instructions, ""]}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ 
            userName: formData.userName,
            title: formData.title, 
            eatWith: formData.eatWith, 
            protein: formData.protein,
            prepTime: formData.prepTime,
            cookTime: formData.cookTime,
            servings: formData.servings,
            ingredients: formData.ingredients,
            instructions: formData.instructions
         });
        setFormData(
            {
                userName: "",
                title: "", 
                eatWith: "", 
                protein: "",
                prepTime: "",
                cookTime: "",
                servings: "",
                ingredients: [""],
                instructions: [""]
            }
        );
        setFormVisible(false);
    }

    return (
        <div className="menu-form panel">
            <h4 className="subtitle is-3">Add Recipe</h4>
            <form onSubmit={handleSubmit}>
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
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='protein'>Protein</label>
                        <div className="control">
                            <div className="select">
                                <select id='protein' name="protein" value={formData.protein} onChange={handleChange}>
                                <option>Select One</option>
                                <option value="chicken">Chicken</option>
                                <option value="pork">Pork</option>
                                <option value="beef">Beaf</option>
                                <option value="seafood">seafood</option>
                                <option value="beans">Beans</option>
                                <option value="other">Other</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                </div>
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
                <div className='label'>Ingredients</div>
                {formData.ingredients.map((ingredient, index) => (
                    <div className="field-group" key={index} >
                        <div className="field">
                            <label className="label" htmlFor={`ingredient-${index}`}>
                                {index + 1}
                            </label>
                            <input 
                                className="inout is-expanded"
                                type='text'
                                id={`ingredient-${index}`}
                                name={`ingredient-${index}`}
                                value={ingredient}
                                onChange={(event) => handleIngredientChange(event, index)} 
                            />
                        </div>
                    </div>
                ))
                }
                <button onClick={handleAddIngredient}>Add Ingredient</button>
                <div className='label'>Instructions</div>
                {formData.instructions.map((instruction, index) => (
                    <div className="field-group" key={index} >
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
                        </div>
                    </div>
                ))
                }
                <button onClick={handleAddInstruction}>Add Instruction</button>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeForm;