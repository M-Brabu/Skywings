import ImageAttacher from "./ImageAttacher"
import VideoAttacher from "./videoAttacher"
import r1vid from './assets/R/R1/r1vid.mp4'
import r2 from './assets/R/R2/r2.png'
import r3vid from './assets/R/R3/r3vid.mp4'
function Report(){
 return(<>
    <VideoAttacher video={r1vid}/>
    <ImageAttacher image={r2}/>
    <VideoAttacher video={r3vid}/>
 </>)
}
export default Report