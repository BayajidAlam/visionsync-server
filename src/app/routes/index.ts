import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ChannelRoutes } from '../modules/channel/channel.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/channels',
    route: ChannelRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
