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
            <div>Welcome</div>
            <RecipeSearch />
            <button onClick={handleClick}>Add Recipe</button>
            {isFormVisible && <RecipeForm />}
            <RecipeList />
        </div>
    )
}

export default Home;