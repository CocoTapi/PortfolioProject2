import { useState } from 'react';

function MenuForm () {
    const [newTitle, setNewTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [newRecipe, setNewRecipe] = useState('');

    const handleNameChange = (event) => {
        setNewTitle(event.target.value);
    }

    const handleAmountChange = (event) => {
        const vegiesAmount = parseInt(event.target.value);
        setAmount(vegiesAmount);
    }

    const handleRecipeChange = (event) => {
        setNewRecipe(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //addMenu
        setNewTitle('');
        setAmount('');
        setNewRecipe('');
    }

    return (
        <div className="menu-form panel">
            <h4 className="subtitle is-3">Add Menu</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Title</label>
                        <input 
                            className="inout is-expanded"
                            value={newTitle}
                            onChange={handleNameChange} 
                        />
                    </div>
                </div>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Eat with</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                <option>Rice</option>
                                <option>Bread</option>
                                <option>Pasta</option>
                                <option>All of them</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Protein</label>
                        <div class="control">
                            <div class="select">
                                <select>
                                <option>Chicken</option>
                                <option>Pork</option>
                                <option>Beaf</option>
                                <option>Beans</option>
                                <option>Other</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Amount of Vegetables</label>
                        <input 
                            className="inout is-expanded"
                            value={amount || ''}
                            onChange={handleAmountChange} 
                            type="number"
                        />
                        <div>% of your entire meal</div>
                    </div>
                </div>

                {/* fruis Amount  */}

                <div className="field-group">
                    <div className="field">
                        <label className="label">Recipe URL or Notes</label>
                        <input 
                            className="inout is-expanded"
                            value={newRecipe}
                            onChange={handleRecipeChange} 
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