import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import type { AppProps } from 'next/app';



export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <script src="./script.js" />
  <Component {...pageProps} />
  </>

)}