import React from 'react';
import styled from 'styled-components';
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell, FaChartLine, FaUserFriends, FaMedal } from 'react-icons/fa';

// Global styles
const GlobalStyle = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Styled components
const Header = styled.header`
  background-color: #1e3a8a;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 4rem); /* Adjusted to account for padding */
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%; /* Ensures content doesn't spill outside the view */
  overflow: hidden; /* Prevents content from causing horizontal scroll */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  
  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
    color: #f97316;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #f97316;
  }
`;

const Button = styled.button`
  background-color: #f97316;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap; /* Prevents button text from wrapping */

  &:hover {
    background-color: #ea580c;
  }
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('/ex1.jpeg') center/cover no-repeat;
  height: 67.5vh; /* Reduced by 25% from 90vh */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #f97316;
  }
`;

const FeatureSection = styled(Section)`
  background-color: #f8fafc;
`;

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Feature = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #f97316;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  color: #666;
`;

const BannerSection = styled.section`
  background-color: #1e3a8a;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BannerContent = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const BannerTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const BannerText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const BannerImage = styled.div`
  flex: 1;
  max-width: 500px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const AppSection = styled(Section)`
  background-color: white;
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AppImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AppFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const AppFeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  svg {
    color: #16a34a;
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/ex3.jpeg') center/cover no-repeat;
  padding: 5rem 2rem;
  text-align: center;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const CTAButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
`;

const Footer = styled.footer`
  background-color: #0f172a;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f97316;
  }
`;

const Copyright = styled.p`
  opacity: 0.7;
  font-size: 0.9rem;
`;

const NewsletterButton = styled(Button)`
  background-color: #16a34a;
  
  &:hover {
    background-color: #15803d;
  }
`;

const checkIcon = <span>✓</span>;

function LandingPage() {
  return (
    <GlobalStyle>
      <Header>
        <Logo>
          <GiWeightLiftingUp /> Tone Pro
        </Logo>
        <Nav>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#website">Website</NavLink>
          <NavLink href="#signup">Sign Up</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <Button>Sign Up</Button>
      </Header>

      <Hero>
        <HeroContent>
          <HeroTitle>Transform Your Fitness Journey</HeroTitle>
          <HeroSubtitle>
            Personalized workout plans, progress tracking, and expert guidance - all in one place.
          </HeroSubtitle>
          <Button>Start Your Journey</Button>
        </HeroContent>
      </Hero>

      <FeatureSection id="features">
        <SectionTitle>Why Choose Tone Pro?</SectionTitle>
        <FeatureContainer>
          <Feature>
            <FeatureIcon>
              <FaDumbbell />
            </FeatureIcon>
            <FeatureTitle>Exercise Library</FeatureTitle>
            <FeatureText>
              Access hundreds of exercises with detailed instructional animations to perfect your form.
            </FeatureText>
          </Feature>

          <Feature>
            <FeatureIcon>
              <FaChartLine />
            </FeatureIcon>
            <FeatureTitle>Progress Tracking</FeatureTitle>
            <FeatureText>
              Track your progress with interactive charts and see your improvements over time.
            </FeatureText>
          </Feature>

          <Feature>
            <FeatureIcon>
              <FaUserFriends />
            </FeatureIcon>
            <FeatureTitle>Community Support</FeatureTitle>
            <FeatureText>
              Join a community of like-minded individuals and share your fitness journey.
            </FeatureText>
          </Feature>

          <Feature>
            <FeatureIcon>
              <FaMedal />
            </FeatureIcon>
            <FeatureTitle>Achievement Badges</FeatureTitle>
            <FeatureText>
              Earn badges and celebrate milestones as you progress through your fitness journey.
            </FeatureText>
          </Feature>
        </FeatureContainer>
      </FeatureSection>

      <BannerSection>
        <BannerContent>
          <BannerTitle>Fitness Tracking Made Simple</BannerTitle>
          <BannerText>
            Our easy-to-use platform helps you track workouts, monitor progress, and achieve your fitness goals faster than ever before.
          </BannerText>
          <div>
            <Button style={{ marginRight: '1rem' }}>Learn More</Button>
            <NewsletterButton>Subscribe</NewsletterButton>
          </div>
        </BannerContent>
        <BannerImage>
          <img src="/banner.jpeg" alt="Fitness tracking dashboard" />
        </BannerImage>
      </BannerSection>

      <AppSection id="website">
        <SectionTitle>The Ultimate Fitness Website</SectionTitle>
        <AppGrid>
          <AppImage>
            <img src="/ex2.jpeg" alt="Tone Pro app features" />
          </AppImage>
          <AppContent>
            <AppFeatureList>
              <AppFeatureItem>
                {checkIcon} Personalized workout plans tailored to your goals
              </AppFeatureItem>
              <AppFeatureItem>
                {checkIcon} Drag-and-drop workout builder for customization
              </AppFeatureItem>
              <AppFeatureItem>
                {checkIcon} Body metric visualization to track your progress
              </AppFeatureItem>
              <AppFeatureItem>
                {checkIcon} Exercise database with detailed categorization
              </AppFeatureItem>
              <AppFeatureItem>
                {checkIcon} Social sharing to celebrate your achievements
              </AppFeatureItem>
              <AppFeatureItem>
                {checkIcon} Statistical analysis of your performance
              </AppFeatureItem>
            </AppFeatureList>
            <Button>Sign Up Now</Button>
          </AppContent>
        </AppGrid>
      </AppSection>

      <CTASection id="signup">
        <CTATitle>Ready to Transform Your Fitness Journey?</CTATitle>
        <CTAText>
          Join thousands of users who have already improved their fitness with Tone Pro. Sign up today and get access to our complete platform.
        </CTAText>
        <CTAButton>Sign Up For Free</CTAButton>
      </CTASection>

      <Footer id="contact">
        <FooterLinks>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
        </FooterLinks>
        <Copyright>© {new Date().getFullYear()} Tone Pro. All rights reserved.</Copyright>
      </Footer>
    </GlobalStyle>
  );
}

export default LandingPage;