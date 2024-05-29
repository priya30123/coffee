
import { useEffect } from 'react';
import './contact.css'; // Import the CSS file

const Contact = () => {
  useEffect(() => {
    const scriptSrc = "//js.hsforms.net/forms/embed/v2.js";
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
  
    const createForm = (portalId, formId) => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: portalId,
          formId: formId,
          target: '#hubspotForm',
          onFormSubmit: () => {
            alert("Form submitted successfully!");
            window.location.href = '/home'; // Navigate manually
          }
        });
        console.log('HubSpot form created.');
      } else {
        console.error('HubSpot forms object not found.');
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      script.onload = () => {
        console.log('HubSpot script loaded.');
        createForm('46281747', '1412a72d-7b42-49f1-bab8-5287c5ddbbcc');
      };

      script.onerror = () => {
        console.error('Failed to load the HubSpot script.');
      };

      document.body.appendChild(script);
    } else {
      console.log('HubSpot script already exists.');
      createForm('46281747', '1412a72d-7b42-49f1-bab8-5287c5ddbbcc');
    }

    return () => {
      const formContainer = document.querySelector('#hubspotForm');
      if (formContainer) {
        formContainer.innerHTML = '';
        console.log('Cleaned up the HubSpot form.');
      }
    };
  }, []);

  return (
    <div>
      
    
      <section className="reservation container" id="reservation">
        <h2 className="section__title" data-title="Reservation">
          Book A Table
        </h2>
      </section>
      <div id="hubspotForm" className="hubspot-form-container">
        {/* Your HubSpot form will be rendered here */}
       </div>
    </div>
  );
};

export default Contact;










  // return (
  //   <div>
  //     <header className="main-header">
  //       {/* Add your main header content here */}
  //     </header>

  //     <header className="header2">
  //       <nav>
  //         <div className="nav2">
  //           <a href="/">Home</a>
  //           <a href="/about">About</a>
  //           <a href="/skills">Skills</a>
  //           <a href="/contact">Contact</a>
  //         </div>
  //       </nav>
  //     </header>

  //     <div className='cm'>CONTACT ME</div>
  //     <div className="contact-form">
  //       <div className="signup-box">
  //         <div id="hubspotForm"></div>
  //       </div>
  //     </div>

  //     <footer>
  //       &copy; 2024 My Portfolio. All rights reserved.
  //     </footer>
  //   </div>
//   );
// };

// export default Contact;





// import React, { useState } from 'react';
// import { FaRegBookmark } from 'react-icons/fa';

// import React, { useEffect } from 'react';
// import './Contact.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Contact = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const scriptSrc = "//js.hsforms.net/forms/embed/v2.js";
//         const existingScript = document.querySelector(script[src="${scriptSrc}"]);

//         const createForm = (portalId, formId) => {
//             if (window.hbspt) {
//                 window.hbspt.forms.create({
//                     region: 'na1',
//                     portalId: portalId,
//                     formId: formId,
//                     target: '#hubspotForm',
//                     onFormSubmit: () => {
//                         alert("Form submitted successfully!");
//                         navigate('/Home');
//                     }
//                 });
//             }
//         };

//         if (!existingScript) {
//             const script = document.createElement('script');
//             script.src = scriptSrc;
//             script.type = 'text/javascript';
//             script.charset = 'utf-8';
//             script.async = true;

//             script.onload = () => {
//                 createForm('46276072', 'cf01111d-e463-4c91-91ea-3c91ec1b6fc9');
//             };

//             document.body.appendChild(script);
//         } else {
//             createForm('46276072', 'cf01111d-e463-4c91-91ea-3c91ec1b6fc9');
//         }

//         return () => {
//             const formContainer = document.querySelector('#hubspotForm');
//             if (formContainer) {
//                 formContainer.innerHTML = '';
//             }
//         };
//     }, [navigate]);

//     return (
//       <div>
//         <header className="main-header">
//           {/* Add your main header content here */}
//         </header>

//         <header className="header2">
//           <nav>
//             <div className="nav2">
//               <Link to="/">Home</Link>
//               <Link to="/Abt">About</Link>
//               <Link to="/Skills">Skills</Link>
//               <Link to="/Contact">Contact</Link>
//             </div>
//           </nav>
//         </header>

//         <div className='cm'>CONTACT ME</div>
//         <div className="contact-form">
//           <div className="signup-box">
//             <div id="hubspotForm"></div>
//           </div>
//         </div>
        
//         <footer>
//           &copy; 2024 My Portfolio. All rights reserved.
//         </footer>
//       </div>
//     );
// };

// export default Contact;





// const ReservationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     people: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Regular expressions for validation
//     const nameRegex = /^[A-Za-z\s]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{10}$/;
//     const dateRegex = /^\d{2}\/\d{2}\/\d{2}$/;
//     const timeRegex = /^(0[1-9]|1[0-2]):[0-5][0-9](AM|PM)$/;
//     const peopleRegex = /^\d+$/;
//   // Validate name
//     if (!nameRegex.test(formData.name)) {
//       alert('Name must contain only alphabets.');
//       return;
//     }
//   // Validate email
//     if (!emailRegex.test(formData.email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }
//   // Validate phone number
//     if (!phoneRegex.test(formData.phone)) {
//       alert('Phone number must contain exactly 10 digits.');
//       return;
//     }
//   // Validate date
//     if (!dateRegex.test(formData.date)) {
//       alert('Please enter a valid date in the format DD/MM/YY.');
//       return;
//     }
//   // Validate time
//     if (!timeRegex.test(formData.time)) {
//       alert('Please enter a valid time in the format HH:MMAM/PM.');
//       return;
//     }
//   // Validate people
//     if (!peopleRegex.test(formData.people)) {
//       alert('Please enter a valid number of people.');
//       return;
//     }

//     if (formData.message.trim() === '') {
//       alert('Please enter your message.');
//       return;
//     }

//     // If all validations pass, submit the form and show the alert
//     alert('Your reservation has been submitted.');
//     // Here you can also add logic to actually submit the form data, e.g., to an API
//   };

//   return (
//     <section className='reservation container' id='reservation'>
//       <h2 className='section__title' data-title='Reservation'>
//         Book A Table
//       </h2>
//       <form className='reservation__form grid' onSubmit={handleSubmit}>
//         <div className='form__input-div'>
//           <input
//             type='text'
//             placeholder='Your Name'
//             className='form__input'
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='form__input-div'>
//           <input
//             type='email'
//             placeholder='Your Email Address'
//             className='form__input'
//             name='email'
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='form__input-div'>
//           <input
//             type='text'
//             placeholder='Your Phone Number'
//             pattern='\d{10}'
//             className='form__input'
//             name='phone'
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='form__input-div'>
//           <input
//             type='text'
//             placeholder='Date Ex:DD/MM/YY'
//             className='form__input'
//             name='date'
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='form__input-div'>
//           <input
//             type='text'
//             placeholder='Time EX:01:35PM'
//             className='form__input'
//             name='time'
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='form__input-div'>
//           <input
//             type='text'
//             placeholder='Number of People'
//             className='form__input'
//             name='people'
//             value={formData.people}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className='form__input-div form__input-textarea'>
//           <textarea
//             placeholder='Your Message'
//             rows='4'
//             className='form__input'
//             name='message'
//             value={formData.message}
//             onChange={handleChange}
//             ></textarea>
//         </div>
//         <button className='btn btn--flex reservation__btn' type='submit'>
//           <FaRegBookmark /> Book A Table
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ReservationForm;



