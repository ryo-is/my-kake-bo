import { rest } from 'msw';

export const getAuthResolvers = () => {
  return [
    rest.post('/mock/login', (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];
};
