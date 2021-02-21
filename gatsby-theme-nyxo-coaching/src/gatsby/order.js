"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateNode = void 0;
const onCreateNode = async ({ node, actions: { createNodeField }, }) => {
    const { internal } = node;
    const { owner } = internal;
    if (owner !== "gatsby-source-contentful") {
        return;
    }
    createNodeField({
        node,
        name: "order",
        value: Math.floor(Math.random() * 100 + 1),
    });
};
exports.onCreateNode = onCreateNode;
