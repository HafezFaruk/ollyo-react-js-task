import React, { useState, useEffect } from 'react';
import uploadIcon from "@/assets/images/uploadIcon.svg";
import imageData from "@/assets/data";

const Gallery = () => {

  const [images, setImages] = useState(imageData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);
  const [dragProduct, setDragProduct] = useState(null);
  const [toggleProduct, setToggleIProduct] = useState(null);
  const [productId, setProductId] = useState(null);

  const productDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDraggedImage(index);
    setDragProduct(index);
    setToggleIProduct(true);
    setProductId(index);
  };

  const productDragOver = (e, index) => {
    e.preventDefault();
  };

  const productDrop = (e, index) => {
    e.preventDefault();
    setToggleIProduct(false);
    const newImages = [...images];

    if ((draggedImage || draggedImage === 0)) {
      const droppedImage = newImages[draggedImage];
      console.log();
      newImages.splice(draggedImage, 1);
      newImages.splice(index, 0, droppedImage);
      setImages(newImages);
    } else {
      const droppedImage = newImages[productId];
      newImages.splice(productId, 1);
      newImages.splice(index, 0, droppedImage);
      setImages(newImages);
      setProductId(null);
    }
    setDraggedImage(null);
  };

  useEffect(() => {
    if (!draggedImage) {
      if (draggedImage !== 0) {
        setTimeout(() => {
          setDragProduct(null);
        }, 500);
      }
      else {
        if ((draggedImage || draggedImage === 0) && toggleProduct) {
          setTimeout(() => {
            setDraggedImage(null);
          }, 500);
        }
      }
    } else if (draggedImage && toggleProduct) {
      setTimeout(() => {
        setDraggedImage(null);
      }, 500);
    }

  }, [draggedImage, toggleProduct]);
  const productCheckboxChange = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter(imageId => imageId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const productDeleteSelected = () => {
    const newImages = images.filter(image => !selectedImages.includes(image.id));
    setImages(newImages);
    setSelectedImages([]);
  };

  const productImageUpload = (e) => {
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
            <button className='text-red-500 hover:underline' onClick={productDeleteSelected}>Delete Files</button>
          </div>
        </div>
        <hr />
        <div className="gallery-content">
          {images?.map((image, index) => (
            <div
              key={image?.id}
              onDragStart={(e) => productDragStart(e, index)}
              onDragOver={(e) => productDragOver(e, index)}
              onDrop={(e) => productDrop(e, index)}
              draggable
              className={`drag-content-default group 
              ${index === 0 ? 'drag-content' : ' drag-content-size'} 
              ${productDragStart && draggedImage === index ? 'drag-start' : 'animation'} 
              ${productDragOver && draggedImage === index ? 'drag-over' : 'animation'} 
              ${productDrop && draggedImage === index ? 'drag-drop' : 'animation'}               
              ${(draggedImage || draggedImage === 0)
                  ? ""
                  : !draggedImage && dragProduct === index
                    ? "drag-drop"
                    : "animation"
                }  `}
            >

              <input
                type="checkbox"
                checked={selectedImages.includes(image?.id)}
                onChange={() => productCheckboxChange(image?.id)}
                className="checkbox "
              />

              <img className="card-images" src={image?.src} alt={`Image ${index}`} width={200} height={200} loading='lazy' />


              <div className={`${selectedImages.includes(image?.id) ? ' card-active' : ''} card-bg-hover`}>
              </div>

            </div>
          ))}



          <label className="img-upload-card">

            <img src={uploadIcon} alt="upload icon" loading='lazy' />

            <span className="mt-3 text-2xl font-medium">Add Images</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={productImageUpload}
              className="hidden"
            />
          </label>


        </div>

      </div>
    </div>
  );
};

export default Gallery;