import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ChannelController } from './channel.controller';


const router = express.Router();

router.post(
  '/create-channel',
  // validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ChannelController.createChannel
);

// router.get(
//   '/:id',
//   auth(
//     ENUM_USER_ROLE.SUPER_ADMIN,
//     ENUM_USER_ROLE.ADMIN,
//     ENUM_USER_ROLE.FACULTY
//   ),
//   AcademicFacultyController.getSingleFaculty
// );

// router.get(
//   '/',
//   // auth(
//   //   ENUM_USER_ROLE.SUPER_ADMIN,
//   //   ENUM_USER_ROLE.ADMIN,
//   //   ENUM_USER_ROLE.FACULTY
//   // ),
//   AcademicFacultyController.getAllFaculties
// );

// router.patch(
//   '/:id',
//   validateRequest(AcademicFacultyValidation.updatefacultyZodSchema),
//   auth(
//     ENUM_USER_ROLE.SUPER_ADMIN,
//     ENUM_USER_ROLE.ADMIN,
//     ENUM_USER_ROLE.FACULTY
//   ),
//   AcademicFacultyController.updateFaculty
// );

// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN),
//   AcademicFacultyController.deleteFaculty
// );

export const ChannelRoutes = router;