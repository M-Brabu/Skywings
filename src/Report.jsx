import Navbar from './Navbar'
import ImageAttacher from "./ImageAttacher"
import VideoAttacher from "./VideoAttacher"
import r1vid from './assets/R/R1/r1vid.mp4'
import r2 from './assets/R/R2/r2.png'
import r3vid from './assets/R/R3/r3vid.mp4'
import Cognos from './Cognos'
function Report(){
 return(<>
    <Navbar/>
  <h3>Report 1: Revenue Breakdown</h3>
<p>What it does:</p>
<p>This is a clean, organized table that categorizes every booking into specific service types.</p>
<p>What it shows:</p>
<p>It answers the question: "Are we making more money from flights, hotels, or combo deals?" I styled it with specific fonts and colors to make it look professional and added a "Branch City" prompt so it’s easy to customize on the fly.</p>
    <VideoAttacher video={r1vid}/>
    <h3>Report 2: The Top 10 Destinations</h3>
    <p>What it does: </p>
    <p>This uses a "Traffic Light" system (Conditional Styling) to highlight performance.</p>
    <p>What it shows:</p>
    <p>At a glance, you can see which destinations are "in the green" (making over ₹5L) and which ones are struggling in the red. It helps the team instantly identify where to focus their marketing efforts.</p>
    <ImageAttacher image={r2}/>
    <h3>Report 3: Visual Analytics</h3>
  <p>What it does:</p>
  <p>This report lets the user choose exactly how they want to see the data using a visualization prompt.</p>
  <p>What it shows:</p>
  <p>Not everyone likes bar charts; some prefer pie charts or lines. I built this so the user can toggle between different visual styles to see monthly revenue and average booking values in the way that makes the most sense to them.</p>
    <VideoAttacher video={r3vid}/>
    <Cognos/>
 </>)
}
export default Report