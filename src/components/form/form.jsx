import React, { useState } from "react";
import style from "./form.module.css";
import bg2 from "../../assets/bg2.jpg";

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
      [name]: value
    });
  };

  const handleSubmit = (event) => {
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
      newErrors.message = "El mensaje tiene que tener al menos 10 caracteres";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormData({
        name: "",
        lastName: "",
        email: "",
        message: ""
      });
      setErrors({});
      // Aquí podrías enviar los datos del formulario a tu servidor
      console.log("Formulario enviado exitosamente:", formData);
    }
  };
  

  return (
    <div className="page-header">
      <div className="container py-5">
        <div className="row">
          <img className={style.bg} src={bg2} alt="bg2" />
          <div className="col-lg-7 d-flex justify-content-center flex-column">
            <div className="card card-body d-flex justify-content-center shadow-lg p-5 blur align-items-center">
              <h3 className="text-center">Contactanos</h3>
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
                      <div className="form-check form-switch mb-4">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                          Estoy de acuerdo <a href="javascript:;" className="text-dark"><u>Términos y condiciones</u></a>.
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn bg-gradient-dark w-100">Enviar mensaje</button>
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

                        
                        