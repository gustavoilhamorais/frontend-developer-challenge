import styled from "styled-components";

const Form = styled.div`
  width: 100%;
  letter-spacing: 0;
  opacity: 1;
  text-align: center;
  position: static;

  div.row {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  div.column {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 25%;
  }

  button {
    width: 260px;
    height: 39px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 4px;
    margin-bottom: 3%;
  }

  h1 {
    color: #888888;
  }

  h3 {
    color: #888888;
    margin-top: 3%;
    margin-bottom: 5%;
  }

  span {
    margin: 1%;
    text-align: left;
  }

  input {
    margin-top: 1%;
    margin-bottom: 5%;
    width: 340px;
  }
`;

export default Form;
