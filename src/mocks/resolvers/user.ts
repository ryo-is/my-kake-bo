import { rest } from 'msw';
import { getUserResponse } from '@mocks/mockResponse/user';

export const getUserResolvers = () => {
  return [
    rest.get('/mock/user', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(getUserResponse()));
    }),
  ];
};
