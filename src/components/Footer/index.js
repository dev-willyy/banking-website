import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLink,
    WebsiteRights,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    SocialMedia,
    SocialMediaWrap,
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorship</FooterLink>
                            <FooterLink to="/signin">Contributions</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassador</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                            <FooterLink to="/signin">
                                Video Testimonials
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            piggybanker
                        </SocialLogo>
                        <WebsiteRights>
                            Williams Madu &copy; {new Date().getFullYear()}, All
                            rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
