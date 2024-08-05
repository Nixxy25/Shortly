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
      setError('Please add a valid link');
      return;
    }
    setError('');
    setIsLoading(true);

    try{
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${url}`,
      );
  
      if (!response.ok) {
        throw new Error('Check your internet connection');
      }
  
      const data = await response.text();
      console.log(data)
      if (data) {
        const newLink: ShortenedLink = {
          id: getNextId(),
          originalUrl: url,
          shortUrl: data,
        };
        addLink(newLink);
        setUrl('');
      } else {
        setError('Failed to shorten URL. Please try again.');
      }
    }catch(err){
      setError('Check your network connection');
    } finally {
      setIsLoading(false);
    }
    
  } 
  return (
    <div className=" relative bg-Dark-Violet rounded-md ">
        <div>
          <img className='absolute inset-0 w-full h-full object-cover max-lg:hidden' src={DesktopBoostSvg}></img>
          <img className="absolute inset-0 w-full h-full object-cover md:hidden" src={MobileBoostSvg}></img>
        </div>

        <form onSubmit={handleUrlShorten} className="relative  p-16 max-sm:px-8 max-sm:py-6">
            <div className="grid grid-cols-5 gap-8  items-center pb-1  max-sm:flex max-sm:flex-col max-sm:gap-4"><input 
             className={`p-4 col-start-1 col-span-4 max-sm:w-full rounded-lg outline-none bg-white ${error ? "border border-Red" : 'border border-white'}`}
             type="text" 
             placeholder="Shorten a link here..."
             value={url}
             onChange={(e) =>setUrl(e.target.value)}
             
             ></input>
            <button type="submit" 
            className="bg-Cyan text-white max-sm:w-full rounded-lg outline-none p-4 font-[700] ">
              {isLoading ? 'Shortening...' : 'Shorten It !'}
              </button></div>
            {error && <p className="text-Red italic text-sm">{error}</p>}
        </form>
    </div>
  )
}

export default Shorten;