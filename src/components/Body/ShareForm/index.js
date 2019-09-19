import React, { useState } from "react";
import Form from "../../styles/Form";
import { isNull, isUndefined } from "util";

const ShareForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = event => {
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
    window.alert('Show! Em instantes seu amigo terá acesso à uma lista exclusiva que enviaremos no email informado!');
  };

  const validateForm = () => {
    const validateName = isNull(name) || isUndefined(name) || name === '';
    const validateEmail = isNull(email) || isUndefined(email) || email === '';
    if (!validateName && !validateEmail) submitData();
    else window.alert('Você precisa informar um email e um nome válidos, por favor.');
  };

  return (
    <Form>
      <h1>Compartilhe a novidade</h1>
      <h3>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </h3>
      <row>
        <column></column>
        <column>
          <span>Nome do seu amigo</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => handleChange(event)}
          />
        </column>
        <column>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => handleChange(event)}
          />
        </column>
      </row>
      <button onClick={() => validateForm()}>Enviar agora</button>
    </Form>
  );
};

export default ShareForm;
