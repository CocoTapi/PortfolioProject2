import { useState } from 'react';

function MenuForm () {
    const [newValue, setNewValue] = useState('');

    const handleNameChange = (event) => {
        setNewValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //addMenu
        setNewValue('');
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
                            value={newValue}
                            onChange={handleNameChange} 
                        />
                    </div>
                </div>
                {/* <div className="field-group">
                    <div className="field">
                        <label className="label">Whole Grains</label>
                        <input 
                            className="inout is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange} 
                            type="number"
                        />
                    </div>
                </div> */}
                <div className="field">
                <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default MenuForm;