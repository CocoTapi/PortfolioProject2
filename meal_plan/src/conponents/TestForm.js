import { useAddRecipeMutation } from '../store';
import { useState } from 'react';

function TestForm({ setFormVisible }) {
    const [formData, setFormData] = useState(
        {
            title: "",
            ingredients: [{ amount: "", unit: "", item: "" }],
        }
    );

    const [addRecipe] = useAddRecipeMutation();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    };

    //for ingredients FIX LATER
    const handleAmountChange = (event, index, property) => {
        const newIngredients = [...formData.ingredients];
        newIngredients[index][property] = event.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, ingredients: newIngredients }));
    }

    // const handleUnitChange = (event, index) => {
    //     const newIngredients = [...formData.ingredients];
    //     newIngredients[index] = { ...newIngredients[index], unit: event.target.value };
    //     setFormData((prevFormData) => ({ ...prevFormData, ingredients: newIngredients }));
    // }

    const handleAddIngredient = (event) => {
        event.preventDefault();
        setFormData((prevFormData) => ({ ...prevFormData, ingredients: [...prevFormData.ingredients, { amount: "", unit: "", item: "" }] }));
        // console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        const output = {
            title: formData.title,
            ingredients: []
        }
        for (const ingredient of formData.ingredients) {
            output.ingredients.push({ amount: ingredient.amount, unit: ingredient.unit, item: ingredient.item });
        }
        console.log(output)
        // console.log(`title: ${formData.title} ingredients: ${formData.ingredients}`)
        addRecipe(output);
        // setFormData(
        //     {
        //         title: "", 
        //         ingredients: [""],
        //     }
        // );
        // setFormVisible(false);
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
                            <label className="label" htmlFor={`amount-${index}`}>
                                {index + 1}
                            </label>
                            <input
                                className="inout is-expanded"
                                type='text'
                                id={`amount-${index}`}
                                name={`amount-${index}`}
                                value={ingredient.amount}
                                onChange={(event) => handleAmountChange(event, index, 'amount')}
                            />
                            <label className="label" htmlFor={`unit-${index}`}>
                            </label>
                            <input
                                className="inout is-expanded"
                                type='text'
                                id={`unit-${index}`}
                                name={`unit-${index}`}
                                value={ingredient.unit}
                                onChange={(event) => handleAmountChange(event, index, 'unit')}
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