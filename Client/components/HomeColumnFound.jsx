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
              <div className='FoundStory'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
            </div>
        </div>
        <div className='PetInfoColumns'>
            <div className='PetCol'>
                <img src='https://findmyfurryfriend.s3-us-west-2.amazonaws.com/puggy.jpg' alt='pet picture' className='PetPicture'></img>
            </div>
            <div className='PetCol'>
              <div className='PetName'>Name: <span>Puggie Smallz and Steve</span></div>
              <div className='FoundStory'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
            </div>
        </div>

    </div>
)

export default FoundColumn;