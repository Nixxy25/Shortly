import { useState } from "react";
import DesktopBoostSvg from "../assets/Images/bg-shorten-desktop.svg";
import MobileBoostSvg from '../assets/Images/bg-shorten-mobile.svg';

type ShortenedLink = {
  id: string;
  originalUrl: string;
  shortUrl: string;
};

type UrlProps = {
  addLink: (link: ShortenedLink) => void;
};

let currentId = 0;

function getNextId(): string {
  return (currentId++).toString();
}

const Shorten = (props: UrlProps)=> {
  const {addLink} = props;

  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const handleUrlShorten = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim() || !url.match(/^(http|https):\/\//)) {
      setError('Please enter a valid URL');
      return;
    }
    setError('');
    setIsLoading(true);

    try{
      const response = await fetch('api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      });
  
      if (!response.ok) {
        throw new Error('Check your internet connection');
      }
  
      const data = await response.json();
      if (data.result_url) {
        const newLink: ShortenedLink = {
          id: getNextId(),
          originalUrl: url,
          shortUrl: data.result_url,
        };
        addLink(newLink);
        setUrl('');
      } else {
        setError(data.error || 'Failed to shorten URL. Please try again.');
      }
    }catch(err){
      setError('Error in shortenUrl function');
    } finally {
      setIsLoading(false);
    }
    
  } 
  return (
    <div className="mx-24 relative bg-Dark-Violet rounded-md absolute top-1/2 z-10 transform translate-y-1/2 max-sm:mx-6">
        <div>
          <img className='absolute inset-0 w-full h-full object-cover max-lg:hidden' src={DesktopBoostSvg}></img>
          <img className="absolute inset-0 w-full h-full object-cover md:hidden" src={MobileBoostSvg}></img>
        </div>

        <form onSubmit={handleUrlShorten} className="grid grid-cols-5 relative  items-center gap-8 items-center p-16 max-sm:px-8 max-sm:py-6 max-sm:flex max-sm:flex-col max-sm:gap-4">
            <input 
             className="p-4 col-start-1 col-span-4 max-sm:w-full rounded-lg outline-none bg-white" 
             type="text" 
             placeholder="Shorten a link here"
             value={url}
             onChange={(e) =>setUrl(e.target.value)}
             
             ></input>
            <button type="submit" 
            className="bg-Cyan text-white max-sm:w-full rounded-lg outline-none p-4 font-[700] ">
              {isLoading ? 'Shortening...' : 'Shorten It'}
              </button>
            {error && <p className="text-Red">{error}</p>}
        </form>
    </div>
  )
}

export default Shorten;