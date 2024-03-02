import styled from 'styled-components';
import Icon from '@mdi/react';
import {
  mdiGithub,
  mdiLinkedin,
  mdiFacebook,
  mdiInstagram,
  mdiFilePdfBox,
  mdiMapMarker,
} from '@mdi/js';
import { device } from 'theme/theme';

const StyledMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 80%;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  padding: 50px 0;
  color: ${({ theme }) => theme.text};
  transition: all 1s ease;

  display: flex;

  span:first-child {
    height: 100%;
    margin-right: 0.5rem;
  }

  @media ${device.m} {
    font-size: 1.5rem;
  }

  @media ${device.s} {
    font-size: 1rem;
  }

  @media ${device.xs} {
    font-size: 0.8rem;
  }
`;

const StyledBlinkingCursor = styled.span`
  animation: blinker 1.5s step-start infinite;
  font-weight: bold;
  color: #f38f37;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const StyledH2Primary = styled.h2`
  color: #059688;
  transition: all 1s ease;
  font-size: 1.5rem;
  margin: 0 1rem 1rem 1rem;

  @media ${device.m} {
    font-size: 1.2rem;
  }

  @media ${device.s} {
    font-size: 0.9rem;
  }

  @media ${device.xs} {
    font-size: 0.8rem;
  }
`;

const StyledH2Secondary = styled.h2`
  color: ${({ theme }) => theme.text};
  transition: all 1s ease;
  font-size: 1.5rem;
  padding-bottom: 1rem;

  @media ${device.m} {
    font-size: 1.2rem;
  }

  @media ${device.s} {
    font-size: 0.9rem;
  }

  @media ${device.xs} {
    font-size: 0.8rem;
  }
`;

const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.text};
  transition: all 1s ease;

  font-size: 1.2rem;

  display: flex;

  padding-bottom: 2rem;

  a {
    color: ${({ theme }) => theme.text};
    transition: all 1s ease;
    font-weight: bold;
    text-decoration: none;
    margin: 0 0.5rem;
  }

  a:hover {
    color: #059688;
    transition: none;
  }

  svg {
    fill: ${({ theme }) => theme.text};
    transition: all 1s ease;

    width: 1.2rem;
    height: 1.2rem;
  }

  @media ${device.m} {
    font-size: 0.9rem;
  }

  @media ${device.s} {
    font-size: 0.8rem;
  }

  @media ${device.xs} {
    font-size: 0.7rem;
  }
`;

const StyledLinkIcon = styled.a`
  margin: 0 1rem;

  svg {
    fill: ${({ theme }) => theme.text};
    transition: all 1s ease;

    width: 3.5rem;
    height: 3.5rem;
  }

  &:hover {
    svg {
      fill: #059688;
      transition: none;
    }
  }

  @media ${device.m} {
    margin: 0 0.5rem;
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  @media ${device.s} {
    margin: 0 0.5rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media ${device.xs} {
    margin: 0 0.5rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const MainView = (): React.ReactElement => (
  <StyledMain>
    <StyledH1>
      <span>&gt; </span>
      <span>
        Hey!👋🏻 I am Krisjanis Lejejs!<StyledBlinkingCursor>|</StyledBlinkingCursor>
      </span>
    </StyledH1>
    <StyledH2Primary>Full-stack Developer at Accenture | Master's Student of Computer Science</StyledH2Primary>
    <StyledH2Secondary>...</StyledH2Secondary>
    <StyledH4>
      <Icon path={mdiMapMarker} size={null} color={null} />
      <a href='https://www.google.lv/maps/place/Riga/' target='_blank' rel='noreferrer'>
        Riga
      </a>
      <span> - born &amp; raised in Latvia. Currently living there.</span>
    </StyledH4>
    <div>
      <StyledLinkIcon href='https://github.com/klejejs/' target='_blank' rel='noreferrer'>
        <Icon path={mdiGithub} size={null} color={null} />
      </StyledLinkIcon>
      <StyledLinkIcon
        href='https://www.linkedin.com/in/krisjanis-lejejs/'
        target='_blank'
        rel='noreferrer'
      >
        <Icon path={mdiLinkedin} size={null} color={null} />
      </StyledLinkIcon>
      <StyledLinkIcon
        href='https://www.facebook.com/krisjanis2000/'
        target='_blank'
        rel='noreferrer'
      >
        <Icon path={mdiFacebook} size={null} color={null} />
      </StyledLinkIcon>
      <StyledLinkIcon
        href='https://www.instagram.com/krisjanis2000/'
        target='_blank'
        rel='noreferrer'
      >
        <Icon path={mdiInstagram} size={null} color={null} />
      </StyledLinkIcon>
      <StyledLinkIcon
        href='https://cv.lejejs.com/krisjanis2000/krisjanis-lejejs'
        target='_blank'
        rel='noreferrer'
      >
        <Icon path={mdiFilePdfBox} size={null} color={null} />
      </StyledLinkIcon>
    </div>
  </StyledMain>
);

export default MainView;
