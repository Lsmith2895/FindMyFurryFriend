import React from 'react';
import { render } from 'react-dom';

const PetInfo = (props) => {
    const info = props.lostPetList;
    const lostPets = info.map((info) => {
        
        return (
            <li>
                <div className='PetCol'>

                    <img src={info.Photo} alt='pet picture' className='PetPicture'></img>

                </div>

                <div className='PetCol'>

                    <div className='PetName'>Name: <span>{info.PetName}</span></div>
                    <div className='PetSize'>Size: <span>{info.size}</span></div>
                    <div className='CollarType'>Collar: <span>{info.Collar}</span></div>
                    <div className='FriendlinessInfo'>Friendliness: <span>{info.Friendliness}</span></div>
                    <div className='LastKnownLocation'>Last Known Location: <span>{info.LastSeen}</span></div>
                    <div className='FoundPetButton'>Found</div>

                </div>
            </li>
        )
    });

    return (
        <ul> {lostPets} </ul>
    )
}

export default PetInfo;