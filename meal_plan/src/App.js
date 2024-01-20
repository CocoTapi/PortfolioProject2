import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './conponents/pages/Root';
import Home from './conponents/Home';
//import RecipesPage from './conponents/pages/RecipesPage';
import RecipeList from './conponents/RecipeList';
import NewRecipePage from './conponents/pages/NewRecipePage';
import RecipeRootPage from './conponents/pages/RecipeRootPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />},
      {
        path: 'recipes',
        element: <RecipeRootPage />,
        children: [
          { 
            index: true,
            element: <RecipeList />
          },
          {
            path: 'new',
            element: <NewRecipePage />
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
