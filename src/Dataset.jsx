import tourdata from './assets/dataset/tourdata.pdf'
function Dataset(){
    return(
        <>
        <div className="dat">
        <iframe src={tourdata} className='data'></iframe>
        </div>
        </>
    )
}
export default Dataset