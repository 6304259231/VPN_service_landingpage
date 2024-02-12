import './App.css';
import Feauters from './components/Feauters';
import Footer from './components/Footer';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Network from './components/Network';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <Users/>
      <Feauters/>
      <Plans/>
      <Network/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
