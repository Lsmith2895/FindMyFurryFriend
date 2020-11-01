import React from 'react';

const LostColumn = props => (
    <div className='LostPets'>
        <div className='columnTitle'>
            <span>Lost Pets Near You</span>
        </div>
        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <div className='PetPicture'> pet picture here </div>
            </div>
            <div className='PetCol'>
                <div className='PetName'>Name:</div>
                <div className='PetSize'>Size:</div>
                <div className='CollarType'>Collar:</div>
                <div className='FriendlinessInfo'>Friendliness:</div>
                <div className='LastKnownLocation'>Last Known Location:</div>
            </div>
        </div>

    </div>
)
export default LostColumn;