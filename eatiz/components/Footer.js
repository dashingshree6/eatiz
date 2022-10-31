import styles from '../styles/Footer.module.css'
import Image from "next/image"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Footer() {
    return (
        <div className={styles.footerCont}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1}>
            <div className={styles.footerLeft}>
                <div className={styles.footerLeft1}>
                    <div className={styles.rect1}></div>
                </div>
                <div>
                    <h1 className={styles.dwnApp}>Download app for <br/> Exciting deals.</h1>
                    <div className={styles.footerLeft2}>Eatiz is available on all the platforms<br/> like google play store for Android<br/> and app store for Iphone users.</div>
                    <Image className={styles.playstore} src="/playstore.png" alt="Playstore" width={120} height={30} />
                    <Image className={styles.appstore} src="/appstore.png" alt="Appstore" width={120} height={30} /> 
                </div>
            </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInRight" duration={1}>
            <div className={styles.footerRight}>
                    <div className={styles.veg1}><Image src="/veg1.png" alt="Appstore" width={300} height={300} /></div> 
                    <div className={styles.grp66}><Image src="/Group66.png" alt="Appstore" width={200} height={200} /> </div>
                    <div className={styles.productpage}><Image src="/product-page.png" alt="Appstore" width={200} height={400} /> </div>
            </div>
            </AnimationOnScroll>
        </div>
    )
}
