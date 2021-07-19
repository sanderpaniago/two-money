import type { NextApiRequest, NextApiResponse } from 'next'

import db  from '../../firebase/admin'


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {userId, title, amount, type, category, createdAt} = req.body

        const transactionRef = db.collection('transactions')

        const transaction = await transactionRef.add({
            userId,
            title,
            amount,
            type,
            category,
            createdAt
        })

        const transactionDoc = await transaction.get()
        const transactionData = {
            ...transactionDoc.data(),
            id: transactionDoc.id
        }
        return res.status(201).json({transaction: transactionData})

    } catch (err) {
        console.log(err)
        return res.status(400).json({msg: 'deu tudo errado'})
    }
}