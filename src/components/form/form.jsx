import { useState } from "react";
import style from "./form.module.css";
import bg2 from "../../assets/bg2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validateFirstName = (name) => /^[a-zA-Z]+$/.test(name);
  const validateLastName = (name) => /^[a-zA-Z]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMessage = (message) => message.trim().length > 10;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!validateFirstName(formData.name)) {
      newErrors.name = "El nombre es inválido.";
    }
    if (!validateLastName(formData.lastName)) {
      newErrors.lastName = "El apellido es inválido.";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "El email es inválido.";
    }
    if (!validateMessage(formData.message)) {
      newErrors.message = "El mensaje tiene que tener al menos 10 caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }else {
      setErrors({});
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Correo enviado:', data);
        } else {
          const error = await response.json();
          console.error('Error al enviar el correo:', error);
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
      }
    }
      // } else {
    //   // Realizar la solicitud fetch al servidor
    //   fetch('http://localhost:3001/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Correo enviado:', data);
    //     // Limpiar los campos del formulario si el envío fue exitoso
    //     setFormData({
    //       name: '',
    //       lastName: '',
    //       email: '',
    //       message: ''
    //     });
    //     setErrors({});
    //   })
    //   .catch((error) => {
    //     console.error('Error al enviar el correo:', error);
    //     // Puedes agregar un manejo de errores aquí si es necesario
    //   });
    // }
  };
  

  return (
    <div className="page-header w-100">
      <img className={style.bg} src={bg2} alt="bg2" />
      <div className={`p-0 m-0 ${style.container}`}>
        <div className={`row d-flex justify-content-center align-items-center ${style.contactContainer}`}>
          <div className={`col-lg-5 ${style.contactData}`}>
            <h2 className="p-3 fw-light">Ponete en contacto con nosotros!</h2>

            <div className="d-flex flex-column align-items-center p-3 gap-5">

              <div className="d-flex flex-column justify-content-start align-items-center">
                <h5 className="w-100 py-2 fw-light">Teléfono</h5>
                <div className="w-100 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faSquarePhone} className={`text-white ${style.wsIcon}`} />
                  <p className="px-3 my-auto">+54 1169763444</p>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-start align-items-center">
                <h5 className="w-100 py-2 fw-light">Mail</h5>
                <div className="w-100 d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faSquareEnvelope} className={`text-white ${style.wsIcon}`} />
                  <p className="px-3 my-auto">Semsolutions@gmail.com</p>
                </div>
              </div>
              {/* <div className="w-50 d-flex justify-content-around">
                <FontAwesomeIcon icon={faSquareWhatsapp} className={`text-white ${style.wsIcon}`} />
                <FontAwesomeIcon icon={faSquareInstagram} className={`text-white ${style.wsIcon}`} />
              </div> */}
            </div>
          </div>
          <div className="col-lg-5 rounded-4">
            <div className="card card-body d-flex shadow-lg p-5 blur">
              <h5 className="text-center">¿Tenés consultas? Escribinos un mensaje</h5>
              <form role="form" id="contact-form" method="post" autoComplete="off" onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Nombre</label>
                      <div className="input-group mb-4">
                        <input
                          className="form-control"
                          placeholder=""
                          aria-label="First Name..."
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 ps-2">
                      <label>Apellido</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Last Name..."
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                        {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label>Email</label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder=""
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <label>Tu mensaje</label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      {/* <div className="form-check form-switch mb-4">
                        <input className="form-check-input switch" type="checkbox" id="flexSwitchCheckDefault" checked />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                          Estoy de acuerdo <a href="javascript:;" className="text-dark"><u>Términos y condiciones</u></a>.
                        </label>
                      </div> */}
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn bg-gradient-dark w-100 bg-info text-white">Enviar mensaje</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

                        
                        