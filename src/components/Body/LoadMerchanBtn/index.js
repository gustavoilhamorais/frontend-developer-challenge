import React from "react";
import { LoadMerchandise } from "../../styles/body";
import { MerchanContext } from "../../../api/MerchandiseContext";
import Loading from 'react-loading';

const LoadMerchanBtn = () => (
  <MerchanContext.Consumer>
    {provider =>
      !provider.state.isLoading ? (
        <LoadMerchandise onClick={() => provider.loadMerchandise()}>
          Ainda mais produtos aqui!
        </LoadMerchandise>
      ) : <Loading type="bars" color="#707070" width="600px" height="700px"/>
    }
  </MerchanContext.Consumer>
);

export default LoadMerchanBtn;
