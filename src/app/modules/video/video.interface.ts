// video interface
import { Model, Types } from 'mongoose';

export type IVideo = {
  title: string;
  url: string;
  tags: string[];
  category: string;
  videoDescription: string;
  thumbnail: string;
  viewCount: number;
  comments: string[];
  // channel: Types.ObjectId | IAcademicFaculty;
};

export type VideoModel = Model<IVideo, Record<string, unknown>>;

export type IVideoFilters = {
  title?: string;
  tags?: string[];
  category?: string;
  searchTerm?: string;
};