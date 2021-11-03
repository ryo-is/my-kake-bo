import type { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from '@infrastructures/firestore';
import { Log } from '@hooks/useDetailData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case 'GET':
      try {
        const query = req.query;
        const logs: Log[] = [];
        const ref = await firestore
          .collection('logs')
          .where('date', '==', query.date)
          .get();
        ref.docs.map((doc) => {
          const data = doc.data();
          logs.push({
            docID: doc.id,
            uuid: data.uuid,
            category: data.category,
            place: data.place,
            money: data.money,
            date: data.date,
          });
        });
        return res.status(200).json(logs);
      } catch (e) {
        return res.status(500).json(e);
      }
    case 'POST':
      try {
        const body = JSON.parse(req.body);
        await firestore.collection('logs').add(body);
        return res.status(200).json({});
      } catch (e) {
        return res.status(500).json(e);
      }
    case 'PUT':
      try {
        const body = JSON.parse(req.body) as Log;
        if (!body.docID) {
          return res.status(404).json({ message: 'docIDがありません' });
        }
        await firestore.collection('logs').doc(body.docID).update({
          category: body.category,
          place: body.place,
          money: body.money,
        });
        return res.status(200).json({});
      } catch (e) {
        return res.status(500).json(e);
      }
    default:
      return;
  }
}
