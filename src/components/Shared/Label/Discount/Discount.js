import classNames from "classnames"
import styles from "./Disccount.module.scss"

export  function Discount(props) {
    const { children, className } = props
  return (
    <div>
      <span className={classNames(styles.labelDiscount,{[className]: className})}>{children}</span>
    </div>
  )
}
