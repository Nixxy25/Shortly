import '../src/App.css';
import Navbar from './components/navbar';
import Heropage from './components/heropage';
import ShortenLinkComp from './components/shortenLinkComponent';
import Statistics from './components/statistics';
import { statistics as statisticsData } from './data';
import BoostPage from './components/boostPage';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='relative '>
        <Heropage />
        
              
      <div className="absolute left-0 right-0 z-10  transform -translate-y-1/3">
        <ShortenLinkComp />
      </div>
      
        <Statistics stats={statisticsData} />
      </div>

      <BoostPage />
      <Footer />
    </div>
  )
}

export default App;