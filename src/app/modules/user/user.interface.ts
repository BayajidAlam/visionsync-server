import { Model, Types } from 'mongoose';
import { IVideo } from '../video/video.interface';
import { IChannel } from '../channel/channel.interface';

export type IUser = {
  name: string;
  email: string;
  role: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  video?: Types.ObjectId | IVideo;
  channel?: Types.ObjectId | IChannel;
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<
    Pick<IUser, 'email' | 'password' | 'role' | 'needsPasswordChange'>
  >;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
