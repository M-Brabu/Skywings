import ImageAttacher from "./ImageAttacher"
import s1 from './assets/story/s1.png'
import s2 from './assets/story/s2.png'
import s3 from './assets/story/s3.png'
import s4 from './assets/story/s4.png'
import s5 from './assets/story/s5.png'
import s6 from './assets/story/s6.png'
function Story(){
return(
    <div>
        <ImageAttacher image={s1} />
        <ImageAttacher image={s2} />
        <ImageAttacher image={s3} />
        <ImageAttacher image={s4} />
        <ImageAttacher image={s5} />
        <ImageAttacher image={s6} />
    </div>
)
}
export default Story