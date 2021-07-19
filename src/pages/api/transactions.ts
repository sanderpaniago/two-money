import type { NextApiRequest, NextApiResponse } from "next";

import db  from '../../firebase/admin'

export default async (req: NextApiRequest, res: NextApiResponse) => {    
    try {
        const  {userId } = req.query
        const transactionsDocs = await db.collection('transactions')
            .where('userId', '==', userId)
            .get();
        const transactions = []
        transactionsDocs.forEach(transaction => {
            transactions.push({
                ...transaction.data(),
                id: transaction.id,
                amount: Number(transaction.data().amount),
                createdAt:  new Date('2021-02-14 11:00:00')
            })
        });

        console.log(transactions)

        return res.status(200).json({
            transactions
        })
    } catch(err) {
        return res.json({ err})
    }
};
