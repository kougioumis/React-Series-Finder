import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SerieslistItem = ({series}) => (
    <li key={series.show.id}>
        <Link to={`/series/${series.show.id}`}>
        {series.show.name}
        </Link>
    </li>
)

const Serieslist = (props) => {
    return(
        <div>
           <ul className="series-list">
               {props.list.map(series => (
                   <SerieslistItem series={series} key={series.show.id}/>
               ))}
           </ul>
        </div>

    )

}


export default Serieslist;