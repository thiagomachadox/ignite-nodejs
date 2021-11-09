import { Request, Response } from "express";
import createCourseService from "./create-course-service";

export function createCourse(request: Request, response: Response) {
  createCourseService.execute({
    name: "NodeJS",
    educator: "Thiago",
  });

  createCourseService.execute({
    name: "React",
    educator: "Thiago",
    duration: 5,
  });

  return response.send();
}
