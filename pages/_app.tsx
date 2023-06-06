import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/app/store'
import { UserAuthContextProvider } from '@/auth/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <UserAuthContextProvider>
        <Component {...pageProps} />
      </UserAuthContextProvider>
    </Provider>
    </>
  )
}
