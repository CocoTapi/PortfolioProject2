function IngredientForm({ ingredient, index, onAmountChange, onUnitChange, onItemChange }) {
    return (
        <div>
            <div className="field-group" key={`ingredient-${index}`} >
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
                            placeholder='2'
                            onChange={onAmountChange}
                        />
                    <label className="label" htmlFor={`unit-${index}`}></label>
                    <div className="select">
                        <select 
                            id={`unit-${index}`} 
                            name={`unit-${index}`} 
                            value={ingredient.unit} 
                            onChange={onUnitChange}
                        >
                        <option>Select Unit</option>
                            <option value="pound">pound(s)</option>
                            <option value="tablespoon">tablespoon(s)</option>
                            <option value="teaspoon">teaspoon(s)</option>
                            <option value="cup">cup(s)</option>
                            <option value="piece">piece(s)</option>
                            </select>
                    </div>
                    <div>of</div>
                    <label className="label" htmlFor={`item-${index}`}></label>
                        <input
                            className="inout is-expanded"
                            type='text'
                            id={`item-${index}`}
                            name={`item-${index}`}
                            value={ingredient.item}
                            placeholder='salt'
                            onChange={onItemChange}
                        />
                    
                    </div>
                </div>
        </div>
    )
};

export default IngredientForm;