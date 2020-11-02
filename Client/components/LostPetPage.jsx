import React from 'react';

const LostPet = props => (
    <div>
        <form className='LostPetForm' action='' method='post'>
            <h3>Owner Information</h3>
            <label>
                <h4>Name</h4>
                <input type="text" name="OwnerName" placeholder="Your Name" />
            </label>
            <label>
                <h4>Email</h4>
                <input type="email" name="Email" placeholder="Email@host.com" />
            </label>
            <label>
                <h4>Phone Number</h4>
                <input type="tel"
                    name="Phone"
                    placeholder="1234567891"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    maxlength='12'
                />
            </label>
            <h3>Pet Information</h3>
            <label>
                <h4>Name</h4>
                <input type="text" name="PetName" placeholder="Pet Name" />
            </label>
            <label>
                <h4>Collar Color</h4>
                <input type="text" name="Collar" placeholder="Color" />
            </label>
            <label>
                <h4>Size</h4>
                XS: <input type='radio' name='size' value="XS" />
                S: <input type='radio' name='size' value="S" />
                M: <input type='radio' name='size' value="M" checked/>
                L: <input type='radio' name='size' value="L" />
                XL: <input type='radio' name='size' value="XL" />
            </label>
            <label>
                <h4>Friendliness Rating</h4>
                Friendly: <input type='radio' name='Friendliness' value='Friendly' />
                Nervous:<input type='radio' name='Friendliness' value='Nervous' checked />
                Do Not Approach:<input type='radio' name='Friendliness' value='Do Not Approach' />
            </label>
            <label>
                <h4>Photo of Pet:</h4>
                <input type="file" id="input" multiple></input>
            </label>
            <div>
                <input type="submit" name="Submit" />
            </div>

        </form>

    </div>
)

export default LostPet;