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
      <div className='relative'>
        <Heropage />
        
          <ShortenLinkComp />
      
        <Statistics stats={statisticsData} />
      </div>

      <BoostPage />
      <Footer />
    </div>
  )
}

export default App;