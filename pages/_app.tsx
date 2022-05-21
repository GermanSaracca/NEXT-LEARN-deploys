
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
}
type Props = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: Props) {

  const getLayout = Component.getLayout || (page => page);

  return getLayout(<Component {...pageProps} />)

  // return (
  //   <MainLayout>
  //     <Component {...pageProps} />) 
  //   </MainLayout>
  // )
}

export default MyApp
