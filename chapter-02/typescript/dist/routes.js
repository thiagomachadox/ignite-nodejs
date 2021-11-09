"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var create_course_service_1 = __importDefault(require("./create-course-service"));
function createCourse(request, response) {
    create_course_service_1.default.execute({
        name: "NodeJS",
        educator: "Thiago",
    });
    create_course_service_1.default.execute({
        name: "React",
        educator: "Thiago",
        duration: 5,
    });
    return response.send();
}
exports.createCourse = createCourse;
