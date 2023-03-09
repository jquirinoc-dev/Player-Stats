import { useEffect, useState } from 'react';
import './styles/PlayerForm.css'
import image from './assets/image.svg'
import check from './assets/check.svg'

export const PlayerForm = ( { show, onPlayerSubmit } ) => {

    const className = show ? 'player-form-content active' : 'player-form-content';
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);


    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);


    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Get the form data
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const position = formData.get('position');
        const pace = formData.get('pace');
        const shooting = formData.get('shooting');
        const passing = formData.get('passing');
        const dribbling = formData.get('dribbling');
        const defending = formData.get('defending');
        const physical = formData.get('physical');
        const overall = formData.get('overall');
        const img = imageUrl;

        const newPlayer = {
            name,
            position,
            pace,
            shooting,
            passing,
            dribbling,
            defending,
            physical,
            overall,
            img,
        };

        onPlayerSubmit(newPlayer);

        e.target.reset();

      };





  return (
    <div className={ className } id='form' onSubmit={handleFormSubmit}>
        <form className="player-form-inputs">
            <div className='wrapper'>
                <div className="player-form-input">
                    
                    <input type="text" name="name" id="name" placeholder='Player name'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="position" id="position" placeholder='Playing position'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="pace" id="pace" placeholder='Pace'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="shooting" id="shooting" placeholder='Shooting'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="passing" id="passing" placeholder='Passing'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="dribbling" id="dribbling" placeholder='Dribbling'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="defending" id="defending" placeholder='Defending'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="physical" id="physical" placeholder='Physical'/>
                </div>
                <div className="player-form-input">
                    <input type="text" name="overall" id="overall" placeholder='Overall'/>
                </div>
                <div className="player-form-input" id='image-label-input'>
                    <label htmlFor="image" id='image-label'><img src={ image } alt="" />{selectedImage ? <h3>{selectedImage.name}</h3> : ''}</label>
                    <input type="file" name="image" id="image" onChange={(e) => setSelectedImage(e.target.files[0])}/>
                </div>
            </div>
            <div className="submit-button">
                <button type="submit">
                    <img src={ check } alt="" />
                </button>
            </div>
        </form>
        {/* <div className="player-form-image">
            <img src={imageUrl} alt="" />
        </div> */}
    </div>
  )
}
