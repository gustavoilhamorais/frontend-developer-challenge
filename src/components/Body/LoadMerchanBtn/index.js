import React from "react";
import { LoadMerchandise } from "../../styles/body";
import { MerchanContext } from "../../../api/MerchandiseContext";
import Loading from 'react-loading';

const LoadMerchanBtn = () => (
  // Consuming the context,
  // if loading render LoadingComponent, if not, render the Button
  <MerchanContext.Consumer>
    {provider =>
      !provider.state.isLoading ? (
        // On Click call Provider Component's load product's method
        <LoadMerchandise onClick={() => provider.loadMerchandise()}>
          Ainda mais produtos aqui!
        </LoadMerchandise>
      ) : <Loading type="bars" color="#707070" width="600px" height="700px"/>
    }
  </MerchanContext.Consumer>
);

export default LoadMerchanBtn;
