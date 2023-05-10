import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import ApolloProvider from '@/context/ApolloContextProvider'
import NextIntlProvider from '@/context/NextIntlProvider'
import SessionProvider from '@/context/SessionContextProvider'
import StoreProvider from '@/context/StoreContextProvider'
import { Roboto } from 'next/font/google'
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

const roboto = Roboto({
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <head />
      <body>
        <div className="flex min-h-screen flex-col justify-between">
          <ApolloProvider>
            <SessionProvider session={session}>
              <StoreProvider>
                <NextIntlProvider>
                  <Header />
                  <MainContent>{children}</MainContent>
                  <Footer />
                </NextIntlProvider>
              </StoreProvider>
            </SessionProvider>
          </ApolloProvider>
        </div>
      </body>
    </html>
  )
}
