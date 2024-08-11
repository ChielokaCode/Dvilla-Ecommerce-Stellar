import { BaseLayout } from '@/components/layout/BaseLayout'
import { HotToastConfig } from '@/components/layout/HotToastConfig'
import GlobalStyles from '@/styles/GlobalStyles'
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

import MySorobanReactProvider from "../components/web3/MySorobanReactProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* TODO SEO */}
      <DefaultSeo
        defaultTitle="Dvilla Local Food Store" // TODO
        titleTemplate="" // TODO
        description="Purchase Whole Organic Fruits at Dvilla Local Food Store" // TODO
        openGraph={{
          type: 'website',
          locale: 'en',
          site_name: 'Dvilla Local Food Store', // TODO
        }}
        twitter={{
          handle: '', // TODO
        }}
        
      />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MySorobanReactProvider>
        <CacheProvider value={cache}>
          <ChakraProvider>
            <DarkMode>
              <GlobalStyles/>

              <BaseLayout>
                <Component {...pageProps} />
              </BaseLayout>

              <HotToastConfig />
            </DarkMode>
            
          </ChakraProvider>
        </CacheProvider>
      </MySorobanReactProvider>
    </>
  )
}

export default MyApp
