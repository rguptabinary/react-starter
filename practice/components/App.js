import {Component} from 'react'
import SkiDayList from './SkiDayList'
import { SkiDayCount } from './SkiDayCount';
import Menu from './common/Menu';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            allSkiDays: [
                    {
                    resort: 'Everest valley',
                    date: new Date('1/2/2016'),
                    powder: false,
                    backCountry: true
                    }, {
                    resort: 'Kanchenjunga valley',
                    date: new Date('2/2/2016'),
                    powder: true,
                    backCountry: false
                    }, {
                    resort: 'Manali valley',
                    date: new Date('3/2/2016'),
                    powder: false,
                    backCountry: true
                    }, 
            ]
        }
    }

    countDays(filter){
        const {allSkiDays} = this.state;
        return allSkiDays.filter(
                (day) => (filter) ? day[filter] : day
            ).length;
    }

    render(){
        return(
            <div className="app">
                <Menu/>
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                            powder={this.countDays('powder')}
                            backcountry={this.countDays('backCountry')}/>
            </div>
        );  
    }
}


export default App;