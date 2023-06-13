import MainView from 'views/main/MainView';
import Wrapper from 'components/wrapper/Wrapper';
import GlobalStyle from 'theme/globalStyle';

const App = (): React.ReactElement => (
  <>
    <GlobalStyle />
    <Wrapper>
      <MainView />
    </Wrapper>
  </>
);

export default App;
