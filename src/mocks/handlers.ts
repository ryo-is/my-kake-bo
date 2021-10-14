import { getAuthResolvers } from './resolvers/auth';
import { getUserResolvers } from './resolvers/user';

export const handlers = [...getAuthResolvers(), ...getUserResolvers()];
