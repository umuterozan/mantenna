import "@/styles/globals.css"
import type {AppProps} from 'next/app'
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({Component, pageProps}: AppProps) {
    return <>
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
    </>
}
