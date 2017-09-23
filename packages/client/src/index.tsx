import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface,
} from 'react-apollo'

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: '/graphql',
		opts: {
			method: 'POST',
		},
	}),
})

ReactDOM.render(
	(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	),
	document.getElementById('root') as HTMLElement
)
registerServiceWorker()
