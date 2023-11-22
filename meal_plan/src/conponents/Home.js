import RecipeForm from "./form/RecipeForm";
import RecipeList from "./RecipeList";
import { useState } from "react";
import Header from "./Header";
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
            <Header 
                onChange={handleSearchTermChange} 
                value={searchTerm}
            />

            <body>
                <nav>
                    {/* TODO: add the location where you are */}
                    {/* <div>Path is here</div> */}
                </nav>
                <div>
                    <Button success onClick={handleClick} className="m-2">
                        Add Recipe
                    </Button>
                </div>
                {isFormVisible ? [
                    <RecipeForm setFormVisible={setFormVisible}/>
                ] : [
                    <RecipeList searchTerm={searchTerm} />
                ]}
            </body>
        </div>
    )
}

export default Home;