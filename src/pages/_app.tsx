import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} font-sans text-gray-900 bg-white antialiased`}>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}

export default MyApp;
