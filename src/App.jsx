import { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Main from './components/Main';

const App = () => {
  const [showBtnUp, setShowBtnUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    });
  }, []);

  return (
    <div
      id="Up"
      className="container border-x-2 border-border-light bg-secondary-light dark:border-border-dark dark:bg-secondary-dark"
    >
      <Header />
      <Landing />
      <Divider />
      <Main />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
      <a
        href="#Up"
        className={`${
          showBtnUp ? 'opacity-50 lg:opacity-100' : 'opacity-0'
        } transition-all duration-700`}
      >
        <span className="icon-keyboard_arrow_up fixed bottom-12 right-5 h-10 w-10 rounded-full bg-blue-500 text-center text-3xl text-white "></span>
      </a>
    </div>
  );
};
export default App;
