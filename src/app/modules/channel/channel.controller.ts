import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IChannel } from './channel.interface';
import { ChannelService } from './channel.service';

const createChannel = catchAsync(async (req: Request, res: Response) => {
  const { ...channelData } = req.body;
  const result = await ChannelService.createChannel(channelData);
  sendResponse<IChannel>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Channel created successfully',
    data: result,
  });
});

// const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await AcademicFacultyService.getSingleFaculty(id);

//   sendResponse<IAcademicFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic faculty fetched successfully',
//     data: result,
//   });
// });

// const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, academicFacultyFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await AcademicFacultyService.getAllFaculties(
//     filters,
//     paginationOptions
//   );

//   sendResponse<IAcademicFaculty[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic faculties fetched successfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const updateFaculty = catchAsync(
//   catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const updatedData = req.body;

//     const result = await AcademicFacultyService.updateFaculty(id, updatedData);

//     sendResponse<IAcademicFaculty>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Academic faculty updated successfully',
//       data: result,
//     });
//   })
// );

// const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await AcademicFacultyService.deleteByIdFromDB(id);

//   sendResponse<IAcademicFaculty>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic faculty deleted successfully',
//     data: result,
//   });
// });

export const ChannelController = {
  createChannel,
  // getSingleFaculty,
  // getAllFaculties,
  // updateFaculty,
  // deleteFaculty,
};
