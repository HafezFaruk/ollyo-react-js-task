import React, { useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([
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
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setDraggedImage(index);
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
    <div className="py-20 px-5">
      <div className='mb-20'>
        <h1 className="text-4xl lg:text-7xl font-bold text-gray-950 text-center mb-6">Real Project and <br /> Real Results</h1>
        <p className='text-lg font-normal text-gray-600 max-w-[600px] mx-auto text-center'>Task completed: Successfully executed project, meeting all requirements, deadlines, and quality standards. </p>
      </div>
      <div className="container mx-auto bg-white rounded-xl">
        <div className="flex justify-between px-5 lg:px-10 py-4 text-lg font-medium">
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
            <button className='text-red-500' onClick={handleDeleteSelected}>Delete Files</button>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5 lg:p-10">
          {images.map((image, index) => (
            <div
              key={image.id}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              draggable
              className={`${index === 0 ? 'col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 md:row-span-2 xl:row-span-2' : ''} bg-[#f0f7f4] shadow-lg rounded-lg relative group`}
            >
              <input
                type="checkbox"
                checked={selectedImages.includes(image.id)}
                onChange={() => handleCheckboxChange(image.id)}
                className="absolute top-5 left-5 z-50 cursor-pointer w-5 h-5"
              />
              <img className="w-full h-full rounded-lg " src={image.src} alt={`Image ${index}`} />


              <div className={`${selectedImages.includes(image.id) ? 'bg-teal-100 opacity-50 visible' : ''} bg-gray-600 opacity-0 group-hover:opacity-50 absolute inset-0 transition-all duration-500 rounded-lg z-10`}>

              </div>



            </div>
          ))}


          <div>
            <label className="w-full h-full min-h-[250px] sm:min-h-[200px] lg:min-h-[300px  flex flex-col justify-center items-center px-4 py-6 bg-white text-blue rounded-lg  tracking-wide border border-blue cursor-pointer hover:bg-gray-200">
              <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">Add Images</span>
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

        {/* <button className='bg-red-500 p-10' onClick={handleDeleteSelected}>Delete Selected</button> */}
      </div>
    </div>
  );
};

export default Gallery;
