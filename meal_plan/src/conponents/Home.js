import RecipeForm from "./form/RecipeForm";
import RecipeList from "./RecipeList";
import { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Navbar from "./Navbar";

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
            <Navbar 
                onClick={handleClick}
            />

            <body>
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