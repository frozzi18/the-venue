import React, { Component } from 'react';

class Pricing extends Component {

    state = {
        prices:[100, 150, 250],
        positions:['Balcony','Medium', 'Star'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit eget erat pretium malesuada.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit eget erat pretium malesuada.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit eget erat pretium malesuada.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s']
    }

    showBoxes = () => (
        <div>
            hello
        </div>
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>
                        Pricing
                    </h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;