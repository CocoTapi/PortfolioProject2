import RecipeForm from "./form/RecipeForm";
import RecipeList from "./RecipeList";
import { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Route from "./Route";
import Link from "./Link";
import Button from "./Button";

function Home () {
    const [isFormVisible, setFormVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    //const [linkClick, setLinkClick] = useState(false);

    const handleClick = () => {
        setFormVisible(true);
    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    // const handleLinkClick = (event) => {
    //     event.preventDefault();
    //     setLinkClick(true);
    // }

    // let content;
    // if (isFormVisible) {
    //     content = <RecipeForm setFormVisible={setFormVisible}/>
    // } else if (linkClick) {
    //     content = (
    //     <Route path="/recipes/chicken">
    //         <RecipeList searchTerm="chicken" />
    //     </Route>
    //     );
    // } else {
    //     content = <RecipeList searchTerm={searchTerm} />
    // }

    return (
        <div className="bg-wheat">
            <Header 
                onChange={handleSearchTermChange} 
                value={searchTerm}
            />
            <Navbar 
                onClick={handleClick}
            />
            {/* <Button onClick={handleLinkClick}>
                <Link to="/recipes/chicken">
                    Chicken
                </Link>
            </Button> */}
        
            <div>
                {/* {content} */}
                {isFormVisible ? [
                    <RecipeForm setFormVisible={setFormVisible}/>
                ] : [
                    <div>
                        <Route path="/recipes/chicken">
                            <RecipeList searchTerm="chicken" />
                        </Route>
                        <RecipeList searchTerm={searchTerm} />
                    </div>
                ]}

            </div>
        </div>
    )
}

export default Home;