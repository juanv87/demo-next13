import Navigation from "./components/Navigation";
import '../styles/globals.css'
import ApolloProviderWrapper from "./ApolloProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Demo NextJs 13</title>
      </head>
      <body>
        <ApolloProviderWrapper>
          <Navigation />
          {children}
        </ApolloProviderWrapper>
      </body>
    </html>
  )
}
