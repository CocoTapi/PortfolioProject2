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
            <nav class="panel">
                <p class="panel-heading has-background-primary-dark has-text-white">
                    Healthy Diet Meal Planning
                </p>
                <p>
                    <RecipeSearch 
                        onChange={handleSearchTermChange} 
                        value={searchTerm}/>
                    <button class="button is-danger is-rounded" onClick={handleClick}>
                        Add Recipe
                    </button>
                </p>
            </nav>
            {isFormVisible && <RecipeForm setFormVisible={setFormVisible}/>}
            {/* {isFormVisible && <TestForm setFormVisible={setFormVisible}/>} */}

            <RecipeList searchTerm={searchTerm} />
        </div>
    )
}

export default Home;