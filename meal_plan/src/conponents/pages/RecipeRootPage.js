import RecipeNav from "../RecipeNav";
import { Outlet } from "react-router-dom";

function RecipeRootPage () {
    return (
        <>
        <RecipeNav />
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default RecipeRootPage;