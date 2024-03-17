// // ReviewForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const ReviewForm = ({ room }) => {
//   const [review, setReview] = useState({
//     user: '',
//     comment: '',
//     rating: 0,
//   });

//   // Actualiza el estado con la información de la reseña
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setReview({ ...review, [name]: value });
//   };

//   // Envía la reseña al backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:3001/rooms/${room._id}/reviews`, review);
//       // Actualizar la interfaz de usuario aquí si es necesario
//     } catch (error) {
//       console.error('Error al enviar la reseña:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Dejar una reseña para: {room.name}</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="user"
//           placeholder="Tu nombre"
//           value={review.user}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="comment"
//           placeholder="Tu reseña"
//           value={review.comment}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="rating"
//           placeholder="Calificación (1-5)"
//           value={review.rating}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Enviar Reseña</button>
//       </form>
//     </div>
//   );
// };

// export default ReviewForm;

// ReviewForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ room, onReviewSubmit }) => {
  const [review, setReview] = useState({
    user: '',
    comment: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/rooms/${room._id}/reviews`, review);
      onReviewSubmit(response.data);
      setReview({
        user: '',
        comment: '',
        rating: 0,
      });
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
    }
  };

  return (
    <div>
      <h3>Dejar una reseña para: {room.name}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Tu nombre"
          value={review.user}
          onChange={handleInputChange}
        />
        <textarea
          name="comment"
          placeholder="Tu reseña"
          value={review.comment}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Calificación (1-5)"
          value={review.rating}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar Reseña</button>
      </form>
    </div>
  );
};

export default ReviewForm;
