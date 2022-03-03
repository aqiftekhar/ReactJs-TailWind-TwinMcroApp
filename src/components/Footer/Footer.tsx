import React from 'react';
import { Link } from 'react-scroll';
import tw from 'twin.macro';
import Logo from '../Logo/Logo';
import {SiFacebook, SiInstagram, SiTwitter} from "react-icons/si";

const FooterContainer = tw.div`
    w-full
    h-96
    bg-dark-blue-500
    mt-10
    flex
    pt-6
    pl-2
    pr-2
    lg:pt-16
    lg:pr-16
    lg:pl-16
    text-white
    // justify-center
    items-center
    flex-col
`;

const Wrapper = tw.div`
    flex
    flex-col
    w-full
    h-full
    justify-center
    max-w-6xl
    lg:max-w-7xl
    // lg:justify-start
`;

const TopSection = tw.div`
    flex
    w-full
    justify-center
    lg:justify-start
`;

const InnerContaier = tw.div`
    w-full
    h-full
    flex
    flex-col
    lg:flex-row
    flex-wrap
    pt-16
    lg:pt-9
    justify-between
    lg:justify-start
`;

const LeftInnerContainer = tw.div`
    flex
    flex[5]
    w-full
    h-full
    justify-between  
    lg:justify-start
`;

const RightInnerContainer = tw.div`
    flex
    flex-col
    lg:flex-row
    flex[1]
    w-full
    h-full
    mb-5
    lg:mb-0
    flex-wrap
`;

const Menu = tw.ul`
    flex
    flex-col
    list-none
    mr-3
    lg:ml-5
    lg:mr-16
`;

const MenuItem = tw.li`
    flex
    text-white
    text-sm
    lg:text-base
    mt-2
`;

const BottomSection = tw.div`
    w-full
    flex
    flex-wrap
    items-center
    justify-between
    pl-4
    pr-4
    h-28
    lg:h-14
    bottom-0
    border-t
    border-t-gray-300
    border-opacity-50
`;

const Copyright = tw.span`
    font-size[x-x-small]
    text-gray-300
    w-full
    lg:w-auto
    text-center
`;

const SmallText = tw.span`
    font-size[small]
    text-gray-300
`;

const SocialMedia = tw.div`
    flex
    justify-center
`;

const Icons = tw.span`
    flex
    h-6
    mr-4
    cursor-pointer
    transition-colors
    hover:text-gray-300
`;

export default function Footer() {
  return (
    <FooterContainer>
        <Wrapper>
            <TopSection>
                <Logo/>
            </TopSection>
            <InnerContaier>
                <LeftInnerContainer>
                    <Menu>
                        <MenuItem>
                            <Link to="Home">Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="Explore">Explore</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="TravelPlaces">Travel Places</Link>
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem>
                            <Link to="#">Who we Are</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="#">Our Team</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="#">Our Travel Terms</Link>
                        </MenuItem>
                    </Menu>
                    <Menu>
                        <MenuItem>
                            <Link to="#">Our Mission</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="#">Join Us</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="#">Contact Us</Link>
                        </MenuItem>
                    </Menu>
                </LeftInnerContainer>
                <RightInnerContainer>
                    <SocialMedia>
                        <Icons>
                            <SiFacebook size={20}/>
                        </Icons>
                        <Icons>
                            <SiInstagram size={20}/>
                        </Icons>
                        <Icons>
                            <SiTwitter size={20}/>
                        </Icons>
                    </SocialMedia>
                </RightInnerContainer>
            </InnerContaier>
            <BottomSection>
                <Copyright>© KorakoramClub - All rights reserved</Copyright>
                <SmallText>
                    <a href='#'>Terms and Services</a>
                </SmallText>
                <SmallText>
                    <a href='#'>Privacy Policy</a>
                </SmallText> 
                <SmallText>
                    <a href='#'>Contact Us</a>
                </SmallText> 
                <SmallText>
                    <a href='#'>Sitemap</a>
                </SmallText>                
            </BottomSection>
        </Wrapper>
    </FooterContainer>
  )
}
