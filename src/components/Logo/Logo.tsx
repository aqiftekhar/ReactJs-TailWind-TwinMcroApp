import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const LogoContainer = styled.div`
    ${tw`
        font-family["Tumbly"]   
        font-black
        text-2xl
        text-white
    `
    };
`;

export default function Logo() {
  return <LogoContainer>TravelPakistan</LogoContainer>
  
}
