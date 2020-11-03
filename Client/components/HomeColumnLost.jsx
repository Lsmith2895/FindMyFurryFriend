import React from 'react';
import PetInfo from './PetInfoCol';

const LostColumn = props => (
    <div className='LostPets'>
        <div className='columnTitle'>
            <span>Lost Pets Near You</span>
        </div>
        <div className='PetInfoColumns'>
            <PetInfo lostPetList={props.lostPetList} />
        </div>


    </div>
)
export default LostColumn;