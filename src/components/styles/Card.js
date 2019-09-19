import styled from "styled-components";

export const Card = styled.div`
  margin: 2%;
  background: white;
  margin-top: 5%;
  max-width: 18%;

  button {
    top: 760px;
    left: 1009px;
    width: 100%;
    height: 30px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 4px;
    margin-top: 15px;
    opacity: 1;
    :hover {
      border-bottom: 2px solid #606060;
    }
  }

  img {
    height: auto;
    width: 100%;
    margin-bottom: 10%;
    vertical-align: middle;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
  }
`;

export const CardText = styled.div`
  h3 {
    flex: 1;
    color: "#888888";
  }
  
  h4 {
    margin-bottom: 0;
  }

  h5 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    flex: 1;
    color: "#888888";
    line-height: 15px;
  }
`;
