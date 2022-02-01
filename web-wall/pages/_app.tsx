import '../styles/globals.css'
import { wrapper } from '../core/redux/app/store';
import Navbar from '../core/components/Navbar';
import Header from '../core/components/Header';

const  MyApp = ({ Component, pageProps })  =>  {
    return (
      <>
      <Header />
      <Component {...pageProps} />
      <Navbar />
      </>
    )
}

export default wrapper.withRedux(MyApp);

