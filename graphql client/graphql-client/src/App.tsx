import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
  ApolloProvider,
} from '@apollo/client';
import React from 'react';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

interface Data {
  rates: [{ currency: string; rate: string }];
}

function App() {
  const connectToClient = () => {
    return new ApolloClient({
      uri: 'https://48p1r2roz4.sse.codesandbox.io/graphql',
      cache: new InMemoryCache(),
    });
  };

  return (
    <ApolloProvider client={connectToClient()}>
      <AnotherComponent></AnotherComponent>
    </ApolloProvider>
  );
}
export default App;

const AnotherComponent = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) console.log(data);

  return (
    <div>
      {(data as Data).rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
    </div>
  );
};
