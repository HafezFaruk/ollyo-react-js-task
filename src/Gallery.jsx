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
    <div className=" py-10 md:py-20 px-5">
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

              <svg className="w-20 h-20" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.64661 2.00037C4.26961 2.00037 2.00061 4.36237 2.00061 7.88837V16.1024C2.00061 16.2534 2.02761 16.3884 2.03561 16.5344C2.04061 16.6194 2.03961 16.7044 2.04661 16.7894C2.05061 16.8274 2.06161 16.8624 2.06561 16.9004C2.09861 17.2144 2.14961 17.5144 2.22061 17.8054C2.23861 17.8834 2.25961 17.9584 2.28061 18.0344C2.36061 18.3164 2.45461 18.5854 2.56761 18.8424C2.60061 18.9144 2.63661 18.9834 2.67061 19.0544C2.79261 19.2994 2.92461 19.5344 3.07761 19.7524L3.22561 19.9444C3.38461 20.1504 3.55061 20.3474 3.73861 20.5264C3.79961 20.5844 3.86861 20.6344 3.93261 20.6894C4.12561 20.8554 4.32261 21.0144 4.53961 21.1504C4.61761 21.1994 4.70361 21.2354 4.78361 21.2794C5.00461 21.4014 5.22761 21.5204 5.47061 21.6124C5.57061 21.6504 5.68161 21.6704 5.78561 21.7034C6.02461 21.7774 6.26061 21.8544 6.51761 21.8984C6.58228 21.9097 6.64883 21.9177 6.71639 21.924L7.12661 21.9534C7.30061 21.9664 7.46561 22.0004 7.64661 22.0004H16.3626C16.7386 22.0004 17.0976 21.9624 17.4446 21.9054C17.4576 21.9034 17.4696 21.9014 17.4816 21.8994C18.8346 21.6664 19.9576 21.0134 20.7446 20.0284C20.7536 20.0284 20.7536 20.0184 20.7626 20.0094C21.5536 19.0134 22.0006 17.6744 22.0006 16.1024V7.88837C22.0006 4.36237 19.7296 2.00037 16.3626 2.00037H7.64661ZM7.64661 3.39537H16.3626C18.9396 3.39537 20.6046 5.16237 20.6046 7.88837V16.1024C20.6046 16.8674 20.4626 17.5504 20.2196 18.1414C20.1886 18.1044 18.2516 15.7424 18.2426 15.7344C17.5506 14.9444 16.2516 13.7664 14.5466 14.4794C14.1366 14.6494 13.7766 14.8884 13.4466 15.0984C12.8736 15.4814 12.5366 15.6614 12.1866 15.6314C12.0416 15.6114 11.9056 15.5684 11.7766 15.4884C11.2186 15.1444 9.64161 12.8444 9.54661 12.7194C8.45661 11.2994 6.77661 10.9194 5.37661 11.7594C5.28261 11.8154 4.89886 12.0786 4.48286 12.3751L4.16884 12.601C3.85681 12.8277 3.56286 13.0486 3.39561 13.1904V7.88837C3.39561 5.16237 5.06061 3.39537 7.64661 3.39537ZM15.5213 5.99997C14.8237 5.99997 14.1919 6.29335 13.7394 6.7614C13.2849 7.21305 13 7.83552 13 8.51492C13 9.86988 14.1337 11 15.4952 11C16.6919 11 17.7122 10.1256 17.9409 8.9936C17.9787 8.82375 18 8.64907 18 8.4686C18 7.104 16.8915 5.99997 15.5213 5.99997Z" fill="black" />
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
