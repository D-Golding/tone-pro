import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// Import images (assuming these are in the assets folder)
import hero from '../assets/tone1.jpeg';
import tone2 from '../assets/tone2.jpeg';
import tone3 from '../assets/tone3.jpeg';
import tone7 from '../assets/tone7.jpeg';

// Custom icons
const IconDumbbell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 12V5m0 14v-7m12-7v7m0 0v7M1 5h8M1 19h8m6-14h8m-8 14h8m-8-7H9"></path>
  </svg>
);

const IconGraph = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

const IconTrophy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const IconLayout = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconActivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

// Theme definition
const themes = {
  light: {
    primary: '#FF6B6B',     // Coral red
    secondary: '#4ECDC4',   // Teal
    accent1: '#F4A261',     // Sandy brown
    accent2: '#1A535C',     // Dark teal
    light: '#FFFFFF',
    background: '#F8F9FC',
    text: '#2A2C3E',
    textLight: '#6C6F82',
    card: '#FFFFFF',
    border: '#E2E5EF'
  }
};

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }

  button {
    font-family: 'Inter', sans-serif;
  }
  
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes pulse {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }
`;

// Hero section styles
const HeroSection = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 60px;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  text-align: center;
  color: ${props => props.theme.light};
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,107,107,0.5) 100%);
  z-index: 1;
`;

// Page container
const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.text};
  line-height: 1.6;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Header styles
const Header = styled.header`
  position: relative;
  z-index: 10;
  padding: 20px 0;
  background-color: ${props => `${props.theme.background}E6`};
  backdrop-filter: blur(5px);
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.text};
  
  svg {
    color: ${props => props.theme.primary};
    margin-right: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }
`;

const ComingSoonBadge = styled.div`
  position: absolute;
  top: 90px;
  right: -45px;
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  padding: 8px 50px;
  font-weight: bold;
  transform: rotate(45deg);
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 5px 40px;
    font-size: 12px;
    top: 60px;
    right: -40px;
  }
`;

const TitleIcon = styled.div`
  font-size: 24px;
  color: ${props => props.theme.light};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  
  svg {
    animation: float 3s ease-in-out infinite;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(to right, 
    ${props => props.theme.light || '#FFFFFF'}, 
    ${props => props.theme.secondary}, 
    ${props => props.theme.accent1});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 30px rgba(255, 107, 107, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ComingSoonTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.light};
  background: ${props => props.theme.primary};
  padding: 5px 15px;
  border-radius: 20px;
  margin-bottom: 15px;
  display: inline-block;
  animation: pulse 2s infinite;
`;

const PageSubtitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${props => props.theme.light};
  margin-bottom: 30px;
  font-weight: 400;
  letter-spacing: 0.5px;
  max-width: 700px;
  margin: 0 auto 30px;
`;

// Main content styling
const IntroText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${props => props.theme.text};
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

// Feature cards grid
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin: 40px 0;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.card};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.border};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 107, 107, 0.3);
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, 
    ${props => props.color || props.theme.primary}20, 
    ${props => props.color || props.theme.secondary}10);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    color: ${props => props.color || props.theme.primary};
    stroke-width: 1.5px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${props => props.theme.textLight};
  margin: 0;
`;

// Section styling
const SectionContainer = styled.section`
  margin: 80px 0;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.text};
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: ${props => props.theme.secondary};
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, ${props => props.theme.border}, transparent);
    margin-left: 15px;
  }
`;

const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.7;
  color: ${props => props.theme.textLight};
  
  p {
    margin-bottom: 20px;
  }
  
  strong {
    color: ${props => props.theme.text};
    font-weight: 600;
  }
`;

// Feature Image Section
const FeatureSection = styled.section`
  position: relative;
  padding: 80px 0;
  margin: 60px 0;
  overflow: hidden;
`;

const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
  }
`;

const FeatureImage = styled.div`
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

// Email signup form
const SignupSection = styled.div`
  background: ${props => props.theme.card};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
  margin: 60px 0;
  border: 1px solid ${props => props.theme.border};
  text-align: center;
  max-width: 800px;
  margin: 60px auto;
`;

const SignupTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 15px;
`;

const SignupText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textLight};
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SignupForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SignupInput = styled.input`
  flex: 1;
  height: 50px;
  padding: 0 20px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: ${props => props.theme.primary};
  }
  
  @media (max-width: 576px) {
    border-radius: 8px;
    width: 100%;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }
  
  svg {
    stroke-width: 2px;
  }
`;

const SignupButton = styled(Button)`
  border-radius: 0 8px 8px 0;
  padding: 0 30px;
  
  @media (max-width: 576px) {
    border-radius: 8px;
    width: 100%;
  }
`;

// Call to action section
const CTASection = styled.div`
  margin: 80px 0 40px;
  padding: 80px 40px;
  position: relative;
  text-align: center;
  overflow: hidden;
  border-radius: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${tone7});
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(42, 44, 62, 0.85) 0%, rgba(255, 107, 107, 0.75) 100%);
    z-index: 1;
  }
`;

const CTATitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  color: ${props => props.theme.light};
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
`;

const CTAText = styled.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto 30px;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 2;
`;

const CTAButton = styled(Button)`
  position: relative;
  z-index: 2;
`;

