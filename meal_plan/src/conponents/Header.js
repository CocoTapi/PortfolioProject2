import RecipeSearch from "./RecipeSearch";
//import { CiMenuBurger } from "react-icons/ci";

function Header ({onChange, value }) {
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-smorkyGreen">
            <div  className="flex item-center">
                {/* <div className="cursor-pointer">
                    <CiMenuBurger size={30} />
                </div> */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-3">
                    Healthy Diet Meal
                </h1>             
            </div>    
            <div>
                <RecipeSearch
                    onChange={onChange} 
                    value={value}
                />
            </div>
        </div>
    )
}

export default Header;