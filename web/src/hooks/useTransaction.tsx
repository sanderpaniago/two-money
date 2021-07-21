import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import firebase from '../firebase/clientApp'

import { useAuthState } from 'react-firebase-hooks/auth'

type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: string;
    createdAt: string;
    category: string;
    userId: string;
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
    const [user, loading, error] = useAuthState(firebase.auth())


    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {
        if(!user) {
            return;
        }
        
        api.get('/transactions', {
            params: {
                userId: user.uid
            }
        })
            .then(response=> setTransactions(response.data.transactions))
    }, [user])

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