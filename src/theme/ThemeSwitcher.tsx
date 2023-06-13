import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Icon from '@mdi/react';
import { mdiLightbulb } from '@mdi/js';
import { device, themes } from 'theme/theme';

interface ThemeSwitcherProps {
  children: React.ReactNode;
}

const StyledThemeSwitcher = styled.div`
  cursor: pointer;
  margin: 15px;
  position: absolute;
  right: 0;
  top: 2rem;
  z-index: 1;

  font-size: 0.9rem;

  @media ${device.m} {
    top: 3rem;
  }
`;

const StyledThemeText = styled.div<{ isHovered: boolean }>`
  background: ${({ isHovered, theme }) => (isHovered ? theme.tab : theme.rightOpposite)};
  border-radius: 10px;
  color: ${({ isHovered, theme }) => (isHovered ? theme.text : theme.textOpposite)};
  display: inline-block;
  margin-right: 10px;
  padding: 7px 10px;
  position: relative;
  text-align: center;
  transition: all 1s ease;
  vertical-align: middle;

  &::after {
    border-color: transparent
      ${({ isHovered, theme }) => (isHovered ? theme.tab : theme.rightOpposite)};
    border-style: solid;
    border-width: 13px 0px 13px 13px;
    content: '';
    display: inline-block;
    position: absolute;
    right: -9px;
    top: 2px;
    transition: all 1s ease;
  }
`;

const StyledThemeIcon = styled.div<{ isHovered: boolean }>`
  display: inline-block;

  svg {
    fill: ${({ isHovered, theme }) => (isHovered ? theme.lightAccent : theme.rightOpposite)};
    transition: all 1s ease;
    vertical-align: middle;
  }
`;

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const presetTheme: string | null = localStorage.getItem('theme');

const ThemeSwitcher = ({ children }: ThemeSwitcherProps): React.ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    presetTheme != null ? presetTheme === 'dark' : darkModeQuery.matches,
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    darkModeQuery.addEventListener('change', (event) => {
      setIsDarkTheme(event.matches);
      localStorage.setItem('theme', event.matches ? 'dark' : 'light');
    });
  });

  return (
    <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
      <StyledThemeSwitcher
        onClick={() =>
          setIsDarkTheme((prevState) => {
            localStorage.setItem('theme', prevState ? 'light' : 'dark');
            return !prevState;
          })
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // fix for mobile devices
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <StyledThemeText isHovered={isHovered}>
          Turn {isDarkTheme ? 'on' : 'off'} the lights!
        </StyledThemeText>
        <StyledThemeIcon isHovered={isHovered}>
          <Icon path={mdiLightbulb} size={1.5} color={null} />
        </StyledThemeIcon>
      </StyledThemeSwitcher>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
