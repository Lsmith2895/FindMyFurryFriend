import React from 'react';

const FoundColumn = props => (
    <div className='columnTitle'>
        <span>Recently Found</span>
        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <img src='https://findmyfurryfriend.s3-us-west-2.amazonaws.com/liz.png' alt='pet picture' className='PetPicture'></img>
            </div>
            <div className='PetCol'>
                <div className='PetName'>Name: <span>Apollo</span></div>
                <div className='FoundStory'>`And in that town a dog was found,
                As many dogs there be,
                Both mongrel, puppy, whelp and hound,
                And curs of low degree.

                This dog and man at first were friends;
                But when a pique began,
                The dog, to gain some private ends,
Went mad and bit the man.`</div>
            </div>
        </div>
        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <img src='https://findmyfurryfriend.s3-us-west-2.amazonaws.com/puggy.jpg' alt='pet picture' className='PetPicture'></img>
            </div>
            <div className='PetCol'>
                <div className='PetName'>Name: <span>Puggie Smallz and Steve</span></div>
                <div className='FoundStory'>`Loving friend, the gift of one,
                Who, her own true faith, hath run,
                Through thy lower nature;
                Be my benediction said
                With my hand upon thy head,
Gentle fellow-creature!`</div>
            </div>
        </div>

    </div>
)

export default FoundColumn;