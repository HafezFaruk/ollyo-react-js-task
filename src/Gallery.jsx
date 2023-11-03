import React, { useState, useEffect } from 'react';
import uploadIcon from "@/assets/images/uploadIcon.svg";
import imageData from "@/assets/data";

const Gallery = () => {
  
  const [images, setImages] = useState(imageData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);
  const [prevDragIndex, setDragIndex] = useState(null);
  const [toggleIndex, setToggleIndex] = useState(null);
  const [fixedId, setFixedId] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDraggedImage(index);
    setDragIndex(index);
    setToggleIndex(true);
    setFixedId(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    setToggleIndex(false);
    const newImages = [...images];
    if (draggedImage) {
      const droppedImage = newImages[draggedImage];
      newImages.splice(draggedImage, 1);
      newImages.splice(index, 0, droppedImage);
      setImages(newImages);
    } else {
      const droppedImage = newImages[fixedId];
      newImages.splice(fixedId, 1);
      newImages.splice(index, 0, droppedImage);
      setImages(newImages);
    }
    setDraggedImage(null);
  };

  useEffect(() => {
    if (!draggedImage) {
      setTimeout(() => {
        setDragIndex(null);
      }, 500);
    } else if (draggedImage && toggleIndex) {
      setTimeout(() => {
        setDraggedImage(null);
      }, 500);
    }
  }, [draggedImage, toggleIndex]);

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
              className={`drag-content-default group 
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