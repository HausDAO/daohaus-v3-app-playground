import React from 'react';

import { UserContextProvider } from './contexts/UserContext';
import TxInfoModal from './modals/TxInfoModal';
import BaseRouter from './routers/baseRouter';

function App() {
  const AppScopedModals = () => (
    <>
      <TxInfoModal />
    </>
  );

  return (
    <UserContextProvider>
      <BaseRouter />
      <AppScopedModals />
    </UserContextProvider>
  );
}

export default App;
