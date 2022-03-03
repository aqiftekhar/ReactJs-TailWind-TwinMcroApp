import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../Logo/Logo';
import { deviceSize } from '../Responsive/Responsive';
import {slide as Menu} from "react-burger-menu";
import styles from './menuStyles';

const Container = styled.div`
width: 90%;
    ${tw`
        flex
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-gray-200
        border-opacity-50
        items-center
        self-center
    `};

`;

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    lg:ml-20
    justify-center
    items-center
    // items-end
    // justify-end
`;

const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-white
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    box-content
    mb-2
    lg:mb-0
`;

export default function NavBar() {
    const isMobile = useMediaQuery({ maxWidth : deviceSize.mobile});
    const Items = <NavItems>
        <NavItem>
            <Link to="Home">Home</Link>
        </NavItem>
        <NavItem>
            <Link to="Explore">Explore</Link>
        </NavItem>
        <NavItem>
            <Link to="#">Travel Places</Link>
        </NavItem>
    </NavItems>
  return <Container>
      <Logo/>
        {isMobile && <Menu right styles={styles}>
                        {Items}
                     </Menu>}
        {!isMobile &&  Items}
  </Container>
}
