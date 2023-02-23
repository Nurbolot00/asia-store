import React from 'react';
import styled from 'styled-components';

const IphoneItem = ({item}) => {
    return (
        <StyledItemContainer>
            <ItemImageContainer>
                <img src={item.img} alt={item.phoneName} />
            </ItemImageContainer>
            <InfoContainer >
                <h3>{item.phoneName}</h3>
                <p>{item.article}</p>
            </InfoContainer>
            <div>
                <h4>{item.price} som</h4>
            </div>
        </StyledItemContainer>
    );
};

export default IphoneItem;


const StyledItemContainer = styled.li`
    width: 100%;
    border: 1px solid gray;
    padding: 15px;
    list-style: none;
    color: black;
    height: 500px;
    div> h4{
        margin-top: 10px;
    }
    :hover{
        color: orange;
        box-shadow: 10px 15px gray 60px ;
        border: 3px solid orange;
        
    }

`

const ItemImageContainer = styled.div`
    img{
        width: 100%;
        /* max-height: 330px; */
    }
`

const InfoContainer = styled.div`
    :hover{
      
    }

`




