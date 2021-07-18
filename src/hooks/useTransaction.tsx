import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: string;
    createdAt: string;
    category: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionContextData = {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionProviderProps = {
    children: ReactNode
}

const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
)

export function TransactionProvider({children}: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {
        api.get('/transactions')
            .then(response=> setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const { data } = await api.post('/newTransactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = data

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionContext.Provider value={{
            transactions,
            createTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    const context = useContext(TransactionContext)

    return context
}