import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import React from 'react'

const SkiDayRow = ({resort, date, powder, backCountry}) => {
    return (
        <tr>
            {console.log(date)}
            <td>
                {date.getMonth() + 1}/
                {date.getDate()}/{date.getFullYear()}
            </td>
            <td>{resort}</td>
            <td>
                {(powder) ? <SnowFlake/> : null }
            </td>
            <td>
                {(backCountry) ? <Terrain/>: null}
            </td>
        </tr>
    );
}

SkiDayRow.defaultProps = {
    resort: 'Kullu',
    date: new Date(),
    powder: true,
    backCountry: true
}

export default SkiDayRow;