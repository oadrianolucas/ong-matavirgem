import { HeadTemplate } from "../components/HeadTemplate";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadTemplate />
      <Component {...pageProps} />
      <script src="js/script.js"></script>
    </>
  );
}

export default MyApp;
