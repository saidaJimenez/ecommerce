import Head from "next/head";

export function Seo(props) {
    const {title = "SmellGood", description ="Productos para sentirse unico"} = props

    return (
        <Head>
          <title>{title}</title>
          <meta property="description" content={description} /> 
        </Head>
    )
}