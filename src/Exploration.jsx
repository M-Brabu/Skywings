import Navbar from './Navbar'
import ImageAttacher from "./ImageAttacher"
import e1 from './assets/explo/e1.png'
import e2 from './assets/explo/e2.png'
import e3 from './assets/explo/e3.png'
import Cognos from './Cognos'

function Exploration(){
    return(<>
    <Navbar/>
        <h3>Data Exploration: The Consumer Detective</h3>
<h3>Exploration 1: Revenue by Age and Season</h3>
<p><strong>What it does:</strong></p>
<p>This single-chart exploration breaks down total revenue by age group, specifically comparing performance between Peak and Off-Peak seasons.</p>
<p><strong>What it shows:</strong></p>
<p>It identifies the 60+ age group as the most consistent revenue leader across all seasons. It also highlights a major "Peak Surge" in the 18-25 demographic, showing that younger travelers drive massive growth specifically during high-travel seasons.</p><h3></h3>
<ImageAttacher image={e1}></ImageAttacher>     
     
<h3>Exploration 2: Package Type by Age Group</h3>
<p><strong>What it does:</strong></p>
<p>This line-chart exploration tracks the relationship between a customer's age and the specific travel services they choose to book.</p>
<p><strong>What it shows:</strong></p>
<p>The data reveals a clear "Bundle Preference" for travelers aged 46-60, who are the strongest market for Combo packages. In contrast, the high revenue from the 60+ group is primarily driven by individual Hotel bookings rather than bundled deals.</p>
<ImageAttacher image={e2}/>


<h3>Exploration 3: Seasonal Stability Analysis</h3>
<p><strong>What it does:</strong></p>
<p>This heat-map style exploration focuses on finding the most reliable income sources for the agency during the quiet "Off-Peak" months.</p>
<p><strong>What it shows:</strong></p>
<p>While younger age groups show high fluctuation, the 60+ group remains the "Seasonal Backbone" of the business. This finding suggests that the agency should focus its off-season marketing efforts on senior travelers to maintain steady revenue year-round.</p>

<ImageAttacher image={e3}/>
        <Cognos/>
    </>)
}
export default Exploration