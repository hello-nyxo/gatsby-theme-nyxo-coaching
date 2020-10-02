"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateNode = void 0;
const rich_text_plain_text_renderer_1 = require("@contentful/rich-text-plain-text-renderer");
exports.onCreateNode = async ({ node, loadNodeContent, actions, }) => {
    const { internal } = node;
    const { owner, mediaType } = internal;
    if (mediaType !== "text/richtext" || owner !== "gatsby-source-contentful") {
        return;
    }
    const doc = JSON.parse(await loadNodeContent(node));
    const text = rich_text_plain_text_renderer_1.documentToPlainTextString(doc);
    const result = text.slice(0, 140);
    actions.createNodeField({ node, name: "excerpt", value: result });
};
