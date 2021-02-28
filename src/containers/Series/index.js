import React, {Component} from 'react';
import Serieslist from '../../component/Serieslist';
import Loader from '../../component/Loader';
import Intro from "../../component/Intro";

class Series extends Component{

     state = {
         series:[],
         seriesName :'',
         isFetching: false
     }



    onSeriesInputChange = e => {
         this.setState({seriesName: e.target.value, isFetching: true });

         fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
             .then(responce =>responce.json())
             .then (json => this.setState({series:json, isFetching: false}) );

    }

    render(){
         const {series, seriesName, isFetching} = this.state;
        return(
            <div>
                The lenght og the series array is {this.state.series.length}
                <div>
                    <Intro message ="Here you can find all of your most loved series"/>
                    <input
                        value={seriesName}
                        type="text"
                        onChange={this.onSeriesInputChange} />
                </div>
                { !isFetching && series.length === 0 && seriesName.trim() === ''
                &&
                <p>Please enter series name into the input</p>
                }
                { !isFetching && series.length === 0 && seriesName.trim() !== ''
                &&
                <p>No TV series have been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <Serieslist list={this.state.series}/>
                }

            </div>
        )
    }
}

export default Series;