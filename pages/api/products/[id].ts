import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const { id } = req.query

    const product = products.find(product => product.id === Number(id))

    if (!product) {
        res.status(404).json({ error: 'Produto não encontrado' })
        return
    }

    res.status(200).json(product)
}