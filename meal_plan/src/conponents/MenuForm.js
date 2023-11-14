import { useState } from 'react';

function MenuForm () {
    const [formData, setFormData] = useState(
        {
            title: "", 
            eatWith: "", 
            protein: "",
            prepTime: "",
            cookTime: "",
            servings: "",
            ingredients: "",
            instructions: ""
        }
    );
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`
            title: ${formData.title}, 
            eatWith: ${formData.eatWith}, 
            protein: ${formData.protein}, 
            prepTime: ${formData.prepTime},
            cookTime: ${formData.cookTime},
            servings: ${formData.servings},
            ingredients: ${formData.ingredients},
            instructions: ${formData.instructions}`)
    }

    return (
        <div className="menu-form panel">
            <h4 className="subtitle is-3">Add Menu</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='title'>Title</label>
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
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='ingredients'>Ingredients</label>
                        <input 
                            className="inout is-expanded textarea"
                            type='text'
                            id='ingredients'
                            name='ingredients'
                            value={formData.ingredients}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="field-group">
                    <div className="field">
                        <label className="label" htmlFor='instructions'>Instructions</label>
                        <input 
                            className="textarea"
                            type='text'
                            id='instructions'
                            name='instructions'
                            value={formData.Ingredisnts}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default MenuForm;