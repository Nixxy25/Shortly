type StatisticsProps = {
    stats:{
        id:number;
        title: string;
        description:string;
        svgUrl:string;
    }[];  
};

const Statistics = (props: StatisticsProps) => {
  return (
    <div>
        <div>
            <h1>Advanced Statistics</h1>
            <h3>Track how your links are performing across the web with our advanced statistics dashboard.</h3>
        </div>

        <div>
            {props.stats.map(items => {
                return(
                    <div key={items.id}>
                        <div><img src={items.svgUrl}></img></div>
                        <div>
                            <h1>{items.title}</h1>
                            <h3>{items.description}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
   </div>
  )
}

export default Statistics;