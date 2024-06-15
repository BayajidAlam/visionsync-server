import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudent = async (user: IUser): Promise<IUser | null> => {
  // If password is not given,set default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }
  // set role
  user.role = 'user';

  const createdUser = await User.create(user);
  console.log(createdUser);
  return createdUser;
};

export const UserService = {
  createStudent,
};
