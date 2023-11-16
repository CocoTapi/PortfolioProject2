import { useAddRecipeMutation } from '../store';
import { useState } from 'react';

function TestForm ({ setFormVisible }) {
    const [formData, setFormData] = useState(
        {
            title: "", 
            ingredients: [""],
        }
    );

    //insert Object into ingredients
    const [seasonings, setSeasonings] = useState(
        {
        amount: "",
        unit: "",
        item: ""
        }
    );
    
    const handleSeasoningChange = (e) => {
        const { label, labelValue } = e.target;
        setSeasonings((prevSeasonings) => ({...prevSeasonings, [label]: labelValue}))
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ 
            title: formData.title, 
            ingredients: formData.ingredients,
         });
        setFormData(
            {
                title: "", 
                ingredients: [""],
            }
        );
        setFormVisible(false);
    }

    return (
        <div className="menu-form panel">
            <h4 className="subtitle is-3">Add Recipe</h4>
            <form onSubmit={handleSubmit}>
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
                {/* recipe ingredients */}
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
                {/* submit button */}
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TestForm;