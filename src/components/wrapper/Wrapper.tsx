import styled from 'styled-components';
import Icon from '@mdi/react';
import {
  mdiBugPlayOutline,
  mdiChevronRight,
  mdiClose,
  mdiCodeTags,
  mdiContentCopy,
  mdiMagnify,
  mdiMenu,
  mdiPuzzleOutline,
  mdiSourceBranch,
} from '@mdi/js';
import ThemeSwitcher from 'theme/ThemeSwitcher';
import { device } from 'theme/theme';

interface WrapperProps {
  children: React.ReactNode;
}

const Background = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;

  background-color: ${({ theme }) => theme.right};
  transition: all 1s ease;

  display: flex;

  font-size: 0.8rem;
`;

const LeftIcons = styled.div`
  height: 100%;
  width: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.text};
    transition: all 1s ease;
    margin: 10px 0;
  }

  background-color: ${({ theme }) => theme.left};
  transition: all 1s ease;

  @media ${device.m} {
    display: none;
  }
`;

const RightSide = styled.div`
  height: 100%;
  width: 100%;
`;

const Header = styled.header`
  height: 30px;
  width: 100%;

  display: flex;

  background-color: ${({ theme }) => theme.left};
  transition: all 1s ease;
`;

const HeaderTab = styled.div`
  height: 100%;

  cursor: pointer;

  display: flex;
  align-items: center;

  padding: 0px 10px;

  background-color: ${({ theme }) => theme.right};
  transition: all 1s ease;
  color: ${({ theme }) => theme.text};
`;

const HeaderTabText = styled.div`
  padding: 0 10px;
`;

const PathText = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.pathText};

  padding: 5px 1rem;
`;

const MainWindowWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
`;

const LineNumbers = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.numbers};

  @media ${device.m} {
    padding: 0 5px;
  }
`;

const LineNumber = styled.div`
  margin: 2px 13px;

  @media ${device.m} {
    margin: 2px 5px;
  }
`;

const MainWindow = styled.div`
  height: 100%;
  width: 100%;
`;

const ArrowRightIcon = (): React.ReactElement => <Icon path={mdiChevronRight} size={0.8} />;

const Wrapper = ({ children }: WrapperProps): React.ReactElement => (
  <ThemeSwitcher>
    <Background>
      <LeftIcons>
        <Icon path={mdiMenu} size={1} color={null} />
        <Icon path={mdiContentCopy} size={1} color={null} />
        <Icon path={mdiMagnify} size={1} color={null} />
        <Icon path={mdiSourceBranch} size={1} color={null} />
        <Icon path={mdiBugPlayOutline} size={1} color={null} />
        <Icon path={mdiPuzzleOutline} size={1} color={null} />
      </LeftIcons>
      <RightSide>
        <Header>
          <HeaderTab>
            <Icon path={mdiCodeTags} size={0.6} color='orange' />
            <HeaderTabText>index.html</HeaderTabText>
            <Icon path={mdiClose} size={0.6} />
          </HeaderTab>
        </Header>
        <PathText>
          project <ArrowRightIcon /> krisjanis.lejejs.com <ArrowRightIcon /> index.html
        </PathText>
        <MainWindowWrapper>
          <LineNumbers>
            {Array(100)
              .fill(0)
              .map((_, i) => (
                <LineNumber key={Number(i)}>{i + 1}</LineNumber>
              ))}
          </LineNumbers>
          <MainWindow>{children}</MainWindow>
        </MainWindowWrapper>
      </RightSide>
    </Background>
  </ThemeSwitcher>
);

export default Wrapper;
