import React from 'react';

const LostColumn = props => (
    <div className='LostPets'>
        <div className='columnTitle'>
            Lost Pets Near You
        </div>
        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <div className='PetPicture'> pet picture here </div>
            </div>
            <div className='PetCol'>
                <div className='PetName'>PET NAME HERE</div>
                <div className='PetSize'>PET SIZE HERE</div>
                <div className='CollarType'>Collar Type HERE</div>
                <div className='FriendlinessInfo'>3</div>
                <div className='LastKnownLocation'>Last Known Location</div>
            </div>
        </div>

    </div>
)
export default LostColumn;