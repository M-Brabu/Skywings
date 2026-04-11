import Navbar from './Navbar'
import VideoAttacher from "./VideoAttacher"
import dabovid from "./assets/dabo/dabovid.mp4"
import Cognos from './Cognos'
function Dashboard(){
    return(
        <>
          <Navbar/>
          <h3>The Executive Dashboard: Management Command Center</h3>
  <p>What it is:</p>
  <p>It’s a single screen where a manager can see exactly how the business is doing without having to look through hundreds of individual bookings. It’s built to be interactive, visually clean, and fast.</p>
     <VideoAttacher video={dabovid}/>
  <p>The Main Components:</p>
  <ul>
    <li><strong>Total Revenue KPI Tile:</strong> This is a big, bold number that shows the total money made so far this year. It gives an instant "health check" for the business.</li>
    <li><strong>Revenue by Destination (Bar Chart):</strong> This chart ranks every destination. It makes it obvious that places like Ooty and the Maldives are the big winners.</li>
    <li><strong>Monthly Booking Trends (Line Chart):</strong> This is a "heartbeat" monitor for the agency, revealing exactly when people are booking their trips.</li>
    <li><strong>Package Type Split (Pie Chart):</strong> This shows the revenue distribution between Flights, Hotels, and Combo deals.</li>
  </ul>

  <p>The Key Feature: The Interactive City Filter</p>
  <p>How it works: If you select a city like Bengaluru, the entire dashboard—every single chart and number—changes instantly to show only the data for that branch.</p>
  <p>Why it’s useful: It allows the agency to act locally. A manager in one city can see their specific trends while the CEO can look at the whole country, all using the same tool.</p>  
       
          <Cognos/>
        </>
    )
}
export default Dashboard