import Navbar from './Navbar'
import VideoAttacher from "./videoAttacher"
import dabovid from "./assets/dabo/dabovid.mp4"
function Dashboard(){
    return(
        <>
          <Navbar/>
          <VideoAttacher video={dabovid}/>
        </>
    )
}
export default Dashboard