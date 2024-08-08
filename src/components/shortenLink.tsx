import { useState } from "react";

type ShortenedLink = {
  id: string;
  originalUrl: string;
  shortUrl: string;
};

type ShortenedLinksListProps = {
  link: ShortenedLink[];
  onDelete: (id: string) => void;
};

const ShortenLink= (props: ShortenedLinksListProps) => {
  const { link, onDelete } = props;

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };
  return (
    <div className="flex flex-col gap-3 pb-10 ">
      {link.map((links) => (
        <div key={links.id} className="mb-2 cursor-pointer flex justify-between bg-white rounded-md px-6 items-center py-4 max-sm:flex-col">
          <p className="text-Very-Dark-Blue font-[600] max-sm:hidden">{links.originalUrl}</p>

          <div className="flex items-center gap-6 max-sm:gap-4 max-sm:flex-col">
            <p className="text-Cyan font-[600]">{links.shortUrl}</p>
            <div className=" items-center flex gap-4">
              <button
                onClick={() => copyToClipboard(links.shortUrl, links.id)}
                className={`bg-Cyan text-white text-sm hover:bg-Very-Dark-Blue active:bg-Very-Dark-Blue max-sm:w-full rounded-lg outline-none px-6 py-2 font-[700]  ${
                  copiedId === links.id
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {copiedId === links.id ? 'Copied!' : 'Copy'}
              </button>
              <button onClick={() => onDelete(links.id)}>Delete</button>
            </div>
          </div>
       
        
      </div>
      ))}

     
    </div>
  )
}

export default ShortenLink;