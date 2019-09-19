import React from "react";
import ShareForm from "./ShareForm";
import MerchandiseList from "./MerchandiseList";
import { Grid, Title } from "../styles/body";
import LoadMerchanBtn from './LoadMerchanBtn';
import MerchanContainer from "../../api/MerchandiseContext";

const Body = () => (
  // Context containers are the Components on the top of the hierarchy
  // Here, the MerchanContainer is just creating a link beetween him and his children.
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
