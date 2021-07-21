import { TransactionProvider } from "../hooks/useTransaction"
import {makeServer} from '../mock/mirage'
import { GlobalStyle } from "../styles/global"
if (process.env.NODE_ENV === 'production') {
    makeServer({ environment: "development" })
}

function MyApp({ Component, pageProps }) {
    return (
        <TransactionProvider>
            <Component {...pageProps} />
            <GlobalStyle />
        </TransactionProvider>
    )
}

export default MyApp