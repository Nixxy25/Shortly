import ShortenLink from "./shortenLink";

type ShortenedLink = {
    id: string;
    originalUrl: string;
    shortUrl: string;
  }
  
  type StatisticsProps = {
    stats: {
      id: number;
      title: string;
      description: string;
      svgUrl: string;
    }[];
    link: ShortenedLink[];
    onDelete: (id: string) => void;

  };


const Statistics = (props: StatisticsProps) => {
   
  return (
    <div className="px-24 py-12 flex flex-col gap-12 bg-ash relative  h-full pt-36 max-sm:px-6 max-lg:px-16">
        <ShortenLink link={props.link} onDelete={props.onDelete} />
        
        <div className="flex flex-col gap-8 pb-12 justify-center items-center ">
            <h1 className="text-Dark-Violet text-3xl tracking-tight font-[800]">Advanced Statistics</h1>
            <h3 className=" lg:w-1/2 text-center leading-8 font-[600] max-sm:text-lg">Track how your links are performing across the web with our advanced statistics dashboard.</h3>
        </div>

        <div className="">
            <div className="relative flex max-lg:flex-col  gap-8 justify-center items-center">
                <div className="bg-Cyan absolute max-lg:rotate-90 z-0  w-[40rem] h-4 max-lg:h-3 max-sm:h-2"></div>
            {props.stats.map((items) => {
                const marginTop = `mt-${(items.id)* 4}`
                return(
                    <div className={`relative py-10 px-2 items-center max-lg:justify-center w-full ${marginTop}`}> 
                        <div key={items.id} className="flex flex-col bg-white h-72  rounded-xl px-8  py-6 gap-8">
                            <div className="absolute top-0 left-1/3 max-lg:left-1/2 transform -translate-x-1/2"><img className="bg-Dark-Violet rounded-full flex p-6 h-24" src={items.svgUrl}></img></div>
                            <div className="flex flex-col gap-4 pt-20">
                                <h1 className="text-Dark-Violet font-[700] text-2xl">{items.title}</h1>
                                <h3 className="font-medium">{items.description}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
   </div>
  )
}

export default Statistics;