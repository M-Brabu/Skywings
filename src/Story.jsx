import Navbar from './Navbar'
import ImageAttacher from "./ImageAttacher"
import s1 from './assets/story/s1.png'
import s2 from './assets/story/s2.png'
import s3 from './assets/story/s3.png'
import s4 from './assets/story/s4.png'
import s5 from './assets/story/s5.png'
import s6 from './assets/story/s6.png'
import Cognos from './Cognos'
function Story(){
return(
    <div>
        <Navbar/>

<ImageAttacher image={s1} />
    
<h3>Scene 1: Company Overview & Total Bookings</h3>
<p>What it does:</p>
<p>This scene sets the stage by presenting the high-level performance of SkyWings. It uses big-picture metrics to show the total number of bookings handled throughout the year, giving stakeholders an immediate sense of the agency's scale and reach.</p>      
<ImageAttacher image={s2} />

    <h3>Scene 2: Top Destinations Performance</h3>
    <p>What it does:</p>
    <p>This scene highlights our "star" locations. By focusing on the destinations that bring in the most revenue, it identifies which spots are most popular with travelers and helps the agency understand where their primary success is coming from.</p>
<ImageAttacher image={s3} /> 
        
      <h3>Scene 3: Peak vs. Off-Peak Revenue Comparison</h3>
      <p>What it does:</p>
      <p>This scene analyzes how timing affects the business. It compares the income generated during busy holiday seasons against quieter months, making it easy to see exactly when the agency needs more marketing support to fill the gaps.</p> 
<ImageAttacher image={s4} />
    
        <h3>Scene 4: Customer Satisfaction Ratings</h3>
        <p>What it does:</p>
        <p>Beyond the numbers, this scene focuses on the traveler’s experience. It tracks feedback and satisfaction scores to ensure that the increase in bookings is matched by high-quality service, protecting the agency's long-term reputation.</p>
<ImageAttacher image={s5} />
        
         <h3>Scene 5: Recommendations for Off-Peak Strategy</h3>
         <p>What it does:</p>
         <p>This is the "action plan" of the story. Using the insights from the previous scenes, it outlines specific data-driven steps—like targeted promotions or new packages—to help SkyWings stay profitable during the slower months of the year.</p>
<ImageAttacher image={s6} />
          <Cognos/>
    </div>
)
}
export default Story