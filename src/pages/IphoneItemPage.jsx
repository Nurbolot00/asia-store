import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

const IphoneItemPage = ({ initialState }) => {
  const [details, setDetails] = useState({});
  console.log(details);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const chosenMaterialDetails = initialState.find((item) => item.id === +id);
    setDetails(chosenMaterialDetails);
  }, [initialState, id]);

  const navigate = useNavigate();

  const goBackToMaterialsPageHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <Block>
        <StyledImage alt={details.phoneName} src={details.img}/>
        <h3>{details.phoneName}</h3>
        <p>
          {details.description}
        </p>
        <button onClick={goBackToMaterialsPageHandler}>
          Go Back to Iphones Page
        </button>
      </Block>

      <Outlet />
    </>
  );
};

export default IphoneItemPage;

const Block = styled.div`
  background-color: white;
  padding: 2rem;
  margin: 2rem;
`;


const StyledImage = styled.img`
    width: 300px;
`


