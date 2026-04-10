import Navbar from './Navbar'
import VideoAttacher from "./videoAttacher"
import dabovid from "./assets/dabo/dabovid.mp4"
import Cognos from './Cognos'
function Dashboard(){
    return(
        <>
          <Navbar/>
           
          <VideoAttacher video={dabovid}/>
          <Cognos/>
        </>
    )
}
export default Dashboard