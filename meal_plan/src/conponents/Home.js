// import RecipeForm from "./form/RecipeForm";
// import RecipeList from "./RecipeList";
// import { useState } from "react";



function Home () {
    // const [isFormVisible, setFormVisible] = useState(false);
    // const [searchTerm, setSearchTerm] = useState('');
    // //const [linkClick, setLinkClick] = useState(false);

    // const handleClick = () => {
    //     setFormVisible(true);
    // }

    // const handleSearchTermChange = (event) => {
    //     setSearchTerm(event.target.value);
    // }

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
            Home
        </div>
    )
}

export default Home;