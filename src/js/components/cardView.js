import React from 'react';
import './css/styles.css'

class CardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: props.info
        };
    }

    render() {
        return (
            <div className="col-md-6 col-lg-3">
                <div className="card" style={{ height: '31rem' }}>
                    <img className="card-img-top img-fluid" src={this.state.info.img}/>
                    <div className="card-block">
                        <h3 className="card-title">{this.state.info.title}</h3>
                        {
                          this.state.info.text.map((result, index)=>{
                            return (
                                 <p className="card-text" key={index}>
                                    {result}
                                  </p>
                                );
                          })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CardView;
