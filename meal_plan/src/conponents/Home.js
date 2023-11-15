import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import RecipeSearch from "./RecipeSearch";
import { useState } from "react";

function Home () {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(true);
    }
    return (
        <div>
            <nav class="panel">
                <p class="panel-heading has-background-primary-dark has-text-white">
                    Healthy Diet Meal Planning
                </p>
                <RecipeSearch />
                <p class="panel-tabs">
                    <a class="is-active">Home</a>
                    <a>New</a>
                    <a>Meal Plan</a>
                    <button class="button is-danger is-rounded" onClick={handleClick}>Add Recipe</button> 
                </p>
            </nav>
            {isFormVisible && <RecipeForm />}
            <RecipeList />
        </div>
    )
}

export default Home;