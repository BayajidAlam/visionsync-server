// channel interface
import { Model } from 'mongoose';

export type IChannel = {
  name: string;
  profilePicture: string;
  coverPhoto: string;
  subscribedCount: number;
  // creatorId: Types.ObjectId | IAcademicFaculty;
};

export type ChannelModel = Model<IChannel, Record<string, unknown>>;

export type IChannelFilters = {
  name?: string;
  searchTerm?: string;
};
