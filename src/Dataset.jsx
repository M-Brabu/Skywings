import tourdata from './assets/dataset/tourdata.pdf'
import Navbar from './Navbar'
function Dataset(){
    return(
        <>
        <Navbar/>
        <div className="dat">
        <iframe src={tourdata} className='data'></iframe>
        </div>
        </>
    )
}
export default Dataset