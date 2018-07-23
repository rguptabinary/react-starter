import React, {Component} from 'react';

const percerntToDecimal = (decimal) => {
    return (decimal*100) + '%'
}

export const SkiDayCount = ({total, powder, backcountry}) => {
        
        return (
            <div >
                <div> {total} days</div>
                <div>{powder} Powder days</div>
                <div>{backcountry} backcountry days</div>
            </div>
        );
};

