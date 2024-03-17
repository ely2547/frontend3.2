// // RoomCard.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick'; // Importa react-slick para el carrusel


// // Configuración para el carrusel
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true, 
//   autoplaySpeed: 3000, // tiempo en milisegundos
// };


// const RoomCard = ({ roomName, roomDescription, roomImage, price, currency, exchangeRate, reviews, people }) => {
//   const convertedPrice = (price * exchangeRate).toFixed(2);

//   return (
//     <motion.div className="rounded-lg shadow-lg overflow-hidden"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//     >
//       <img className="w-full h-48 object-cover" src={roomImage} alt={roomName} />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-sky-600">{roomName}</h3>
//         <p className="text-gray-800">{roomDescription}</p>
//         <div className="flex items-center justify-between mt-4">
//           <span className="text-gray-700 text-sm">
//             Precio: {currency} {currency === 'USD' ? price : convertedPrice}
//           </span>
//           <span className="text-gray-700 text-sm">
//             Personas: {people}
//           </span>
//         </div>
//         {/* Carrusel de reseñas */}
//         <Slider {...settings}>
//           {reviews.map((review, index) => (
//             <div key={index} className="p-4">
//               <p className="text-gray-600">{review.comment}</p>
//               <p className="text-gray-600">- {review.user}</p>
//               <p className="text-yellow-600">Rating: {review.rating}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </motion.div>
//   );
// };

// export default RoomCard;
// 
// // Prices.jsx
// import React, { useState, useEffect } from 'react';
// import RoomCard from '../components/RoomCard';
// import ReviewForm from '../components/ReviewForm';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5
//     }
//   }
// };

// const itemVariants = {
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6
//     }
//   }
// };

// const Prices = () => {
//   const [roomsData, setRoomsData] = useState([]);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const [currency, setCurrency] = useState('USD');
//   const [exchangeRate, setExchangeRate] = useState(1);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/rooms');
//         setRoomsData(response.data);
//       } catch (error) {
//         console.error('Error al obtener los datos de las habitaciones:', error);
//       }
//     };

//     fetchRooms();
//   }, []);

//   const handleRoomSelect = (room) => {
//     setSelectedRoom(room);
//   };

//   const handleReviewSubmit = (newReview) => {
//     setRoomsData(roomsData.map(room => {
//       if (room._id === selectedRoom._id) {
//         return { ...room, reviews: [...room.reviews, newReview] };
//       }
//       return room;
//     }));
//   };

//   return (
//     <motion.div
//       className="container mx-auto px-4 py-8"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.div className="flex flex-wrap -m-4"
//         variants={containerVariants}
//       >
//         {roomsData.map((room, idx) => (
//           <motion.div key={idx} className="p-4 md:w-1/3"
//             variants={itemVariants}
//             onClick={() => handleRoomSelect(room)}
//           >
//             <RoomCard 
//               roomName={room.name} 
//               roomDescription={room.description}
//               roomImages={room.images}
//               price={room.price}
//               currency={currency}
//               exchangeRate={exchangeRate}
//               reviews={room.reviews}
//               people={room.people}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//       {selectedRoom && <ReviewForm room={selectedRoom} onReviewSubmit={handleReviewSubmit} />}
//     </motion.div>
//   );
// };

// export default Prices;

// RoomCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const reviewSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
};

const RoomCard = ({ roomName, roomDescription, roomImages, price, currency, exchangeRate, reviews, people }) => {
  const convertedPrice = (price * exchangeRate).toFixed(2);

  return (
    <motion.div className="rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Slider {...imageSliderSettings}>
        {roomImages.map((image, index) => (
          <img key={index} className="w-full h-48 object-cover" src={image} alt={`${roomName} image ${index + 1}`} />
        ))}
      </Slider>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-sky-600">{roomName}</h3>
        <p className="text-gray-800">{roomDescription}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-700 text-sm">
            Precio: {currency} {currency === 'USD' ? price : convertedPrice}
          </span>
          <span className="text-gray-700 text-sm">
            Personas: {people}
          </span>
        </div>
        <Slider {...reviewSliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-gray-600">- {review.user}</p>
              <p className="text-yellow-600">Rating: {review.rating}</p>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default RoomCard;
