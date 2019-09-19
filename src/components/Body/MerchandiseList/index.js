import React from "react";
import MerchandiseCard from "../../models/MerchandiseCard";
import { MerchanContext } from "../../../api/MerchandiseContext";
import { CardText } from "../../styles/Card";

const MerchandiseList = () => (
  <MerchanContext>
    {provider => {
      return !provider.state.isLoading ? (
        provider.state.merchandise.length > 0 ? (
          <>
            {provider.state.merchandise.map((merchan, index) => (
              <MerchandiseCard
                md="3"
                cardkey={merchan.id}
                imgkey={index}
                src={merchan.image}
                alt={merchan.name}
                width={"100%"}
                height={"100%"}
              >
                <CardText>
                  <h3>{merchan.name}</h3>
                  <p>{merchan.description}</p>
                  <h5>De: R${Number(merchan.oldPrice)}</h5>
                  <h4>Por: R${Number(merchan.price)}</h4>
                  <h5>
                    ou {merchan.installments.count}x de{" "}
                    {merchan.installments.value}
                  </h5>
                </CardText>
                <button>Comprar</button>
              </MerchandiseCard>
            ))}
          </>
        ) : (
          <h1>Sem Produtos para exibir.</h1>
        )
      ) : (
        <h1>Carregando ...</h1>
      );
    }}
  </MerchanContext>
);

export default MerchandiseList;