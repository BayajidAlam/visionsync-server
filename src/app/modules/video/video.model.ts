import { Schema, model } from 'mongoose';
import { IVideo, VideoModel } from './video.interface';

export const VideoSchema = new Schema<IVideo, VideoModel>(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      required: true,
    },
    videoDescription: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      required: false,
    },
    // comments: {
    //   type: Number,
    //   required: false,
    // },
    channel: {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Video = model<IVideo, VideoModel>('Video', VideoSchema);
