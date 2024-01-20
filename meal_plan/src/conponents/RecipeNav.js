import { NavLink } from "react-router-dom";

function RecipeNav() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/recipes'
                        >
                            All Recipes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default RecipeNav;