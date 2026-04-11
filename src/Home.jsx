import Navbar from './Navbar'
import Cognos from './Cognos'
import ibmcognos from './assets/Logos/ibmcognos.jpg'
import planegif from './assets/Logos/planegif.gif'
function Home(){
    return (<>
    <Navbar/>
     <h3>Project Executive Summary</h3>
<p>
  This project showcases a complete business intelligence solution for SkyWings Travel Agency. 
  By transforming raw booking data into interactive visual tools, I’ve created a roadmap 
  for the agency to track revenue, understand traveler behavior, and plan for future growth.
</p>
<div id="homecognosimgdiv">
<img src={ibmcognos} id='homecognosimg'/>
</div>
<ul>
  <li>
    <strong>The SkyWings Dataset:</strong> 
    This is the foundation of the project, containing detailed records of customer demographics, 
    destinations, and costs. It tracks everything from booking dates and payment modes to 
    customer ratings, providing the raw material for all our business insights.
  </li>

  <li>
    <strong>Professional Reporting:</strong> 
    These reports focus on operational clarity. They categorize revenue by service type, 
    use "Traffic Light" styling to highlight top-performing destinations, and offer 
    flexible visualization prompts so users can choose how they want to view their data.
  </li>
       <div id="gifdiv">
       <img src={planegif} id='gif'/>
       </div>
  <li>
    <strong>Executive Dashboard:</strong> 
    Designed for fast decision-making, the dashboard provides a high-level "health check" 
    of the agency. It combines real-time KPI tiles with interactive city filters, 
    allowing management to see both national trends and specific branch performance at a glance.
  </li>

  <li>
    <strong>Data Exploration:</strong> 
    This section dives deeper into customer psychology and seasonal trends. I used 
    advanced analytics to discover how different age groups—like the reliable 60+ 
    demographic—drive revenue across peak and off-peak travel seasons.
  </li>

  <li>
    <strong>Strategic Storytelling:</strong> 
    The "Story" transforms complex data into a structured narrative for the Annual 
    Business Review. It walks stakeholders through five key scenes, moving from total 
    company performance to specific data-backed recommendations for future growth.
  </li>
</ul>
     
      <Cognos/>
    </>)
}
export default Home