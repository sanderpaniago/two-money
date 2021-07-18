import type { NextApiRequest, NextApiResponse } from "next";

import db  from '../../firebase/admin'

export default async (req: NextApiRequest, res: NextApiResponse) => {    
    try {
        const transactionsDocs = await db.collection('transactions').get();
        const transactions = []
        transactionsDocs.forEach(transaction => {
            transactions.push({
                ...transaction.data(),
                id: transaction.id,
                amount: Number(transaction.data().amount),
                createdAt:  new Date('2021-02-14 11:00:00')
            })
        });

        return res.status(200).json({
            transactions
        })
    } catch(err) {
        return res.json({ err})
    }
};
