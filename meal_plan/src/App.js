import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './conponents/pages/Root';
import Home from './conponents/Home';
import RecipesPage from './conponents/pages/RecipesPage';
import NewRecipePage from './conponents/pages/NewRecipePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />},
      {
        path: 'recipes',
        element: [
          { 
            index: true,
            element: <RecipesPage />
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
