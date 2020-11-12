"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateNode = void 0;
const rich_text_plain_text_renderer_1 = require("@contentful/rich-text-plain-text-renderer");
const reading_time_1 = __importDefault(require("reading-time"));
exports.onCreateNode = async ({ node, loadNodeContent, actions: { createNodeField }, }) => {
    const { internal } = node;
    const { owner, mediaType } = internal;
    if (mediaType !== "text/richtext" || owner !== "gatsby-source-contentful") {
        return;
    }
    const doc = JSON.parse(await loadNodeContent(node));
    const text = rich_text_plain_text_renderer_1.documentToPlainTextString(doc);
    const { minutes } = reading_time_1.default(text);
    const value = Math.ceil(minutes) + 1;
    createNodeField({
        node,
        name: "readingTime",
        value,
    });
};
