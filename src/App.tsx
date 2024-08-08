import '../src/App.css';
import Navbar from './components/navbar';
import Heropage from './components/heropage';
import Statistics from './components/statistics';
import { statistics as statisticsData } from './data';
import BoostPage from './components/boostPage';
import Footer from './components/footer';
import Shorten from "./components/shorten"
import { useEffect } from "react";

import { useState } from "react";

type ShortenedLink = {
  id:string;
  originalUrl:string;
  shortUrl:string;
}

const App = () => {
  const [link, setLink] = useState<ShortenedLink[]>([]);

  useEffect(() => {
      const storedLink = localStorage.getItem('shortenedLinks');
      if (storedLink) {
        setLink(JSON.parse(storedLink));
      }
    }, []);

  const addLink = ((newLink: ShortenedLink) => {
    setLink(prevLinks => {
      const updatedLink = [newLink, ...prevLinks];
      localStorage.setItem('shortenedLinks', JSON.stringify(updatedLink));
      return updatedLink;
    });
  });

  const handleDelete = (id: string) => {
    const updatedLinks = link.filter(links => links.id !== id);
    setLink(updatedLinks);
    localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
  };


  return (
    <div>
      <Navbar />
        <div className='relative '>
          <Heropage />
          
        <div className="absolute left-0 right-0 z-10 transform -translate-y-1/2">
          <Shorten addLink = {addLink} />
        </div>

        <Statistics stats={statisticsData} link={link} onDelete={handleDelete} />
      </div>

      <BoostPage />
      <Footer />
    </div>
  )
}

export default App;