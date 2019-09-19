import React from "react";
import ShareForm from "./ShareForm";
import MerchandiseList from "./MerchandiseList";
import { Grid, Title } from "../styles/body";
import LoadMerchanBtn from './LoadMerchanBtn';
import MerchanContainer from "../../api/MerchandiseContext";

const Body = () => (
  <MerchanContainer>
    <Title>Sua seleção especial</Title>
    <Grid>
      <MerchandiseList />
    </Grid>
    <Grid>
      <LoadMerchanBtn/>
    </Grid>
    <ShareForm />
  </MerchanContainer>
);

export default Body;
