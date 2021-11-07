import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Layout } from '@templates/Layout';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from '@store';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
