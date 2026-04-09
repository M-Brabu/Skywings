import ImageAttacher from "./ImageAttacher"
import e1 from './assets/explo/e1.png'
import e2 from './assets/explo/e2.png'
import e3 from './assets/explo/e3.png'
function Exploration(){
    return(<>
    <ImageAttacher image={e1}/>
     <ImageAttacher image={e2}/>
      <ImageAttacher image={e3}/>
    </>)
}
export default Exploration