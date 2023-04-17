import Link from "next/link";
import {JoinLayout} from "@/layouts"
import{ RegisterForm } from "@/components/Auth"
import styles from "./sign-up.module.scss";


export default function SignUpPage() {
  return (
    <>
    <JoinLayout>
    <div className={styles.singIn}>
      <h3>Crear Cuenta </h3>
      <RegisterForm/>
      <div className={styles.actions}>
      <Link href="/join/sign-in">Atrás</Link>
      </div>
    </div>
    </JoinLayout>
    </>
  )
}
