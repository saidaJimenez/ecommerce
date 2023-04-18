import Link from "next/link";
import {useAuth} from  "@/hooks";
import { useRouter } from "next/router";
import {Icon, Image} from "semantic-ui-react"
import styles from "./JoinLayout.module.scss";

export  function JoinLayout(props) {
    const { children } = props;
    const { user } = useAuth();
    const router = useRouter();

if (user) router.push("/")

     console.log(user)
  return (
    <div className={styles.container}>
     <div className={styles.topBar}>
     <Link href="/">
                <Image src="/images/Logo.png" alt="Smell" />
            </Link>
            <Link href="/">
                <Icon name="close"/>
            </Link>
     </div>
      <div className={styles.blockLeft}>{children }</div>
      <div className={styles.blockRight}/>
    </div>
  )
}
