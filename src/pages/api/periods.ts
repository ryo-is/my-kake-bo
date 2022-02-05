import type { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from '@infrastructures/firestore';
import { Period } from '@recoil/periodState';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const collection = 'periods';
  const method = req.method;
  switch (method) {
    case 'GET':
      try {
        const ref = await firestore.collection(collection).get();
        const periods: Period[] = ref.docs.map((doc) => {
          const { name, startDate, endDate } = doc.data();
          return {
            docID: doc.id,
            name,
            startDate,
            endDate,
          };
        });
        return res.status(200).json({ periods });
      } catch (e) {
        return res.status(500).json(e);
      }
    default:
      return res.status(405).json({ message: '' });
  }
}
