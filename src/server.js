import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routers/index.js';
import { env } from './utils/env.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { UPLOAD_DIR } from './constants/index.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('/api-docs', swaggerDocs());

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use(router); // Додаємо роутер до app як middleware
  // app.get('/students', async (req, res) => {
  //   const students = await getAllStudents();

  //   res.status(200).json({
  //     data: students,
  //   });
  // });

  // app.get('/students/:studentId', async (req, res, next) => {
  //   const { studentId } = req.params;
  //   const student = await getStudentById(studentId);

  //   // Відповідь, якщо контакт не знайдено
  //   if (!student) {
  //     res.status(404).json({
  //       message: 'Student not found',
  //     });
  //     return;
  //   }

  //   // Відповідь, якщо контакт знайдено
  //   res.status(200).json({
  //     data: student,
  //   });
  // });

  app.use('/uploads', express.static(UPLOAD_DIR));

  app.use('*', notFoundHandler);
  // app.use('*', (req, res, next) => {
  //   res.status(404).json({
  //     message: 'Not found',
  //   });
  // });

  app.use(errorHandler);
  // app.use((err, req, res, next) => {
  //   res.status(500).json({
  //     message: 'Something went wrong',
  //     error: err.message,
  //   });
  // });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
