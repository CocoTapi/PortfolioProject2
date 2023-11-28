import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    //handle when a user clicks 'back' or 'forward' button
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        };
        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, []);

    //update currentPath when pushState calls
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }
    
    return (
        <NavigationContext.Provider value={{ currentPath, navigate}}>
            {/* test the navigate function(line 21) */}
            {/* <div>
                <button onClick={() => navigate('/accordion')}>Go to accordion</button>
                <button onClick={() => navigate('/dropdown')}>Go to dropdown</button>
            </div> */}
            {children}
        </NavigationContext.Provider>
    )
};

export { NavigationProvider };
export default NavigationContext;