// Footer styling
const Footer = styled.footer`
  margin-top: 80px;
  padding: 40px 0 20px;
  text-align: center;
  color: ${props => props.theme.textLight};
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
    border-radius: 3px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.textLight};
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

// Main component
function ToneProLanding() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    alert(`Thanks! We'll notify ${email} when Tone Pro launches.`);
    setEmail('');
  };

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <ComingSoonBadge>COMING SOON</ComingSoonBadge>
      <PageContainer>
        <Header>
          <NavMenu>
            <Logo>
              <IconDumbbell /> TONE PRO
            </Logo>
            <NavLinks>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#signup">Early Access</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </NavLinks>
          </NavMenu>
        </Header>

        <HeroSection>
          <HeroImage />
          <HeroOverlay />
          <HeroContent>
            <ComingSoonTitle>Coming Soon</ComingSoonTitle>
            <TitleIcon><IconDumbbell size={32} /></TitleIcon>
            <PageTitle>TONE PRO</PageTitle>
            <PageSubtitle>Transforming Exercise into Experience: A Personalized Journey to Fitness</PageSubtitle>
            <Button onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}>
              Get Early Access
            </Button>
          </HeroContent>
        </HeroSection>

        <ContentContainer>
          <IntroText>
            Get ready for a fitness companion that doesn't just count your reps, but understands your journey—transforming every workout, every achievement into a dynamic, personalized path toward your goals.
          </IntroText>

          <SectionContainer id="features">
            <SectionTitle>
              <IconDumbbell size={24} /> Coming Soon To Tone Pro
            </SectionTitle>
            <SectionContent>
              <p>Our team is working hard to bring you the next generation of fitness technology. Tone Pro will revolutionize how you track, plan, and achieve your fitness goals with intuitive design and powerful features.</p>
            </SectionContent>
          </SectionContainer>

          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon color={themes.light.primary}>
                <IconDumbbell size={24} />
              </FeatureIcon>
              <FeatureTitle>Exercise Library</FeatureTitle>
              <FeatureDescription>
                Access hundreds of exercises with detailed animations demonstrating proper form and technique to maximize results and prevent injury.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon color={themes.light.secondary}>
                <IconLayout size={24} />
              </FeatureIcon>
              <FeatureTitle>Drag-and-Drop Builder</FeatureTitle>
              <FeatureDescription>
                Create your perfect workout with our intuitive drag-and-drop interface. Customize routines to match your exact preferences and goals.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon color={themes.light.accent1}>
                <IconGraph size={24} />
              </FeatureIcon>
              <FeatureTitle>Progress Tracking</FeatureTitle>
              <FeatureDescription>
                Watch your improvement through beautiful interactive visualizations that transform raw data into motivating insights.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>

          <FeatureSection>
            <FeatureWrapper>
              <FeatureContent>
                <SectionTitle>
                  <IconTrophy size={24} /> Gamified Fitness Journey
                </SectionTitle>
                <SectionContent>
                  <p>Tone Pro transforms exercise from a chore into an exciting journey. Our achievement system celebrates your progress with badges, milestones, and rewards that keep you motivated every step of the way.</p>
                  <p>Whether you're celebrating your first week of consistency or hitting a personal record, Tone Pro recognizes your achievements and encourages continued growth.</p>
                </SectionContent>
              </FeatureContent>
              <FeatureImage>
                <img src={tone2} alt="Woman performing plank exercise in gym" />
              </FeatureImage>
            </FeatureWrapper>
          </FeatureSection>

          <FeatureSection>
            <FeatureWrapper reverse>
              <FeatureImage>
                <img src={tone3} alt="Woman lifting weights in gym" />
              </FeatureImage>
              <FeatureContent id="about">
                <SectionTitle>
                  <IconActivity size={24} /> Your Personalized Experience
                </SectionTitle>
                <SectionContent>
                  <p>No two fitness journeys are the same. Tone Pro adapts to your unique goals, preferences, and progress to deliver a completely personalized fitness experience.</p>
                  <p>Our intelligent algorithms learn from your performance to suggest optimal workouts, recovery periods, and progression strategies—all designed specifically for you.</p>
                </SectionContent>
              </FeatureContent>
            </FeatureWrapper>
          </FeatureSection>

          <SignupSection id="signup">
            <SignupTitle>Be the First to Experience Tone Pro</SignupTitle>
            <SignupText>
              Join our waiting list to receive early access when we launch. Plus, get exclusive updates and special founding member benefits.
            </SignupText>
            <SignupForm onSubmit={handleSubmit}>
              <SignupInput
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SignupButton type="submit">
                <IconMail size={16} /> Notify Me
              </SignupButton>
            </SignupForm>
          </SignupSection>

          <CTASection>
            <CTATitle>Transform Your Fitness Journey</CTATitle>
            <CTAText>
              Get ready for a new approach to fitness with intelligent tracking, motivating visualizations, and personalized guidance that evolves with you.
            </CTAText>
            <CTAButton onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}>
              Join The Waitlist <IconChevronDown size={18} />
            </CTAButton>
          </CTASection>

          <SectionContainer>
            <SectionTitle>
              <IconShield size={24} /> Our Commitment
            </SectionTitle>
            <SectionContent>
              <p>At Tone Pro, we're dedicated to creating more than just another fitness app. We're building a comprehensive platform that truly understands the science of fitness and the human factors that drive success.</p>
              <p>Our team combines expertise in exercise science, software development, and user experience design to create a tool that not only tracks your activities but actively helps you achieve your fitness goals.</p>
            </SectionContent>
          </SectionContainer>

          <Footer id="contact">
            <FooterLinks>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </FooterLinks>
            <FooterText>
              © {new Date().getFullYear()} Tone Pro. All rights reserved.
            </FooterText>
          </Footer>
        </ContentContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default ToneProLanding;