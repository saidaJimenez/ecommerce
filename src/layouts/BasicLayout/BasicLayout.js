import styles from "./BasicLayout.module.scss";


export function BasicLayout(props){
    const { children } = props;
    return(
        <>
        <h2>BasicLayout</h2>
        { children }
        </>
    )
}