import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
    })

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }
    
    return (
        <NavigationContext.Provider>
            {children}
        </NavigationContext.Provider>
    )
};

export { NavigationProvider };
export default NavigationContext;