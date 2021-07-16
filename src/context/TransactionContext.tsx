import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: string;
    createdAt: string;
    category: string;
}

type TransactionContextData = {
    transactions: Transaction[];
}

type TransactionProviderProps = {
    children: ReactNode
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({children}: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {
        api.get('/transactions')
            .then(response=> setTransactions(response.data.transactions))
    })

    return (
        <TransactionContext.Provider value={{
            transactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}