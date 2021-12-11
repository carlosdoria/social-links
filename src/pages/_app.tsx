// import App from "next/app";
import { AppProps /* , AppContext */ } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/globals'

function MyApp ( { Component, pageProps }: AppProps ) {
  return (
    <>
      <Head>
        <title>Social Links</title>
        <meta name="description" content="Meu portifólio pessoal" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
