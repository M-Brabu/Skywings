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
  <p>What it is:</p>
  <p>I used Cognos to dig deeper into the behavior of the customers rather than just the numbers.</p>
  <p>What it shows:</p>
  <p>I discovered some really interesting patterns. For example, I found that travelers over the age of 60 are the "backbone" of the business because they book consistently all year round. Meanwhile, the younger 18-25 crowd causes huge spikes in revenue, but only during peak seasons. This helps the agency plan different ads for different ages.</p>
    <ImageAttacher image={e1}/>
     <ImageAttacher image={e2}/>
      <ImageAttacher image={e3}/>
        <Cognos/>
    </>)
}
export default Exploration