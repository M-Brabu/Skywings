import {Link} from 'react-router-dom'
import airplane from './assets/Logos/airplanelogo.png'
function Navbar(){
    return(
       <>
       <div className="Navbar">
       
        <h1 className='m-2'> <img src={airplane} id="airplanelogo" className='mx-2 '/> Skywings Data Analysis</h1>
        <div className='btn-group p-3'>
        <Link to="/" className='btn btn-primary '>Home</Link>    
        <Link to="/Report" className='btn btn-dark '>Report</Link>
        <Link to="/Dashboard" className='btn btn-light'>Dashboard</Link>
        <Link to="/Dataset" className='btn Dbbutton'>Dataset</Link>
        <Link to="/Story" className='btn btn-warning'>Story</Link>
        <Link to="/Exploration" className='btn btn-success'>Exploration</Link>
       </div>
       </div>
       </> 
    )
}
export default Navbar;