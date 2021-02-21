"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalizedPath = void 0;
const getLocalizedPath = (path = "/", locale) => {
    switch (locale) {
        case "fi-FI":
            return `/fi${path}`;
        case "en-US":
            return `${path}`;
        default:
            return `${path}`;
    }
};
exports.getLocalizedPath = getLocalizedPath;
