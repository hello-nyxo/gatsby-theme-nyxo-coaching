"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPages = void 0;
const lodash_1 = require("lodash");
const path_1 = __importDefault(require("path"));
const queries_1 = require("../contentful/queries");
const i18n_1 = require("../helpers/i18n");
const templatesDirectory = path_1.default.resolve(__dirname, `../templates`);
const tagTemplate = path_1.default.resolve(templatesDirectory, `tag.tsx`);
const lessonTemplate = path_1.default.resolve(templatesDirectory, `lesson.tsx`);
const weekTemplate = path_1.default.resolve(templatesDirectory, `week.tsx`);
const habitTemplate = path_1.default.resolve(templatesDirectory, `habit.tsx`);
const questionnaireTemplate = path_1.default.resolve(templatesDirectory, `questionnaire.tsx`);
const authorTemplate = path_1.default.resolve(templatesDirectory, `author.tsx`);
const createPages = async ({ graphql, actions, }) => {
    const { createPage } = actions;
    const { data: { allContentfulWeek: { nodes: weeks }, allContentfulLesson: { nodes: lessons }, allContentfulHabit: { nodes: habits }, allContentfulAuthor: { nodes: authors }, allContentfulQuestionnaire: { nodes: questionnaires }, contentfulTagsQuery: { group: contentfulTags }, }, } = (await graphql(queries_1.contentfulData));
    const allTags = [
        ...new Set([...contentfulTags.map((tag) => tag.fieldValue)]),
    ];
    allTags.forEach((tag) => {
        if (typeof tag !== undefined) {
            createPage({
                path: `/tags/${lodash_1.kebabCase(tag)}/`,
                component: tagTemplate,
                context: {
                    locale: "en-US",
                    tag: tag,
                },
            });
        }
    });
    weeks.forEach((week, index) => {
        const previousWeek = index === weeks.length - 1 ? null : weeks[index + 1].slug;
        const nextWeek = index === 0 ? null : weeks[index - 1].slug;
        createPage({
            path: i18n_1.getLocalizedPath(`/week/${week.slug}`, week.node_locale),
            component: weekTemplate,
            context: {
                slug: week.slug,
                locale: week.node_locale,
                next: nextWeek,
                previous: previousWeek,
            },
        });
    });
    lessons.forEach((lesson, index) => {
        const previousLesson = index === lessons.length - 1 ? null : lessons[index + 1].slug;
        const nextLesson = index === 0 ? null : lessons[index - 1].slug;
        createPage({
            path: i18n_1.getLocalizedPath(`/lesson/${lesson.slug}`, lesson.node_locale),
            component: lessonTemplate,
            context: {
                pathRegex: `/.*${lesson.slug}.*/`,
                slug: lesson.slug,
                locale: lesson.node_locale,
                previous: previousLesson,
                next: nextLesson,
            },
        });
    });
    habits.forEach((habit, index) => {
        const previousHabit = index === habits.length - 1 ? null : habits[index + 1].slug;
        const nextHabit = index === 0 ? null : habits[index - 1].slug;
        createPage({
            path: i18n_1.getLocalizedPath(`/habit/${habit.slug}`, habit.node_locale),
            component: habitTemplate,
            context: {
                locale: habit.node_locale,
                slug: habit.slug,
                next: nextHabit,
                previous: previousHabit,
            },
        });
    });
    questionnaires.forEach((questionnaire, index) => {
        const previousQuestionnaire = index === lessons.length - 1 ? null : lessons[index + 1].slug;
        const nextQuestionnaire = index === 0 ? null : lessons[index - 1].slug;
        createPage({
            path: i18n_1.getLocalizedPath(`/questionnaire/${questionnaire.slug}`, questionnaire.node_locale),
            component: questionnaireTemplate,
            context: {
                locale: questionnaire.node_locale,
                slug: questionnaire.slug,
                next: nextQuestionnaire,
                previous: previousQuestionnaire,
            },
        });
    });
    authors.forEach((author) => {
        const scholar = author.slug ? author.slug.replace(/-/g, " ") : "no";
        createPage({
            path: i18n_1.getLocalizedPath(`/author/${author.slug}`, author.node_locale),
            component: authorTemplate,
            context: {
                slug: author.slug,
                locale: author.node_locale,
                scholar: scholar,
            },
        });
    });
    return null;
};
exports.createPages = createPages;
