import React from 'react';

const LostPet = props => (
    <div>
        <form className='LostPetForm'>
            <div>Owner Information</div>
            <label>
              Owners Name:
              <input type="text" name="OwnerName" placeholder="Your Name" />
            </label>
            <div>Contact Information</div>
            <label>
              Email:
              <input type="email" name="Email" placeholder="Email@host.com" />
            </label>
            <label>
                Phone Number:
                <input type="tel" 
                    name="Phone" 
                    placeholder="1234567891"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    maxlength='10'
                />
            </label>
            <div>Pet Information</div>
            <label>
                Pet's Name:
                <input type="text" name="PetName" placeholder="Pet Name" />
            </label>
            <label>
                Collar Color:
                <input type="text" name="Collar" placeholder="Color" />
            </label>
            <label>
                Friendliness:
                Friendly: <input type='radio' name='Friendliness' value='Friendly' />
                Nervous:<input type='radio' name='Friendliness' value='Nervous' />
                Do Not Approach:<input type='radio' name='Friendliness' value='Do Not Approach' />
            </label>
            <div>
            <input type="submit" name="Submit" />
            </div>
            
        </form>

    </div>
)

export default LostPet;