import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { initialState } from '../../App';
import IphoneItem from './IphoneItem';

const Iphones = () => {
    return (
        <StyledList>
            {initialState.map((item) => {
                return (
                    <Link style={{width: '32%', textDecoration: 'none'}} to={`${item.id}/iphone/`} key={item.id}>
                    <IphoneItem item={item} />
                    </Link>
                )
            })}
        </StyledList>
    );
};

export default Iphones;


const StyledList = styled.ul`
    margin: 0 auto;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`