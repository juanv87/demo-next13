import Navigation from "./components/Navigation";
import '../styles/globals.css'
import ApolloProviderWrapper from "./ApolloProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ApolloProviderWrapper>
          <Navigation />
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  )
}
