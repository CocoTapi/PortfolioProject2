import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar ({ onClick }) {
    const barOptions = ['chicken', 'Pork', 'Beef', 'Seafood', 'Other'];
    const renderedOptions = barOptions.map((option, index) => {
        return (
            <Button key={index} secondary className="flex">
                {option}
                <IoMdArrowDropdown  />
            </Button>)
    })
    

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center">
            {/*TODO: ADD FUNCTION LATER */}
            <div className="flex">
                {renderedOptions}
            </div>
            
            <Button success onClick={onClick} >
                Add Recipe
            </Button>

            {/* TODO: add the location where you are */}
            {/* <div>Path to the location is here</div> */}
        </div>
    )
};

export default Navbar;