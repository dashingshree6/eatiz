import styles from "../styles/Discover.module.css"
import Link from "next/link"
import Image from "next/image"
import { AnimationOnScroll } from 'react-animation-on-scroll';


var ellipseArray = ['ABC1','ABC2','ABC3','ABC4','ABC5','ABC6','ABC7','ABC8','ABC9','ABC10','ABC11','ABC12','ABC13','ABC14','ABC15','ABC16','ABC17','ABC18','ABC19','ABC20']
var ellipse = ['e1','e2','e3','e4','e5','e6','e7','e8']
export default function Discover() {
    return (
        <div className={styles.discover}>
            <div>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOut="animate__fadeInLeft" offset={20} initiallyVisible duration={1}>
                <div>
                    <span className={styles.text}>Discover Restaurant</span><br/>
                    <span className={styles.text}>&#38; Delicious Food</span>
                </div>
            
                <div className={styles.formS}>
                    <input className={styles.formInput} type='text' placeholder='Search Restaurants'/>
                    <span className={styles.goBtn}>GO</span>
                </div>
            </AnimationOnScroll>

                <div className={styles.pholder}>
                    <span>                    
                        <Image src="/placeholder.png" alt="Lettuc Logo" width={12} height={18} />
                    </span>
                    <span className={styles.city}>Hyderabad</span>
                </div>
            </div>


  
            <div className={styles.tree}>
                <div className={styles.ellipseGrp}>
                    { ellipseArray.length && ellipseArray.map(k => (
                    <span key={k} className={styles.ellipseContainer}>
                        { ellipse.length && ellipse.map(i => (
                            <span key={i} className={styles.ellipse}></span>
                        ))}
                    </span>
                    ))}
                </div>
                <span className={styles.lettuc}>
                    <Image src="/lettuc.png" alt="Lettuc Logo" width={300} height={400} />
                </span>
                <span className={styles.delici}>
                    <Image src="/delici.png" alt="Delici Logo" width={500} height={500} />
                </span>
               
            </div>
        </div>
    )
}
