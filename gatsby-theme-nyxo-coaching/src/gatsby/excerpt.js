"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateNode = void 0;
const reading_time_1 = __importDefault(require("reading-time"));
const rich_text_plain_text_renderer_1 = require("@contentful/rich-text-plain-text-renderer");
const onCreateNode = async ({ node, actions, }) => {
    const { internal } = node;
    const { owner, type } = internal;
    if (owner !== "gatsby-source-contentful") {
        return;
    }
    try {
        let text = "";
        if (type === "ContentfulLesson") {
            const { lessonContent } = node;
            if (typeof lessonContent !== "undefined") {
                text = rich_text_plain_text_renderer_1.documentToPlainTextString(JSON.parse(lessonContent.raw));
            }
            // if (typeof additionalInformation !== "undefined") {
            //   text += documentToPlainTextString(JSON.parse(additionalInformation.raw))
            // }
        }
        else if (type === "ContentfulWeek") {
            const { weekDescription } = node;
            if (typeof weekDescription !== "undefined") {
                text = rich_text_plain_text_renderer_1.documentToPlainTextString(JSON.parse(weekDescription.raw));
            }
        }
        else if (type === "ContentfulHabit") {
            const { description } = node;
            if (typeof description !== "undefined") {
                text = rich_text_plain_text_renderer_1.documentToPlainTextString(JSON.parse(description.raw));
            }
        }
        const { minutes } = reading_time_1.default(text);
        const value = Math.ceil(minutes) + 1; // Round up
        actions.createNodeField({
            node,
            name: "excerpt",
            value: text.slice(0, 140),
        });
        actions.createNodeField({
            node,
            name: "readingTime",
            value: value,
        });
    }
    catch (error) {
        console.warn(error);
    }
};
exports.onCreateNode = onCreateNode;
