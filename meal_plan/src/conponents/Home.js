import RecipeForm from "./form/RecipeForm";
import RecipeList from "./RecipeList";
import RecipeSearch from "./RecipeSearch";
import { useState } from "react";
//import TestForm from "./form/TestForm";

function Home () {
    const [isFormVisible, setFormVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const handleClick = () => {
        setFormVisible(true);
    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <nav>
                <h1>
                    Healthy Diet Meal Planning
                </h1>
                <div>
                    <RecipeSearch 
                        onChange={handleSearchTermChange} 
                        value={searchTerm}/>
                    <button onClick={handleClick}>
                        Add Recipe
                    </button>
                </div>
            </nav>
            {isFormVisible && <RecipeForm setFormVisible={setFormVisible}/>}
            {/* {isFormVisible && <TestForm setFormVisible={setFormVisible}/>} */}

            <RecipeList searchTerm={searchTerm} />
        </div>
    )
}

export default Home;