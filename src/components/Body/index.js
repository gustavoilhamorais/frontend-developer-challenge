import React from "react";
import ShareForm from "./ShareForm";
import MerchandiseList from "./MerchandiseList";
import { Grid, Title, LoadMerchandise } from "../styles/body";
import MerchanContainer, {
  MerchanContext
} from "../../api/MerchandiseContext";

const Body = () => (
  <MerchanContainer>
    <Title>Sua seleção especial</Title>
    <Grid>
      <MerchandiseList />
    </Grid>
    <Grid>
      <MerchanContext>
        {provider => (
          !provider.state.isLoading
          ? <LoadMerchandise onClick={() => provider.loadMerchandise()}>Ainda mais produtos aqui!</LoadMerchandise>
          : <></>
        )}
      </MerchanContext>
    </Grid>
    <ShareForm />
  </MerchanContainer>
);

export default Body;
