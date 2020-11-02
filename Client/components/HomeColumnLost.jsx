import React from 'react';

const LostColumn = props => (
    <div className='LostPets'>
        <div className='columnTitle'>
            <span>Lost Pets Near You</span>
        </div>
        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <img src='https://findmyfurryfriend.s3-us-west-2.amazonaws.com/catPic1.jpg' alt='pet picture' className='PetPicture'></img>
            </div>
            <div className='PetCol'>
                <div className='PetName'>Name: <span>Francis</span></div>
                <div className='PetSize'>Size: <span>XS</span></div>
                <div className='CollarType'>Collar: <span>None</span></div>
                <div className='FriendlinessInfo'>Friendliness: <span>Very</span></div>
                <div className='LastKnownLocation'>Last Known Location: <span>Pratt Park</span></div>
                <div className='FoundPetButton'>Found</div>
            </div>
        </div>

        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <img src='https://findmyfurryfriend.s3-us-west-2.amazonaws.com/dogPic1.jpeg' alt='pet picture' className='PetPicture'></img>
            </div>
            <div className='PetCol'>
                <div className='PetName'>Name: <span>Tiny Tim</span></div>
                <div className='PetSize'>Size: <span>XS</span></div>
                <div className='CollarType'>Collar: <span>Green</span></div>
                <div className='FriendlinessInfo'>Friendliness: <span>Nervous</span></div>
                <div className='LastKnownLocation'>Last Known Location: <span>Ricky Bobby's House</span></div>
                <div className='FoundPetButton'>Found</div>
            </div>
        </div>

        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <img src='https://findmyfurryfriend.s3-us-west-2.amazonaws.com/dogPic2.jpg' alt='pet picture' className='PetPicture'></img>
            </div>
            <div className='PetCol'>
                <div className='PetName'>Name: <span>SAL</span></div>
                <div className='PetSize'>Size: <span>XL</span></div>
                <div className='CollarType'>Collar: <span>Black</span></div>
                <div className='FriendlinessInfo'>Friendliness: <span>Friendly</span></div>
                <div className='LastKnownLocation'>Last Known Location: <span>20th and 2nd</span></div>
                <div className='FoundPetButton'>Found</div>
            </div>
        </div>

        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <img src='https://findmyfurryfriend.s3-us-west-2.amazonaws.com/catPic2.jpg' alt='pet picture' className='PetPicture'></img>
            </div>
            <div className='PetCol'>
                <div className='PetName'>Name: <span>Princess</span></div>
                <div className='PetSize'>Size: <span>XS</span></div>
                <div className='CollarType'>Collar: <span>none</span></div>
                <div className='FriendlinessInfo'>Friendliness: <span>Friendly</span></div>
                <div className='LastKnownLocation'>Last Known Location: <span>Emerald City Skate</span></div>
                <div className='FoundPetButton'><span>Found</span></div>
            </div>
        </div>

    </div>
)
export default LostColumn;