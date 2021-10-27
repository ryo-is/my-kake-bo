import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@infrastructures/db';

type Log = {
  uuid: string;
  category: string;
  place: string;
  money: number;
  date: string;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const logs: Log[] = [];
    const ref = await db.collection('logs').get();
    ref.docs.map((doc) => {
      const data = doc.data();
      logs.push({
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
}
