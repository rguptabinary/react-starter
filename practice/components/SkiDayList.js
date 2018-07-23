import SkiDayRow from "./SkiDayRow";
import React from 'react'
import PropTypes from 'prop-types';

const SkiDayList = ({days}) => {
    return (
        <table>
            <thead>
                {console.log(days)}
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th>Powder day</th>
                    <th>Backcountry</th>
                </tr>
            </thead>
            <tbody>
                {days.map((day, i) =>
                    <SkiDayRow key={i} {...day} />
                )}
            </tbody>
        </table>
    );
}

SkiDayList.propTypes = {
    days: PropTypes.array.isRequired
}

export default SkiDayList;