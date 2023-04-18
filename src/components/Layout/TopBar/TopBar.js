import { Image } from "semantic-ui-react"
import Link from "next/link";
import styles from "./TopBar.module.scss";

export function TopBar(props) {
    const { isOpenSearch} = props;

    return (
    
    <div className={styles.topBar}>
        <div className={styles.left}> 
        <Link href = "/">
           <Image src="/images/logo.png" alt="SmellGood" />
            </Link> 
            </div>
            <div className={styles.center}>
                <span>Menu</span>
            </div>
            <div classNae={styles.right}>
                <span>ACCOUNT</span>
            </div>
    </div>
    )
}