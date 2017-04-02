import React from 'react';
import CardView from './cardView.js'
import Info from './data.js'

class Body extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                      Info.map((item, index) => {
                        return (<CardView info={item} key={index}/>);
                      })
                    }
                </div>
            </div>
        );
    }
};

export default Body;
