import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import RecipeSearch from "./RecipeSearch";
import { useState } from "react";

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
                <RecipeSearch 
                    onChange={handleSearchTermChange} 
                    value={searchTerm}/>
                <p>
                    <button class="button is-success is-inverted">Chicken</button>
                    <button class="button is-success is-inverted">Pork</button>
                    <button class="button is-success is-inverted">Beef</button>
                    <button class="button is-success is-inverted">Seafood</button>
                    <button class="button is-success is-inverted">Other</button>
                    <button class="button is-danger is-rounded" onClick={handleClick}>Add Recipe</button> 
                </p>
            </nav>
            {isFormVisible && <RecipeForm />}
            <RecipeList searchTerm={searchTerm} />
        </div>
    )
}

export default Home;