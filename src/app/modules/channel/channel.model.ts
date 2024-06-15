// channel model
import { Schema, model } from 'mongoose';
import { ChannelModel, IChannel } from './channel.interface';

export const ChannelSchema = new Schema<IChannel, ChannelModel>(
  {
    name: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    coverPhoto: {
      type: String,
      required: true,
    },
    subscribedCount: {
      type: Number,
      defaultValue: 0,
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Channel = model<IChannel, ChannelModel>('Channel', ChannelSchema);
