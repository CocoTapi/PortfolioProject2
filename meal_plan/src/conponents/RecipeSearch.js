import { IoSearch } from "react-icons/io5";

function RecipeSearch ({ value, onChange }) {
    return (
        <div className="bg-white flex items-center px-3 w-[200px] sm:w-[300px] lg:w-[500px]" >
            <IoSearch size={20}/>
            <input
            className="bg-white ml-2 p-2 w-full" 
                type="text" 
                placeholder="Search"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default RecipeSearch;