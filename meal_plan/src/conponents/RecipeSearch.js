import { IoSearch } from "react-icons/io5";

function RecipeSearch ({ value, onChange }) {
    return (
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="Search"
                    value={value}
                    onChange={onChange}
                />
                <span>
                    <IoSearch />
                </span>
            </div>
        </div>
    )
}

export default RecipeSearch;