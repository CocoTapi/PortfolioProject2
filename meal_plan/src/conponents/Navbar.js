import { NavLink } from 'react-router-dom';

function Navbar () {
   return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink
                        to=''
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='recipes'
                    >
                        Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='new'
                    >
                        Add Recipe
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
   )
};

export default Navbar;