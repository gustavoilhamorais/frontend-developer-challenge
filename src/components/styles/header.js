import styled from "styled-components";

export const Main = styled.div`
  height: 319px;
  background: #707070 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  flex: 1;
  flex-basis: 100%;
  text-align: center;
  color: #ffffff;
  padding: 25px 5px;
  font-family: Bold Helvetica Neue;

  span {
    font-size: 20px;
    opacity: 1;
    flex: 1;
    flex-basis: 100%;
    margin-top: 3%;
  }

  button {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 6px #00000029;
    border: 1px solid #707070;
    border-radius: 4px;
    opacity: 1;
    top: 220px;
    left: 971px;
    height: 40px;
    width: 160px;
    margin: 4%;
    align-items: center;
    justify-content: center;
    :active {
      display: inline-block;
      vertical-align: middle;
      transform: translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      transition-duration: 0.6s;
      transition-property: transform;
    }
    :hover {
      border-bottom: 2px solid #606060;
    }
  }
`;

export const BigText = styled.h1`
  font-size: 49px;
  opacity: 1;
  flex: 1;
  flex-basis: 100%;
  margin-bottom: 2%;
`;
