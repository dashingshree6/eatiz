import styles from '../styles/OurServices.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function OurServices() {
    return (
        <div className={styles.serviesContainer}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1}>
            <div className={styles.leftSer}>
                <div className={styles.rect}></div>
                <div className={styles.rectServices}>Our <br/> Services</div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" duration={1}>
            <div className={styles.content}>
                If you are looking for cheap hotels in the city, you should consider visiting during 
                the low season. You will find cheaper accomodations in the city  in May and April. Book 
                atleast 90 days before your stay begins to get the best price for your accomodation.
            </div>
            </AnimationOnScroll>
        </div>
    )
}
