// import Shorten from "./shorten"
// import { useEffect } from "react";
// import ShortenLink from "./shortenLink";
// import { useState } from "react";

// type ShortenedLink = {
//   id:string;
//   originalUrl:string;
//   shortUrl:string;
// }

// const ShortenLinkComp = () => {
//   const [link, setLink] = useState<ShortenedLink[]>([]);
    
//   useEffect(() => {
//     const storedLink = localStorage.getItem('shortenedLinks');
//     if (storedLink) {
//       setLink(JSON.parse(storedLink));
//     }
//   }, []);


//   const handleDelete = (id: string) => {
//     const updatedLinks = link.filter(links => links.id !== id);
//     setLink(updatedLinks);
//     localStorage.setItem('shortenedLinks', JSON.stringify(updatedLinks));
//   };

 

//   const addLink = (newLink: ShortenedLink) => {
//     const updatedLink = [newLink, ...link];
//     setLink(updatedLink);
//     localStorage.setItem('shortenedLinks', JSON.stringify(updatedLink));
//   };

//   return (
//     <div className="px-24 max-sm:px-6  flex flex-col gap-12">
     
//       <Shorten addLink = {addLink} />
//       <ShortenLink link={link}   onDelete={handleDelete} />
//     </div>
//   )
// }

// export default ShortenLinkComp;