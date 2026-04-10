import tourdata from './assets/dataset/tourdata.pdf'
import Navbar from './Navbar'
import Cognos from './Cognos'
function Dataset(){
    return(
        <>
        <Navbar/>
        
        <div className="dat">
        <iframe src={tourdata} className='data'></iframe>
        </div>
         <Cognos/>
        </>
    )
}
export default Dataset