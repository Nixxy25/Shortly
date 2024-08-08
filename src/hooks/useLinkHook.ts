
import { useState, useEffect} from 'react';

type ShortenedLink = {
  id: string;
  originalUrl: string;
  shortUrl: string;
};


export const useLinksHook = () => {

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
  

  return { link, addLink, handleDelete };
};
