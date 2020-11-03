import React from 'react';
import Lost from './HomeColumnLost';
import Found from './HomeColumnFound'

const Home = props => (
    <div>
        <div className='column'>
            <Lost lostPetList={props.lostPetList}/>
        </div>

        <div className='column'>
            <Found />
        </div>

    </div>
)

export default Home; 