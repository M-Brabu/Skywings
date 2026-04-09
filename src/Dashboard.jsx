import VideoAttacher from "./videoAttacher"
import dabovid from "./assets/dabo/dabovid.mp4"
function Dashboard(){
    return(
        <>
          <VideoAttacher video={dabovid}/>
        </>
    )
}
export default Dashboard