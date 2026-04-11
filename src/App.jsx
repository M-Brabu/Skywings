import Home from './Home'
import Report from './Report'
import Story from './Story'
import Exploration from './Exploration'
import Dashboard from './Dashboard'
import Dataset from './Dataset'
import Notfound from './Notfound'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App(){
    const router=createBrowserRouter(
 [ {element:<Home/>,path:"/"},
 {element:<Dataset/>,path:"/Dataset"},
 {element:<Dashboard />,path:"/Dashboard"},
 {element:<Report />,path:"/Report"},
 {element:<Exploration/>,path:"/Exploration"},
 {element:<Story/>,path:"/Story"},
 {element:<Notfound/>,path:"*"}
 ])
return(
 <>
 <RouterProvider router={router}/>
 </>
)
}
export default App