import {useState, useEffect} from 'react';
import Banner from "./components/Banner";
import Experience from './components/Experience';
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

function App() {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay:400,
    });
  },[]);

  return (
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile}/>
      <Banner />
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transition-all`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
