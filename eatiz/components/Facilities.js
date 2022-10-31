import styles from '../styles/Facilities.module.css'
import Image from "next/image"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Facilities() {
    return (
        <div className={styles.fContainer}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1}>
                <div className={styles.fLeft}>
                    <div className={styles.fLeftTop}>
                    <AnimationOnScroll animateIn="animate__flipInY" delay={2} duration={2}>
                        <span className={styles.meeting}>
                            <Image src="/meeting.png" alt="Meeting" width={70} height={70} />
                        </span>
                    </AnimationOnScroll>
                        <span>
                            <Image src="/Group53.png" alt="Meeting" width={80} height={10} />
                        </span>
                        <span className={styles.meetingTxt}>
                            <span className={styles.meetingHead}>advanced table </span> <br/>
                            <div>
                                <span className={styles.meetingHead}>booking</span>
                                <Image src="/Rectangle24.png" alt="Meeting" width={50} height={2} />{" "} 
                                <Image src="/Rectangle24.png" alt="Meeting" width={10} height={2} />
                            </div>
                            <span className={styles.meetingPgh}>You have the facility <br/>to book all your favorite<br/> hotels and restaurants.</span>
                        </span>
                    </div>
                    <div className={styles.fLeftDown}>
                        <span>
                            <span className={styles.meetingHead}>food for free</span> 
                            <div>
                                <Image src="/Rectangle24.png" alt="Meeting" width={50} height={2} />{" "} 
                                <Image src="/Rectangle24.png" alt="Meeting" width={10} height={2} />
                                <span className={styles.meetingHead}>24/7</span>   
                            </div>
                            <span className={styles.meetingPgh}>You have the facility <br/> to book all your favorite<br/> hotels and restaurants.</span>
                        </span>
                        <span>
                            <Image src="/Group55.png" alt="Meeting" width={80} height={10} />
                        </span>

                        <AnimationOnScroll animateIn="animate__flipInY" delay={2} duration={2}>
                        <span className={styles.meeting}>
                            <Image src="/dish.png" alt="Meeting" width={70} height={70} />
                        </span>
                        </AnimationOnScroll>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInRight" duration={1}>
                <div className={styles.fRight}>
                    <AnimationOnScroll animateIn="animate__flipInY" delay={2} duration={2}>
                    <div>
                        <span>
                        <Image src="/scooter.png" alt="Meeting" width={120} height={80} />
                        </span><br/>
                        <span className={styles.meetingHead}>free home delivery</span><br/>
                        <span className={styles.meetingHead}>at your door steps</span><br/>
                        <span className={styles.meetingPgh}>You will get your delivery <br/>at your door step within<br/> your comfort zone.</span>
                    </div>
                    </AnimationOnScroll>                      
                </div>
            </AnimationOnScroll>
        </div>
    )
}
