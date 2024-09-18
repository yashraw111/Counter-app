import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import HeaderClass from './layout/HeaderClass';
import Footer from './layout/Footer';
import FooterClass from './layout/FooterClass';
import Counter from './pages/Counter';
import CounterClass from './pages/CounterClass';

function App() {
  return (
    <>
    {/* <Header></Header> */}
    <HeaderClass></HeaderClass>
    {/* <Counter></Counter> */}
    <CounterClass></CounterClass>
    {/* <Footer></Footer> */}
    <FooterClass></FooterClass>
    </>
  );
}

export default App;
