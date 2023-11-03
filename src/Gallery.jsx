import React, { useState, useEffect } from 'react';
import uploadIcon from "@/assets/images/uploadIcon.svg"
const Gallery = () => {
  const imageData = [
    { id: '1', src: 'https://i.ibb.co/f0Cmrm4/image-11.jpg' },
    { id: '2', src: 'https://i.ibb.co/307cPF5/image-3.webp' },
    { id: '3', src: 'https://i.ibb.co/BT78qy5/image-2.webp' },
    { id: '4', src: 'https://i.ibb.co/QPKQ14R/image-4.webp' },
    { id: '5', src: 'https://i.ibb.co/37WT94V/image-5.webp' },
    { id: '6', src: 'https://i.ibb.co/tpxg9BL/image-6.webp' },
    { id: '7', src: 'https://i.ibb.co/6NSjL2R/image-10.jpg' },
    { id: '8', src: 'https://i.ibb.co/Q6V735v/image-8.webp' },
    { id: '9', src: 'https://i.ibb.co/HrS4xG4/image-9.webp' },
    { id: '10', src: 'https://i.ibb.co/Ky8dJvM/image-7.webp' },
    { id: '11', src: 'https://i.ibb.co/4gyND37/image-1.webp' },
  ]
  const [images, setImages] = useState(imageData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);
  const [prevDragIndex, setDragIndex] = useState(null);
  
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setDraggedImage(index);
    setDragIndex(index);
   
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const newImages = [...images];
    const droppedImage = newImages[draggedImage];
    newImages.splice(draggedImage, 1);
    newImages.splice(index, 0, droppedImage);
    setImages(newImages);
    setDraggedImage(null);
  };

  useEffect(() => {
    if (!draggedImage) {
      setTimeout(() => {
        setDragIndex(null);
      }, 500)
    }
 

  }, [draggedImage])
  const handleCheckboxChange = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter(imageId => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const handleDeleteSelected = () => {
    const newImages = images.filter(image => !selectedImages.includes(image.id));
    setImages(newImages);
    setSelectedImages([]);
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const newImages = [...images];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const id = (newImages.length + 1).toString(); // Generate a unique ID for the new image
      const src = URL.createObjectURL(file);
      newImages.push({ id, src });
    }

    setImages(newImages);

  };

  return (
    <div className="py-10 md:py-20 px-5">
      <div className='mb-20 '>
        <h1 className="gallery-heading ">Real Project and <br /> Real Results</h1>
        <p className='gallery-description'>Task completed: Successfully executed project, meeting all requirements, deadlines, and quality standards. </p>
      </div>
      <div className="gallery-container">
        <div className="gallery-aria">
          <div>
            {selectedImages.length > 0 ?
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  checked={selectedImages.length > 0 ? true : false}
                  onChange={() => setSelectedImages([])}
                  className="cursor-pointer w-5 h-5 "
                />
                <p>{selectedImages.length} Files Selected</p>
              </div>
              :
              <p>Products Gallery</p>
            }
          </div>
          <div>
            <button className='text-red-500 hover:underline' onClick={handleDeleteSelected}>Delete Files</button>
          </div>
        </div>
        <hr />
        <div className="gallery-content">
          {images?.map((image, index) => (
            <div
              key={image?.id}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              draggable
              className={`drag-content-default translate-x-3 group 
              ${index === 0 ? 'drag-content' : ' drag-content-size'} 
              ${handleDragStart && draggedImage === index ? 'drag-start' : 'animation'} 
              ${handleDragOver && draggedImage === index ? 'drag-over' : 'animation'} 
              ${handleDrop && draggedImage === index ? 'drag-drop' : 'animation'} 
              ${draggedImage ? "" : !draggedImage && prevDragIndex === index ? "drag-drop" : "animation"} `}

            >

              <input
                type="checkbox"
                checked={selectedImages.includes(image?.id)}
                onChange={() => handleCheckboxChange(image?.id)}
                className="checkbox "
              />

              <img className="card-images" src={image?.src} alt={`Image ${index}`} width={200} height={200} loading='lazy' />


              <div className={`${selectedImages.includes(image?.id) ? ' card-active' : ''} card-bg-hover`}>
              </div>

            </div>
          ))}


          <div className="img-upload-card">
            <label className='img-upload-label'>

              <img src={uploadIcon} alt="upload icon" loading='lazy' />

              <span className="mt-3 text-2xl font-medium">Add Images</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Gallery;