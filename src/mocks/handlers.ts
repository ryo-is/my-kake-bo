import { rest } from 'msw';
import { getUser } from './mockResponse/user';

export const handlers = [
  rest.post('/mock/login', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get('/mock/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getUser()));
  }),
];
