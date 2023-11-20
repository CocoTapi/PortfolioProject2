import RecipeForm from "./form/RecipeForm";
import RecipeList from "./RecipeList";
import RecipeSearch from "./RecipeSearch";
import { useState } from "react";
import Button from "./Button";

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
        <div className="bg-wheat">
            <nav>
                <h1>
                    Healthy Diet Meal Planning
                </h1>
                <div>
                    <RecipeSearch 
                        onChange={handleSearchTermChange} 
                        value={searchTerm}/>
                    <Button success onClick={handleClick} className="m-2">
                        Add Recipe
                    </Button>
                </div>
            </nav>
            {isFormVisible ? [
                <RecipeForm setFormVisible={setFormVisible}/>
            ] : [
                <RecipeList searchTerm={searchTerm} />
            ]}
        </div>
    )
}

export default Home;