
import {useState, useEffect } from 'react' 


const ImageInput = () => {
    const [images, setImages] = useState([])
    const [imageURLs, setImageURLs] = useState([])

    useEffect(() => {
        if (images.length < 1) {
            return
        } else {
            const newImageURLs = []
            images.forEach(image => newImageURLs.push(URL.createObjectURL(image)))
            setImageURLs(newImageURLs)
        }
    }, [images])

    const onImageChange = (e) => {
        setImages([...e.target.files])
    }
    console.log(images, "IMAGES from ImageInput")
    return (
        <div className='input-image'>
            <input
                type="file" 
                multiple accept='image/*'
                onChange={onImageChange}
            />

            {imageURLs.map(imageURL => <img  src={imageURL} />)}
        </div>
    )
}

export default ImageInput