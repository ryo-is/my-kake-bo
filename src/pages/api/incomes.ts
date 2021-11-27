import type { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from '@infrastructures/firestore';
import { Income } from '@store/incomes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      try {
        const { start, end } = req.query;
        const ref = await firestore
          .collection('incomes')
          .where('date', '>=', start)
          .where('date', '<=', end)
          .get();
        const incomes: Income[] = [];
        ref.docs.forEach((doc) => {
          const { label, value, date } = doc.data();
          incomes.push({
            docID: doc.id,
            label,
            value,
            date,
          });
        });
      } catch (e) {
        return res.status(500).json(e);
      }
    default:
      return res.status(405).json({ message: '' });
  }
}