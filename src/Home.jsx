import Navbar from './Navbar'
import Cognos from './Cognos'
function Home(){
    return (<>
    <Navbar/>
     
    <div className="content">
       <h1>Home</h1>
    </div>
      <Cognos/>
    </>)
}
export default Home