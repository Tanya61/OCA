
import Messenger from './components/Messenger';
import AccountProvider, { AccountContext } from './context/AccountProvider';
import TemplateProvider from './theme/TemplateProvider';

function App() {
  return (
    <TemplateProvider>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </TemplateProvider>

  );
}

export default App;
