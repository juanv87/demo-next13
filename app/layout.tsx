import Header from "./components/ui/Header";
import '../styles/globals.css'
import ApolloProviderWrapper from "./ApolloProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ApolloProviderWrapper>
          <Header />
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  )
}
