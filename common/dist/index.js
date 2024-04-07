"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
// NOTE: Sign up
exports.signUpInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().min(1, { message: "Name is Required" }),
});
// NOTE: Sign In
exports.signInInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().min(1, { message: "Name is Required" }),
});
// NOTE: Create Blog
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
// NOTE: Update Blog
exports.updateBlogInput = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
