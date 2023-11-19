import { IoSearch } from "react-icons/io5";

function RecipeSearch ({ value, onChange }) {
    return (
        <div>
            <p>
                <input 
                    type="text" 
                    placeholder="Search"
                    value={value}
                    onChange={onChange}
                />
                <span>
                    <IoSearch />
                </span>
            </p>
        </div>
    )
}

export default RecipeSearch;