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
    <div>
      {link.map((links) => (
        <li key={links.id} className="mb-2 p-2 border rounded">
        <p className="mb-1">{links.originalUrl}</p>
        <p className="mb-1">{links.shortUrl}</p>
        <button
          onClick={() => copyToClipboard(links.shortUrl, links.id)}
          className={`p-1 rounded ${
            copiedId === links.id
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {copiedId === links.id ? 'Copied!' : 'Copy'}
        </button>
        <button onClick={() => onDelete(links.id)}>Delete</button>
      </li>
      ))}

     
    </div>
  )
}

export default ShortenLink;