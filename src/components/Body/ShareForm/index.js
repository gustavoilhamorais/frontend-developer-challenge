import React, { useState } from "react";
import Form from "../../styles/Form";
import { isNull, isUndefined } from "util";
import Swal from "sweetalert2";

const ShareForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = event => {
    // Save user inputs to the 'name' and 'email' methods
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      default:
        setEmail(event.target.value);
        break;
    }
  };

  const submitData = () => {
    // after validation, if data gets here it would be sent to backend or whatever
    Swal.fire({
      title: 'Show!',
      html: `<p>Em instantes, ${name} receberá nosso link no email ${email}.</p>`,
      type: 'success',
      showCloseButton: true
    });
  };

  const validateForm = () => {
    // Simple validate if data isn't empty/fake data
    const validateName = isNull(name) || isUndefined(name) || name === "";
    const validateEmail = isNull(email) || isUndefined(email) || email === "";
    if (!validateName && !validateEmail) emailStrongValidation(email);
    else Swal.fire({
      title: 'Atenção',
      html: '<p>Você precisa informar um email e um nome válido, por favor.</p>',
      type: 'warning',
      showCloseButton: true
    });
  };

  const emailStrongValidation = email => {
    // Validate characters in a email string
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) submitData();
    else Swal.fire({
      title: 'Atenção',
      html: '<p>Por favor insira um endereço de email válido!</p>',
      type: 'error',
      showCloseButton: true
    });
    // Alert if email is invalid. Does not must return nothing t any function.
    return false;
  };

  return (
    <Form>
      <h1>Compartilhe a novidade</h1>
      <h3>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </h3>
      <div className="row">
        <div className="column"></div>
        <div className="column">
          <span>Nome do seu amigo</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => handleChange(event)}
          />
        </div>
        <div className="column">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => handleChange(event)}
          />
        </div>
      </div>
      <button onClick={() => validateForm()}>Enviar agora</button>
    </Form>
  );
};

export default ShareForm;
