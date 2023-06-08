import MainContent from '@/components/MainContent'
import ApolloProvider from '@/context/ApolloContextProvider'
import NextIntlProvider from '@/context/NextIntlProvider'
import SessionProvider from '@/context/SessionContextProvider'
import StoreProvider from '@/context/StoreContextProvider'
import {
  Cairo,
  Goudy_Bookletter_1911 as GoudyBookletter1911,
  Pavanam,
  Roboto
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

// Titulos
const fontTitle = Cairo({
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  display: 'swap',
  variable: '--font-title'
})
// Subtitulos
const fontSubtitle = GoudyBookletter1911({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-subtitle'
})
// Textos
const fontText = Pavanam({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
  variable: '--font-text'
})
// Bancolombia
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
      className={`${roboto.variable} ${fontTitle.variable} ${fontSubtitle.variable} ${fontText.variable} font-sans`}
    >
      <head />
      <body>
        <ApolloProvider>
          <SessionProvider session={session}>
            <StoreProvider>
              <NextIntlProvider>
                <MainContent>{children}</MainContent>
              </NextIntlProvider>
            </StoreProvider>
          </SessionProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
