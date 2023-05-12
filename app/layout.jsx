import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ApolloProvider from '@/context/ApolloContextProvider'
import NextIntlProvider from '@/context/NextIntlProvider'
import SessionProvider from '@/context/SessionContextProvider'
import StoreProvider from '@/context/StoreContextProvider'
import {
  Inder,
  Nova_Round as NovaRound,
  Roboto,
  Sacramento
} from 'next/font/google'
import 'styles/globals.css'

export const metadata = {
  title: {
    default: 'Papelería P de Papel',
    template: '%s'
  },
  description: 'Sitio web para papelería p de papel',
  applicationName: 'PdePapel',
  keywords: ['Papelería', 'Papelería P de Papel', 'Stationery', 'Kawaii'],
  authors: [
    { name: 'Christian Torres', url: 'https://github.com/chrisdev-ui' }
  ],
  creator: 'Paula Morales',
  icons: {
    icon: '/favicon.ico'
  }
}

const novaRound = NovaRound({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-nova-round'
})
const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-sacramento'
})
const inder = Inder({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-inder'
})

const roboto = Roboto({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export default function RootLayout({ children, session }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${novaRound.variable} ${sacramento.variable} ${inder.variable} font-sans`}
    >
      <head />
      <body>
        <ApolloProvider>
          <SessionProvider session={session}>
            <StoreProvider>
              <NextIntlProvider>
                <Header />
                {children}
                <Footer />
              </NextIntlProvider>
            </StoreProvider>
          </SessionProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
