# Connect to a graphql server using apollo client.

- https://www.apollographql.com/docs/react/get-started/

```javascript 

import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const App = () => {
  const [state, setstate] = useState({ data: { rates: [{ currency: '' }] } });

  const connectToClient = () => {
    const client = new ApolloClient({
      uri: 'https://48p1r2roz4.sse.codesandbox.io',
      cache: new InMemoryCache(),
    });

    console.log(client);

    client
      .query({
        query: gql`
          query GetRates {
            rates(currency: "NZD") {
              currency
              rate
            }
          }
        `,
      })
      .then((result) => {
        console.log('result', result);
        setstate({ data: result.data });
      });
  };

  return (
    <div>
      <p>working</p>
      <button onClick={connectToClient}>CONNECT AND FETCH RESULTS</button>

      <div>
        <h1>BRAZILIAN VS NZD</h1>
        {state.data?.rates?.filter(x=>x.currency == 'BRL').map(x=> <Currency rate={x}></Currency>)}
      </div>

      <div>
      <h1>OTHERS</h1>
        {state.data?.rates?.map((x) => (
          <Currency rate={x}></Currency>
        ))}
      </div>
    </div>
  );
};

const Currency = (props: any) => {
  return (
    <div>
      <div style={styles}>
        <p style={{ color: 'gold' }}>
          CURRENCY: {props.rate.currency} | RATE: {props.rate.rate}
        </p>
      </div>
    </div>
  );
};

const styles = {
  backgroundColor: 'black',
};

export default App;








```

# Another way using the Provider and useQuery hook

```javascript

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


```