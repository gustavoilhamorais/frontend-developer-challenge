import React from "react";
import { LoadMerchandise } from '../../styles/body';
import { MerchanContext } from '../../../api/MerchandiseContext';

const LoadMerchanBtn = () => (
  <MerchanContext>
    {provider =>
      !provider.state.isLoading ? (
        <LoadMerchandise onClick={() => provider.loadMerchandise()}>
          Ainda mais produtos aqui!
        </LoadMerchandise>
      ) : (
        <></>
      )
    }
  </MerchanContext>
);

export default LoadMerchanBtn;
