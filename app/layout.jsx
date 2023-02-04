import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import StoreProvider from '@/context/StoreContextProvider'
import 'styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex min-h-screen flex-col justify-between">
          <StoreProvider>
            <Header />
            <MainContent>{children}</MainContent>
            <Footer />
          </StoreProvider>
        </div>
      </body>
    </html>
  )
}
