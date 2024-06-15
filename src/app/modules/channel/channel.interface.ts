import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IChannel = {
  name: string;
  profilePicture: string;
  coverPhoto: string;
  subscribedCount: number;
  creatorId: Types.ObjectId | IUser;
};

export type ChannelModel = Model<IChannel, Record<string, unknown>>;

export type IChannelFilters = {
  name?: string;
  searchTerm?: string;
};
