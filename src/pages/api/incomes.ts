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
        return res.status(200).json({ incomes });
      } catch (e) {
        return res.status(500).json(e);
      }
    case 'POST':
      try {
        const body = JSON.parse(req.body);
        await firestore.collection('incomes').add(body);
        return res.status(200).json({});
      } catch (e) {
        return res.status(500).json(e);
      }
    case 'PUT':
      try {
        const body = JSON.parse(req.body) as Income;
        if (!body.docID) {
          return res.status(404).json({ message: 'docIDがありません' });
        }
        await firestore.collection('incomes').doc(body.docID).update({
          label: body.label,
          value: body.value,
        });
        return res.status(200).json({});
      } catch (e) {
        return res.status(500).json(e);
      }
    case 'DELETE':
      try {
        const { docID } = req.query;
        if (!docID) {
          return res.status(404).json({ message: 'docIDがありません' });
        }
        await firestore.collection('incomes').doc(String(docID)).delete();
        return res.status(200).json({});
      } catch (e) {
        return res.status(500).json(e);
      }
    default:
      return res.status(405).json({ message: '' });
  }
}
