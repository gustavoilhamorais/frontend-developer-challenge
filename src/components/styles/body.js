import styled from "styled-components";

export const Grid= styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-basis: 100%;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const Title = styled.h4`
  text-align: center;
  letter-spacing: 0;
  color: #888888;
  opacity: 1;
  margin: 2%;
  font-size: 20px;
`;

export const LoadMerchandise = styled.button`
  width: 260px;
  height: 39px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 4px;
  margin-bottom: 10%;
`;
