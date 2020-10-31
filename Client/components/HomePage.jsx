import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div> home page loaded</div>

                <div className='column'>
                    <div className='columnTitle'>
                        Lost Pets Near You
                      </div>
                </div>

                <div className='column'>
                    <div className='columnTitle'>
                        Recently Found
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Home; 