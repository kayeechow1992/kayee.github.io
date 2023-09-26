import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, useEffect} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  useEffect(() => {
    const _initTE = async () => {
      const {initTE} = await import('tw-elements');
      const {Dropdown, Ripple} = await import('tw-elements');
      initTE({Dropdown, Ripple});
    };
    _initTE();
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
