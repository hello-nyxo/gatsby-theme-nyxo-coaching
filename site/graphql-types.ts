export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurhashSharp = {
  base64Image?: Maybe<Scalars['String']>;
};

export type BlurhashSharpFilterInput = {
  base64Image?: Maybe<StringQueryOperatorInput>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAnswer = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  question?: Maybe<Array<Maybe<ContentfulQuestion>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnswerSys>;
  fields?: Maybe<ContentfulAnswerFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAnswerCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerEdge>;
  nodes: Array<ContentfulAnswer>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnswerGroupConnection>;
};


export type ContentfulAnswerConnectionDistinctArgs = {
  field: ContentfulAnswerFieldsEnum;
};


export type ContentfulAnswerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnswerFieldsEnum;
};

export type ContentfulAnswerEdge = {
  next?: Maybe<ContentfulAnswer>;
  node: ContentfulAnswer;
  previous?: Maybe<ContentfulAnswer>;
};

export type ContentfulAnswerFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulAnswerFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'score'
  | 'question'
  | 'question___contentful_id'
  | 'question___id'
  | 'question___node_locale'
  | 'question___title'
  | 'question___type'
  | 'question___answers'
  | 'question___answers___contentful_id'
  | 'question___answers___id'
  | 'question___answers___node_locale'
  | 'question___answers___title'
  | 'question___answers___score'
  | 'question___answers___question'
  | 'question___answers___question___contentful_id'
  | 'question___answers___question___id'
  | 'question___answers___question___node_locale'
  | 'question___answers___question___title'
  | 'question___answers___question___type'
  | 'question___answers___question___answers'
  | 'question___answers___question___questionnaire'
  | 'question___answers___question___spaceId'
  | 'question___answers___question___createdAt'
  | 'question___answers___question___updatedAt'
  | 'question___answers___question___childrenContentfulQuestionQuestionTextNode'
  | 'question___answers___question___children'
  | 'question___answers___spaceId'
  | 'question___answers___createdAt'
  | 'question___answers___updatedAt'
  | 'question___answers___sys___type'
  | 'question___answers___sys___revision'
  | 'question___answers___fields___excerpt'
  | 'question___answers___fields___readingTime'
  | 'question___answers___fields___language'
  | 'question___answers___fields___order'
  | 'question___answers___parent___id'
  | 'question___answers___parent___children'
  | 'question___answers___children'
  | 'question___answers___children___id'
  | 'question___answers___children___children'
  | 'question___answers___internal___content'
  | 'question___answers___internal___contentDigest'
  | 'question___answers___internal___description'
  | 'question___answers___internal___fieldOwners'
  | 'question___answers___internal___ignoreType'
  | 'question___answers___internal___mediaType'
  | 'question___answers___internal___owner'
  | 'question___answers___internal___type'
  | 'question___questionnaire'
  | 'question___questionnaire___contentful_id'
  | 'question___questionnaire___id'
  | 'question___questionnaire___node_locale'
  | 'question___questionnaire___title'
  | 'question___questionnaire___slug'
  | 'question___questionnaire___description___raw'
  | 'question___questionnaire___questions'
  | 'question___questionnaire___questions___contentful_id'
  | 'question___questionnaire___questions___id'
  | 'question___questionnaire___questions___node_locale'
  | 'question___questionnaire___questions___title'
  | 'question___questionnaire___questions___type'
  | 'question___questionnaire___questions___answers'
  | 'question___questionnaire___questions___questionnaire'
  | 'question___questionnaire___questions___spaceId'
  | 'question___questionnaire___questions___createdAt'
  | 'question___questionnaire___questions___updatedAt'
  | 'question___questionnaire___questions___childrenContentfulQuestionQuestionTextNode'
  | 'question___questionnaire___questions___children'
  | 'question___questionnaire___results'
  | 'question___questionnaire___results___contentful_id'
  | 'question___questionnaire___results___id'
  | 'question___questionnaire___results___node_locale'
  | 'question___questionnaire___results___title'
  | 'question___questionnaire___results___questionnaire'
  | 'question___questionnaire___results___spaceId'
  | 'question___questionnaire___results___createdAt'
  | 'question___questionnaire___results___updatedAt'
  | 'question___questionnaire___results___childrenContentfulResultScoreRangeJsonNode'
  | 'question___questionnaire___results___children'
  | 'question___questionnaire___spaceId'
  | 'question___questionnaire___createdAt'
  | 'question___questionnaire___updatedAt'
  | 'question___questionnaire___sys___type'
  | 'question___questionnaire___sys___revision'
  | 'question___questionnaire___fields___excerpt'
  | 'question___questionnaire___fields___readingTime'
  | 'question___questionnaire___fields___language'
  | 'question___questionnaire___fields___order'
  | 'question___questionnaire___parent___id'
  | 'question___questionnaire___parent___children'
  | 'question___questionnaire___children'
  | 'question___questionnaire___children___id'
  | 'question___questionnaire___children___children'
  | 'question___questionnaire___internal___content'
  | 'question___questionnaire___internal___contentDigest'
  | 'question___questionnaire___internal___description'
  | 'question___questionnaire___internal___fieldOwners'
  | 'question___questionnaire___internal___ignoreType'
  | 'question___questionnaire___internal___mediaType'
  | 'question___questionnaire___internal___owner'
  | 'question___questionnaire___internal___type'
  | 'question___question___id'
  | 'question___question___parent___id'
  | 'question___question___parent___children'
  | 'question___question___children'
  | 'question___question___children___id'
  | 'question___question___children___children'
  | 'question___question___internal___content'
  | 'question___question___internal___contentDigest'
  | 'question___question___internal___description'
  | 'question___question___internal___fieldOwners'
  | 'question___question___internal___ignoreType'
  | 'question___question___internal___mediaType'
  | 'question___question___internal___owner'
  | 'question___question___internal___type'
  | 'question___question___question'
  | 'question___question___sys___type'
  | 'question___question___fields___excerpt'
  | 'question___question___fields___readingTime'
  | 'question___question___fields___language'
  | 'question___question___fields___order'
  | 'question___spaceId'
  | 'question___createdAt'
  | 'question___updatedAt'
  | 'question___sys___type'
  | 'question___sys___revision'
  | 'question___fields___excerpt'
  | 'question___fields___readingTime'
  | 'question___fields___language'
  | 'question___fields___order'
  | 'question___childrenContentfulQuestionQuestionTextNode'
  | 'question___childrenContentfulQuestionQuestionTextNode___id'
  | 'question___childrenContentfulQuestionQuestionTextNode___parent___id'
  | 'question___childrenContentfulQuestionQuestionTextNode___parent___children'
  | 'question___childrenContentfulQuestionQuestionTextNode___children'
  | 'question___childrenContentfulQuestionQuestionTextNode___children___id'
  | 'question___childrenContentfulQuestionQuestionTextNode___children___children'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___content'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___description'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___owner'
  | 'question___childrenContentfulQuestionQuestionTextNode___internal___type'
  | 'question___childrenContentfulQuestionQuestionTextNode___question'
  | 'question___childrenContentfulQuestionQuestionTextNode___sys___type'
  | 'question___childrenContentfulQuestionQuestionTextNode___fields___excerpt'
  | 'question___childrenContentfulQuestionQuestionTextNode___fields___readingTime'
  | 'question___childrenContentfulQuestionQuestionTextNode___fields___language'
  | 'question___childrenContentfulQuestionQuestionTextNode___fields___order'
  | 'question___childContentfulQuestionQuestionTextNode___id'
  | 'question___childContentfulQuestionQuestionTextNode___parent___id'
  | 'question___childContentfulQuestionQuestionTextNode___parent___children'
  | 'question___childContentfulQuestionQuestionTextNode___children'
  | 'question___childContentfulQuestionQuestionTextNode___children___id'
  | 'question___childContentfulQuestionQuestionTextNode___children___children'
  | 'question___childContentfulQuestionQuestionTextNode___internal___content'
  | 'question___childContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'question___childContentfulQuestionQuestionTextNode___internal___description'
  | 'question___childContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'question___childContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'question___childContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'question___childContentfulQuestionQuestionTextNode___internal___owner'
  | 'question___childContentfulQuestionQuestionTextNode___internal___type'
  | 'question___childContentfulQuestionQuestionTextNode___question'
  | 'question___childContentfulQuestionQuestionTextNode___sys___type'
  | 'question___childContentfulQuestionQuestionTextNode___fields___excerpt'
  | 'question___childContentfulQuestionQuestionTextNode___fields___readingTime'
  | 'question___childContentfulQuestionQuestionTextNode___fields___language'
  | 'question___childContentfulQuestionQuestionTextNode___fields___order'
  | 'question___parent___id'
  | 'question___parent___parent___id'
  | 'question___parent___parent___children'
  | 'question___parent___children'
  | 'question___parent___children___id'
  | 'question___parent___children___children'
  | 'question___parent___internal___content'
  | 'question___parent___internal___contentDigest'
  | 'question___parent___internal___description'
  | 'question___parent___internal___fieldOwners'
  | 'question___parent___internal___ignoreType'
  | 'question___parent___internal___mediaType'
  | 'question___parent___internal___owner'
  | 'question___parent___internal___type'
  | 'question___children'
  | 'question___children___id'
  | 'question___children___parent___id'
  | 'question___children___parent___children'
  | 'question___children___children'
  | 'question___children___children___id'
  | 'question___children___children___children'
  | 'question___children___internal___content'
  | 'question___children___internal___contentDigest'
  | 'question___children___internal___description'
  | 'question___children___internal___fieldOwners'
  | 'question___children___internal___ignoreType'
  | 'question___children___internal___mediaType'
  | 'question___children___internal___owner'
  | 'question___children___internal___type'
  | 'question___internal___content'
  | 'question___internal___contentDigest'
  | 'question___internal___description'
  | 'question___internal___fieldOwners'
  | 'question___internal___ignoreType'
  | 'question___internal___mediaType'
  | 'question___internal___owner'
  | 'question___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAnswerFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAnswerFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  score?: Maybe<IntQueryOperatorInput>;
  question?: Maybe<ContentfulQuestionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSysFilterInput>;
  fields?: Maybe<ContentfulAnswerFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAnswerFilterListInput = {
  elemMatch?: Maybe<ContentfulAnswerFilterInput>;
};

export type ContentfulAnswerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerEdge>;
  nodes: Array<ContentfulAnswer>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSlider = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  isSlider?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnswerSliderSys>;
  fields?: Maybe<ContentfulAnswerSliderFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAnswerSliderCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerSliderUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSliderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerSliderEdge>;
  nodes: Array<ContentfulAnswerSlider>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnswerSliderGroupConnection>;
};


export type ContentfulAnswerSliderConnectionDistinctArgs = {
  field: ContentfulAnswerSliderFieldsEnum;
};


export type ContentfulAnswerSliderConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnswerSliderFieldsEnum;
};

export type ContentfulAnswerSliderEdge = {
  next?: Maybe<ContentfulAnswerSlider>;
  node: ContentfulAnswerSlider;
  previous?: Maybe<ContentfulAnswerSlider>;
};

export type ContentfulAnswerSliderFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulAnswerSliderFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'isSlider'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAnswerSliderFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAnswerSliderFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  isSlider?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSliderSysFilterInput>;
  fields?: Maybe<ContentfulAnswerSliderFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAnswerSliderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerSliderEdge>;
  nodes: Array<ContentfulAnswerSlider>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSliderSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnswerSliderFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnswerSliderSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnswerSliderSysContentType>;
};

export type ContentfulAnswerSliderSysContentType = {
  sys?: Maybe<ContentfulAnswerSliderSysContentTypeSys>;
};

export type ContentfulAnswerSliderSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAnswerSliderSysContentTypeSysFilterInput>;
};

export type ContentfulAnswerSliderSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSliderSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerSliderSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAnswerSliderSysContentTypeFilterInput>;
};

export type ContentfulAnswerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnswerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnswerSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnswerSysContentType>;
};

export type ContentfulAnswerSysContentType = {
  sys?: Maybe<ContentfulAnswerSysContentTypeSys>;
};

export type ContentfulAnswerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAnswerSysContentTypeSysFilterInput>;
};

export type ContentfulAnswerSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAnswerSysContentTypeFilterInput>;
};

export type ContentfulAnswerTimePicker = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  isTimePicker?: Maybe<Scalars['Boolean']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAnswerTimePickerSys>;
  fields?: Maybe<ContentfulAnswerTimePickerFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAnswerTimePickerCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAnswerTimePickerUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerTimePickerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerTimePickerEdge>;
  nodes: Array<ContentfulAnswerTimePicker>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAnswerTimePickerGroupConnection>;
};


export type ContentfulAnswerTimePickerConnectionDistinctArgs = {
  field: ContentfulAnswerTimePickerFieldsEnum;
};


export type ContentfulAnswerTimePickerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAnswerTimePickerFieldsEnum;
};

export type ContentfulAnswerTimePickerEdge = {
  next?: Maybe<ContentfulAnswerTimePicker>;
  node: ContentfulAnswerTimePicker;
  previous?: Maybe<ContentfulAnswerTimePicker>;
};

export type ContentfulAnswerTimePickerFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulAnswerTimePickerFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'isTimePicker'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAnswerTimePickerFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAnswerTimePickerFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  isTimePicker?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerTimePickerSysFilterInput>;
  fields?: Maybe<ContentfulAnswerTimePickerFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAnswerTimePickerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAnswerTimePickerEdge>;
  nodes: Array<ContentfulAnswerTimePicker>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerTimePickerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAnswerTimePickerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAnswerTimePickerSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAnswerTimePickerSysContentType>;
};

export type ContentfulAnswerTimePickerSysContentType = {
  sys?: Maybe<ContentfulAnswerTimePickerSysContentTypeSys>;
};

export type ContentfulAnswerTimePickerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAnswerTimePickerSysContentTypeSysFilterInput>;
};

export type ContentfulAnswerTimePickerSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAnswerTimePickerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAnswerTimePickerSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAnswerTimePickerSysContentTypeFilterInput>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fields?: Maybe<ContentfulAssetFields>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  gatsbyImageData: Scalars['JSON'];
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'gatsbyImageData'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAssetFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fields?: Maybe<ContentfulAssetFieldsFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  credentials?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulAuthorDescription>;
  avatar?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSys>;
  fields?: Maybe<ContentfulAuthorFields>;
  lesson?: Maybe<Array<Maybe<ContentfulLesson>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAuthorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorGroupConnection>;
};


export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


export type ContentfulAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorDescription = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorEdge = {
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export type ContentfulAuthorFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulAuthorFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'slug'
  | 'name'
  | 'credentials'
  | 'description___raw'
  | 'avatar___contentful_id'
  | 'avatar___id'
  | 'avatar___spaceId'
  | 'avatar___createdAt'
  | 'avatar___updatedAt'
  | 'avatar___file___url'
  | 'avatar___file___details___size'
  | 'avatar___file___fileName'
  | 'avatar___file___contentType'
  | 'avatar___title'
  | 'avatar___description'
  | 'avatar___node_locale'
  | 'avatar___sys___type'
  | 'avatar___sys___revision'
  | 'avatar___fields___excerpt'
  | 'avatar___fields___readingTime'
  | 'avatar___fields___language'
  | 'avatar___fields___order'
  | 'avatar___fixed___base64'
  | 'avatar___fixed___tracedSVG'
  | 'avatar___fixed___aspectRatio'
  | 'avatar___fixed___width'
  | 'avatar___fixed___height'
  | 'avatar___fixed___src'
  | 'avatar___fixed___srcSet'
  | 'avatar___fixed___srcWebp'
  | 'avatar___fixed___srcSetWebp'
  | 'avatar___resolutions___base64'
  | 'avatar___resolutions___tracedSVG'
  | 'avatar___resolutions___aspectRatio'
  | 'avatar___resolutions___width'
  | 'avatar___resolutions___height'
  | 'avatar___resolutions___src'
  | 'avatar___resolutions___srcSet'
  | 'avatar___resolutions___srcWebp'
  | 'avatar___resolutions___srcSetWebp'
  | 'avatar___fluid___base64'
  | 'avatar___fluid___tracedSVG'
  | 'avatar___fluid___aspectRatio'
  | 'avatar___fluid___src'
  | 'avatar___fluid___srcSet'
  | 'avatar___fluid___srcWebp'
  | 'avatar___fluid___srcSetWebp'
  | 'avatar___fluid___sizes'
  | 'avatar___sizes___base64'
  | 'avatar___sizes___tracedSVG'
  | 'avatar___sizes___aspectRatio'
  | 'avatar___sizes___src'
  | 'avatar___sizes___srcSet'
  | 'avatar___sizes___srcWebp'
  | 'avatar___sizes___srcSetWebp'
  | 'avatar___sizes___sizes'
  | 'avatar___gatsbyImageData'
  | 'avatar___resize___base64'
  | 'avatar___resize___tracedSVG'
  | 'avatar___resize___src'
  | 'avatar___resize___width'
  | 'avatar___resize___height'
  | 'avatar___resize___aspectRatio'
  | 'avatar___parent___id'
  | 'avatar___parent___parent___id'
  | 'avatar___parent___parent___children'
  | 'avatar___parent___children'
  | 'avatar___parent___children___id'
  | 'avatar___parent___children___children'
  | 'avatar___parent___internal___content'
  | 'avatar___parent___internal___contentDigest'
  | 'avatar___parent___internal___description'
  | 'avatar___parent___internal___fieldOwners'
  | 'avatar___parent___internal___ignoreType'
  | 'avatar___parent___internal___mediaType'
  | 'avatar___parent___internal___owner'
  | 'avatar___parent___internal___type'
  | 'avatar___children'
  | 'avatar___children___id'
  | 'avatar___children___parent___id'
  | 'avatar___children___parent___children'
  | 'avatar___children___children'
  | 'avatar___children___children___id'
  | 'avatar___children___children___children'
  | 'avatar___children___internal___content'
  | 'avatar___children___internal___contentDigest'
  | 'avatar___children___internal___description'
  | 'avatar___children___internal___fieldOwners'
  | 'avatar___children___internal___ignoreType'
  | 'avatar___children___internal___mediaType'
  | 'avatar___children___internal___owner'
  | 'avatar___children___internal___type'
  | 'avatar___internal___content'
  | 'avatar___internal___contentDigest'
  | 'avatar___internal___description'
  | 'avatar___internal___fieldOwners'
  | 'avatar___internal___ignoreType'
  | 'avatar___internal___mediaType'
  | 'avatar___internal___owner'
  | 'avatar___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'lesson'
  | 'lesson___contentful_id'
  | 'lesson___id'
  | 'lesson___node_locale'
  | 'lesson___lessonName'
  | 'lesson___slug'
  | 'lesson___keywords'
  | 'lesson___author'
  | 'lesson___lessonContent___raw'
  | 'lesson___lessonContent___references'
  | 'lesson___lessonContent___references___contentful_id'
  | 'lesson___lessonContent___references___id'
  | 'lesson___lessonContent___references___spaceId'
  | 'lesson___lessonContent___references___createdAt'
  | 'lesson___lessonContent___references___updatedAt'
  | 'lesson___lessonContent___references___title'
  | 'lesson___lessonContent___references___description'
  | 'lesson___lessonContent___references___node_locale'
  | 'lesson___lessonContent___references___gatsbyImageData'
  | 'lesson___lessonContent___references___children'
  | 'lesson___additionalInformation___raw'
  | 'lesson___stage'
  | 'lesson___authorCard'
  | 'lesson___authorCard___contentful_id'
  | 'lesson___authorCard___id'
  | 'lesson___authorCard___node_locale'
  | 'lesson___authorCard___slug'
  | 'lesson___authorCard___name'
  | 'lesson___authorCard___credentials'
  | 'lesson___authorCard___description___raw'
  | 'lesson___authorCard___avatar___contentful_id'
  | 'lesson___authorCard___avatar___id'
  | 'lesson___authorCard___avatar___spaceId'
  | 'lesson___authorCard___avatar___createdAt'
  | 'lesson___authorCard___avatar___updatedAt'
  | 'lesson___authorCard___avatar___title'
  | 'lesson___authorCard___avatar___description'
  | 'lesson___authorCard___avatar___node_locale'
  | 'lesson___authorCard___avatar___gatsbyImageData'
  | 'lesson___authorCard___avatar___children'
  | 'lesson___authorCard___spaceId'
  | 'lesson___authorCard___createdAt'
  | 'lesson___authorCard___updatedAt'
  | 'lesson___authorCard___sys___type'
  | 'lesson___authorCard___sys___revision'
  | 'lesson___authorCard___fields___excerpt'
  | 'lesson___authorCard___fields___readingTime'
  | 'lesson___authorCard___fields___language'
  | 'lesson___authorCard___fields___order'
  | 'lesson___authorCard___lesson'
  | 'lesson___authorCard___lesson___contentful_id'
  | 'lesson___authorCard___lesson___id'
  | 'lesson___authorCard___lesson___node_locale'
  | 'lesson___authorCard___lesson___lessonName'
  | 'lesson___authorCard___lesson___slug'
  | 'lesson___authorCard___lesson___keywords'
  | 'lesson___authorCard___lesson___author'
  | 'lesson___authorCard___lesson___stage'
  | 'lesson___authorCard___lesson___authorCard'
  | 'lesson___authorCard___lesson___habit'
  | 'lesson___authorCard___lesson___week'
  | 'lesson___authorCard___lesson___spaceId'
  | 'lesson___authorCard___lesson___createdAt'
  | 'lesson___authorCard___lesson___updatedAt'
  | 'lesson___authorCard___lesson___customComplete'
  | 'lesson___authorCard___lesson___metalesson'
  | 'lesson___authorCard___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___authorCard___lesson___children'
  | 'lesson___authorCard___parent___id'
  | 'lesson___authorCard___parent___children'
  | 'lesson___authorCard___children'
  | 'lesson___authorCard___children___id'
  | 'lesson___authorCard___children___children'
  | 'lesson___authorCard___internal___content'
  | 'lesson___authorCard___internal___contentDigest'
  | 'lesson___authorCard___internal___description'
  | 'lesson___authorCard___internal___fieldOwners'
  | 'lesson___authorCard___internal___ignoreType'
  | 'lesson___authorCard___internal___mediaType'
  | 'lesson___authorCard___internal___owner'
  | 'lesson___authorCard___internal___type'
  | 'lesson___cover___contentful_id'
  | 'lesson___cover___id'
  | 'lesson___cover___spaceId'
  | 'lesson___cover___createdAt'
  | 'lesson___cover___updatedAt'
  | 'lesson___cover___file___url'
  | 'lesson___cover___file___fileName'
  | 'lesson___cover___file___contentType'
  | 'lesson___cover___title'
  | 'lesson___cover___description'
  | 'lesson___cover___node_locale'
  | 'lesson___cover___sys___type'
  | 'lesson___cover___sys___revision'
  | 'lesson___cover___fields___excerpt'
  | 'lesson___cover___fields___readingTime'
  | 'lesson___cover___fields___language'
  | 'lesson___cover___fields___order'
  | 'lesson___cover___fixed___base64'
  | 'lesson___cover___fixed___tracedSVG'
  | 'lesson___cover___fixed___aspectRatio'
  | 'lesson___cover___fixed___width'
  | 'lesson___cover___fixed___height'
  | 'lesson___cover___fixed___src'
  | 'lesson___cover___fixed___srcSet'
  | 'lesson___cover___fixed___srcWebp'
  | 'lesson___cover___fixed___srcSetWebp'
  | 'lesson___cover___resolutions___base64'
  | 'lesson___cover___resolutions___tracedSVG'
  | 'lesson___cover___resolutions___aspectRatio'
  | 'lesson___cover___resolutions___width'
  | 'lesson___cover___resolutions___height'
  | 'lesson___cover___resolutions___src'
  | 'lesson___cover___resolutions___srcSet'
  | 'lesson___cover___resolutions___srcWebp'
  | 'lesson___cover___resolutions___srcSetWebp'
  | 'lesson___cover___fluid___base64'
  | 'lesson___cover___fluid___tracedSVG'
  | 'lesson___cover___fluid___aspectRatio'
  | 'lesson___cover___fluid___src'
  | 'lesson___cover___fluid___srcSet'
  | 'lesson___cover___fluid___srcWebp'
  | 'lesson___cover___fluid___srcSetWebp'
  | 'lesson___cover___fluid___sizes'
  | 'lesson___cover___sizes___base64'
  | 'lesson___cover___sizes___tracedSVG'
  | 'lesson___cover___sizes___aspectRatio'
  | 'lesson___cover___sizes___src'
  | 'lesson___cover___sizes___srcSet'
  | 'lesson___cover___sizes___srcWebp'
  | 'lesson___cover___sizes___srcSetWebp'
  | 'lesson___cover___sizes___sizes'
  | 'lesson___cover___gatsbyImageData'
  | 'lesson___cover___resize___base64'
  | 'lesson___cover___resize___tracedSVG'
  | 'lesson___cover___resize___src'
  | 'lesson___cover___resize___width'
  | 'lesson___cover___resize___height'
  | 'lesson___cover___resize___aspectRatio'
  | 'lesson___cover___parent___id'
  | 'lesson___cover___parent___children'
  | 'lesson___cover___children'
  | 'lesson___cover___children___id'
  | 'lesson___cover___children___children'
  | 'lesson___cover___internal___content'
  | 'lesson___cover___internal___contentDigest'
  | 'lesson___cover___internal___description'
  | 'lesson___cover___internal___fieldOwners'
  | 'lesson___cover___internal___ignoreType'
  | 'lesson___cover___internal___mediaType'
  | 'lesson___cover___internal___owner'
  | 'lesson___cover___internal___type'
  | 'lesson___section___contentful_id'
  | 'lesson___section___id'
  | 'lesson___section___node_locale'
  | 'lesson___section___order'
  | 'lesson___section___title'
  | 'lesson___section___lesson'
  | 'lesson___section___lesson___contentful_id'
  | 'lesson___section___lesson___id'
  | 'lesson___section___lesson___node_locale'
  | 'lesson___section___lesson___lessonName'
  | 'lesson___section___lesson___slug'
  | 'lesson___section___lesson___keywords'
  | 'lesson___section___lesson___author'
  | 'lesson___section___lesson___stage'
  | 'lesson___section___lesson___authorCard'
  | 'lesson___section___lesson___habit'
  | 'lesson___section___lesson___week'
  | 'lesson___section___lesson___spaceId'
  | 'lesson___section___lesson___createdAt'
  | 'lesson___section___lesson___updatedAt'
  | 'lesson___section___lesson___customComplete'
  | 'lesson___section___lesson___metalesson'
  | 'lesson___section___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___section___lesson___children'
  | 'lesson___section___spaceId'
  | 'lesson___section___createdAt'
  | 'lesson___section___updatedAt'
  | 'lesson___section___sys___type'
  | 'lesson___section___sys___revision'
  | 'lesson___section___fields___excerpt'
  | 'lesson___section___fields___readingTime'
  | 'lesson___section___fields___language'
  | 'lesson___section___fields___order'
  | 'lesson___section___description___raw'
  | 'lesson___section___parent___id'
  | 'lesson___section___parent___children'
  | 'lesson___section___children'
  | 'lesson___section___children___id'
  | 'lesson___section___children___children'
  | 'lesson___section___internal___content'
  | 'lesson___section___internal___contentDigest'
  | 'lesson___section___internal___description'
  | 'lesson___section___internal___fieldOwners'
  | 'lesson___section___internal___ignoreType'
  | 'lesson___section___internal___mediaType'
  | 'lesson___section___internal___owner'
  | 'lesson___section___internal___type'
  | 'lesson___habit'
  | 'lesson___habit___contentful_id'
  | 'lesson___habit___id'
  | 'lesson___habit___node_locale'
  | 'lesson___habit___title'
  | 'lesson___habit___slug'
  | 'lesson___habit___period'
  | 'lesson___habit___description___raw'
  | 'lesson___habit___description___references'
  | 'lesson___habit___lesson'
  | 'lesson___habit___lesson___contentful_id'
  | 'lesson___habit___lesson___id'
  | 'lesson___habit___lesson___node_locale'
  | 'lesson___habit___lesson___lessonName'
  | 'lesson___habit___lesson___slug'
  | 'lesson___habit___lesson___keywords'
  | 'lesson___habit___lesson___author'
  | 'lesson___habit___lesson___stage'
  | 'lesson___habit___lesson___authorCard'
  | 'lesson___habit___lesson___habit'
  | 'lesson___habit___lesson___week'
  | 'lesson___habit___lesson___spaceId'
  | 'lesson___habit___lesson___createdAt'
  | 'lesson___habit___lesson___updatedAt'
  | 'lesson___habit___lesson___customComplete'
  | 'lesson___habit___lesson___metalesson'
  | 'lesson___habit___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___habit___lesson___children'
  | 'lesson___habit___spaceId'
  | 'lesson___habit___createdAt'
  | 'lesson___habit___updatedAt'
  | 'lesson___habit___sys___type'
  | 'lesson___habit___sys___revision'
  | 'lesson___habit___fields___excerpt'
  | 'lesson___habit___fields___readingTime'
  | 'lesson___habit___fields___language'
  | 'lesson___habit___fields___order'
  | 'lesson___habit___parent___id'
  | 'lesson___habit___parent___children'
  | 'lesson___habit___children'
  | 'lesson___habit___children___id'
  | 'lesson___habit___children___children'
  | 'lesson___habit___internal___content'
  | 'lesson___habit___internal___contentDigest'
  | 'lesson___habit___internal___description'
  | 'lesson___habit___internal___fieldOwners'
  | 'lesson___habit___internal___ignoreType'
  | 'lesson___habit___internal___mediaType'
  | 'lesson___habit___internal___owner'
  | 'lesson___habit___internal___type'
  | 'lesson___week'
  | 'lesson___week___contentful_id'
  | 'lesson___week___id'
  | 'lesson___week___node_locale'
  | 'lesson___week___order'
  | 'lesson___week___weekName'
  | 'lesson___week___slug'
  | 'lesson___week___intro'
  | 'lesson___week___weekDescription___raw'
  | 'lesson___week___taskCount'
  | 'lesson___week___locked'
  | 'lesson___week___duration'
  | 'lesson___week___coverPhoto___contentful_id'
  | 'lesson___week___coverPhoto___id'
  | 'lesson___week___coverPhoto___spaceId'
  | 'lesson___week___coverPhoto___createdAt'
  | 'lesson___week___coverPhoto___updatedAt'
  | 'lesson___week___coverPhoto___title'
  | 'lesson___week___coverPhoto___description'
  | 'lesson___week___coverPhoto___node_locale'
  | 'lesson___week___coverPhoto___gatsbyImageData'
  | 'lesson___week___coverPhoto___children'
  | 'lesson___week___lessons'
  | 'lesson___week___lessons___contentful_id'
  | 'lesson___week___lessons___id'
  | 'lesson___week___lessons___node_locale'
  | 'lesson___week___lessons___lessonName'
  | 'lesson___week___lessons___slug'
  | 'lesson___week___lessons___keywords'
  | 'lesson___week___lessons___author'
  | 'lesson___week___lessons___stage'
  | 'lesson___week___lessons___authorCard'
  | 'lesson___week___lessons___habit'
  | 'lesson___week___lessons___week'
  | 'lesson___week___lessons___spaceId'
  | 'lesson___week___lessons___createdAt'
  | 'lesson___week___lessons___updatedAt'
  | 'lesson___week___lessons___customComplete'
  | 'lesson___week___lessons___metalesson'
  | 'lesson___week___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___week___lessons___children'
  | 'lesson___week___spaceId'
  | 'lesson___week___createdAt'
  | 'lesson___week___updatedAt'
  | 'lesson___week___sys___type'
  | 'lesson___week___sys___revision'
  | 'lesson___week___fields___excerpt'
  | 'lesson___week___fields___readingTime'
  | 'lesson___week___fields___language'
  | 'lesson___week___fields___order'
  | 'lesson___week___parent___id'
  | 'lesson___week___parent___children'
  | 'lesson___week___children'
  | 'lesson___week___children___id'
  | 'lesson___week___children___children'
  | 'lesson___week___internal___content'
  | 'lesson___week___internal___contentDigest'
  | 'lesson___week___internal___description'
  | 'lesson___week___internal___fieldOwners'
  | 'lesson___week___internal___ignoreType'
  | 'lesson___week___internal___mediaType'
  | 'lesson___week___internal___owner'
  | 'lesson___week___internal___type'
  | 'lesson___weights___id'
  | 'lesson___weights___parent___id'
  | 'lesson___weights___parent___children'
  | 'lesson___weights___children'
  | 'lesson___weights___children___id'
  | 'lesson___weights___children___children'
  | 'lesson___weights___internal___content'
  | 'lesson___weights___internal___contentDigest'
  | 'lesson___weights___internal___description'
  | 'lesson___weights___internal___fieldOwners'
  | 'lesson___weights___internal___ignoreType'
  | 'lesson___weights___internal___mediaType'
  | 'lesson___weights___internal___owner'
  | 'lesson___weights___internal___type'
  | 'lesson___weights___jetlag'
  | 'lesson___weights___duration'
  | 'lesson___weights___efficiency'
  | 'lesson___weights___consistency'
  | 'lesson___weights___sys___type'
  | 'lesson___weights___fields___excerpt'
  | 'lesson___weights___fields___readingTime'
  | 'lesson___weights___fields___language'
  | 'lesson___weights___fields___order'
  | 'lesson___spaceId'
  | 'lesson___createdAt'
  | 'lesson___updatedAt'
  | 'lesson___sys___type'
  | 'lesson___sys___revision'
  | 'lesson___fields___excerpt'
  | 'lesson___fields___readingTime'
  | 'lesson___fields___language'
  | 'lesson___fields___order'
  | 'lesson___customComplete'
  | 'lesson___metalesson'
  | 'lesson___metalesson___contentful_id'
  | 'lesson___metalesson___id'
  | 'lesson___metalesson___node_locale'
  | 'lesson___metalesson___title'
  | 'lesson___metalesson___slug'
  | 'lesson___metalesson___keywords'
  | 'lesson___metalesson___lessons'
  | 'lesson___metalesson___lessons___contentful_id'
  | 'lesson___metalesson___lessons___id'
  | 'lesson___metalesson___lessons___node_locale'
  | 'lesson___metalesson___lessons___lessonName'
  | 'lesson___metalesson___lessons___slug'
  | 'lesson___metalesson___lessons___keywords'
  | 'lesson___metalesson___lessons___author'
  | 'lesson___metalesson___lessons___stage'
  | 'lesson___metalesson___lessons___authorCard'
  | 'lesson___metalesson___lessons___habit'
  | 'lesson___metalesson___lessons___week'
  | 'lesson___metalesson___lessons___spaceId'
  | 'lesson___metalesson___lessons___createdAt'
  | 'lesson___metalesson___lessons___updatedAt'
  | 'lesson___metalesson___lessons___customComplete'
  | 'lesson___metalesson___lessons___metalesson'
  | 'lesson___metalesson___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___metalesson___lessons___children'
  | 'lesson___metalesson___relatedContent'
  | 'lesson___metalesson___relatedContent___contentful_id'
  | 'lesson___metalesson___relatedContent___id'
  | 'lesson___metalesson___relatedContent___node_locale'
  | 'lesson___metalesson___relatedContent___lessonName'
  | 'lesson___metalesson___relatedContent___slug'
  | 'lesson___metalesson___relatedContent___keywords'
  | 'lesson___metalesson___relatedContent___author'
  | 'lesson___metalesson___relatedContent___stage'
  | 'lesson___metalesson___relatedContent___authorCard'
  | 'lesson___metalesson___relatedContent___habit'
  | 'lesson___metalesson___relatedContent___week'
  | 'lesson___metalesson___relatedContent___spaceId'
  | 'lesson___metalesson___relatedContent___createdAt'
  | 'lesson___metalesson___relatedContent___updatedAt'
  | 'lesson___metalesson___relatedContent___customComplete'
  | 'lesson___metalesson___relatedContent___metalesson'
  | 'lesson___metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___metalesson___relatedContent___children'
  | 'lesson___metalesson___spaceId'
  | 'lesson___metalesson___createdAt'
  | 'lesson___metalesson___updatedAt'
  | 'lesson___metalesson___sys___type'
  | 'lesson___metalesson___sys___revision'
  | 'lesson___metalesson___fields___excerpt'
  | 'lesson___metalesson___fields___readingTime'
  | 'lesson___metalesson___fields___language'
  | 'lesson___metalesson___fields___order'
  | 'lesson___metalesson___parent___id'
  | 'lesson___metalesson___parent___children'
  | 'lesson___metalesson___children'
  | 'lesson___metalesson___children___id'
  | 'lesson___metalesson___children___children'
  | 'lesson___metalesson___internal___content'
  | 'lesson___metalesson___internal___contentDigest'
  | 'lesson___metalesson___internal___description'
  | 'lesson___metalesson___internal___fieldOwners'
  | 'lesson___metalesson___internal___ignoreType'
  | 'lesson___metalesson___internal___mediaType'
  | 'lesson___metalesson___internal___owner'
  | 'lesson___metalesson___internal___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___sys___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___language'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___order'
  | 'lesson___childContentfulLessonWeightsJsonNode___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childContentfulLessonWeightsJsonNode___sys___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___language'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___order'
  | 'lesson___parent___id'
  | 'lesson___parent___parent___id'
  | 'lesson___parent___parent___children'
  | 'lesson___parent___children'
  | 'lesson___parent___children___id'
  | 'lesson___parent___children___children'
  | 'lesson___parent___internal___content'
  | 'lesson___parent___internal___contentDigest'
  | 'lesson___parent___internal___description'
  | 'lesson___parent___internal___fieldOwners'
  | 'lesson___parent___internal___ignoreType'
  | 'lesson___parent___internal___mediaType'
  | 'lesson___parent___internal___owner'
  | 'lesson___parent___internal___type'
  | 'lesson___children'
  | 'lesson___children___id'
  | 'lesson___children___parent___id'
  | 'lesson___children___parent___children'
  | 'lesson___children___children'
  | 'lesson___children___children___id'
  | 'lesson___children___children___children'
  | 'lesson___children___internal___content'
  | 'lesson___children___internal___contentDigest'
  | 'lesson___children___internal___description'
  | 'lesson___children___internal___fieldOwners'
  | 'lesson___children___internal___ignoreType'
  | 'lesson___children___internal___mediaType'
  | 'lesson___children___internal___owner'
  | 'lesson___children___internal___type'
  | 'lesson___internal___content'
  | 'lesson___internal___contentDigest'
  | 'lesson___internal___description'
  | 'lesson___internal___fieldOwners'
  | 'lesson___internal___ignoreType'
  | 'lesson___internal___mediaType'
  | 'lesson___internal___owner'
  | 'lesson___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAuthorFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAuthorFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  credentials?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulAuthorDescriptionFilterInput>;
  avatar?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  fields?: Maybe<ContentfulAuthorFieldsFilterInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAuthorFilterListInput = {
  elemMatch?: Maybe<ContentfulAuthorFilterInput>;
};

export type ContentfulAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSysContentType>;
};

export type ContentfulAuthorSysContentType = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

export type ContentfulChallenge = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulChallengeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulChallengeEdge>;
  nodes: Array<ContentfulChallenge>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulChallengeGroupConnection>;
};


export type ContentfulChallengeConnectionDistinctArgs = {
  field: ContentfulChallengeFieldsEnum;
};


export type ContentfulChallengeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulChallengeFieldsEnum;
};

export type ContentfulChallengeEdge = {
  next?: Maybe<ContentfulChallenge>;
  node: ContentfulChallenge;
  previous?: Maybe<ContentfulChallenge>;
};

export type ContentfulChallengeFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulChallengeFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulChallengeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulChallengeEdge>;
  nodes: Array<ContentfulChallenge>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulChallengeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulChallengeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
  fields?: Maybe<ContentfulContentTypeFields>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order';

export type ContentfulContentTypeFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
  fields?: Maybe<ContentfulContentTypeFieldsFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale';

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHabit = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulHabitDescription>;
  lesson?: Maybe<Array<Maybe<ContentfulLesson>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHabitSys>;
  fields?: Maybe<ContentfulHabitFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulHabitCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHabitUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHabitConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHabitEdge>;
  nodes: Array<ContentfulHabit>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHabitGroupConnection>;
};


export type ContentfulHabitConnectionDistinctArgs = {
  field: ContentfulHabitFieldsEnum;
};


export type ContentfulHabitConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHabitFieldsEnum;
};

export type ContentfulHabitDescription = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulHabit>>>;
};

export type ContentfulHabitDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
  references?: Maybe<ContentfulHabitFilterListInput>;
};

export type ContentfulHabitEdge = {
  next?: Maybe<ContentfulHabit>;
  node: ContentfulHabit;
  previous?: Maybe<ContentfulHabit>;
};

export type ContentfulHabitFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulHabitFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'period'
  | 'description___raw'
  | 'description___references'
  | 'description___references___contentful_id'
  | 'description___references___id'
  | 'description___references___node_locale'
  | 'description___references___title'
  | 'description___references___slug'
  | 'description___references___period'
  | 'description___references___description___raw'
  | 'description___references___description___references'
  | 'description___references___lesson'
  | 'description___references___lesson___contentful_id'
  | 'description___references___lesson___id'
  | 'description___references___lesson___node_locale'
  | 'description___references___lesson___lessonName'
  | 'description___references___lesson___slug'
  | 'description___references___lesson___keywords'
  | 'description___references___lesson___author'
  | 'description___references___lesson___stage'
  | 'description___references___lesson___authorCard'
  | 'description___references___lesson___habit'
  | 'description___references___lesson___week'
  | 'description___references___lesson___spaceId'
  | 'description___references___lesson___createdAt'
  | 'description___references___lesson___updatedAt'
  | 'description___references___lesson___customComplete'
  | 'description___references___lesson___metalesson'
  | 'description___references___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'description___references___lesson___children'
  | 'description___references___spaceId'
  | 'description___references___createdAt'
  | 'description___references___updatedAt'
  | 'description___references___sys___type'
  | 'description___references___sys___revision'
  | 'description___references___fields___excerpt'
  | 'description___references___fields___readingTime'
  | 'description___references___fields___language'
  | 'description___references___fields___order'
  | 'description___references___parent___id'
  | 'description___references___parent___children'
  | 'description___references___children'
  | 'description___references___children___id'
  | 'description___references___children___children'
  | 'description___references___internal___content'
  | 'description___references___internal___contentDigest'
  | 'description___references___internal___description'
  | 'description___references___internal___fieldOwners'
  | 'description___references___internal___ignoreType'
  | 'description___references___internal___mediaType'
  | 'description___references___internal___owner'
  | 'description___references___internal___type'
  | 'lesson'
  | 'lesson___contentful_id'
  | 'lesson___id'
  | 'lesson___node_locale'
  | 'lesson___lessonName'
  | 'lesson___slug'
  | 'lesson___keywords'
  | 'lesson___author'
  | 'lesson___lessonContent___raw'
  | 'lesson___lessonContent___references'
  | 'lesson___lessonContent___references___contentful_id'
  | 'lesson___lessonContent___references___id'
  | 'lesson___lessonContent___references___spaceId'
  | 'lesson___lessonContent___references___createdAt'
  | 'lesson___lessonContent___references___updatedAt'
  | 'lesson___lessonContent___references___title'
  | 'lesson___lessonContent___references___description'
  | 'lesson___lessonContent___references___node_locale'
  | 'lesson___lessonContent___references___gatsbyImageData'
  | 'lesson___lessonContent___references___children'
  | 'lesson___additionalInformation___raw'
  | 'lesson___stage'
  | 'lesson___authorCard'
  | 'lesson___authorCard___contentful_id'
  | 'lesson___authorCard___id'
  | 'lesson___authorCard___node_locale'
  | 'lesson___authorCard___slug'
  | 'lesson___authorCard___name'
  | 'lesson___authorCard___credentials'
  | 'lesson___authorCard___description___raw'
  | 'lesson___authorCard___avatar___contentful_id'
  | 'lesson___authorCard___avatar___id'
  | 'lesson___authorCard___avatar___spaceId'
  | 'lesson___authorCard___avatar___createdAt'
  | 'lesson___authorCard___avatar___updatedAt'
  | 'lesson___authorCard___avatar___title'
  | 'lesson___authorCard___avatar___description'
  | 'lesson___authorCard___avatar___node_locale'
  | 'lesson___authorCard___avatar___gatsbyImageData'
  | 'lesson___authorCard___avatar___children'
  | 'lesson___authorCard___spaceId'
  | 'lesson___authorCard___createdAt'
  | 'lesson___authorCard___updatedAt'
  | 'lesson___authorCard___sys___type'
  | 'lesson___authorCard___sys___revision'
  | 'lesson___authorCard___fields___excerpt'
  | 'lesson___authorCard___fields___readingTime'
  | 'lesson___authorCard___fields___language'
  | 'lesson___authorCard___fields___order'
  | 'lesson___authorCard___lesson'
  | 'lesson___authorCard___lesson___contentful_id'
  | 'lesson___authorCard___lesson___id'
  | 'lesson___authorCard___lesson___node_locale'
  | 'lesson___authorCard___lesson___lessonName'
  | 'lesson___authorCard___lesson___slug'
  | 'lesson___authorCard___lesson___keywords'
  | 'lesson___authorCard___lesson___author'
  | 'lesson___authorCard___lesson___stage'
  | 'lesson___authorCard___lesson___authorCard'
  | 'lesson___authorCard___lesson___habit'
  | 'lesson___authorCard___lesson___week'
  | 'lesson___authorCard___lesson___spaceId'
  | 'lesson___authorCard___lesson___createdAt'
  | 'lesson___authorCard___lesson___updatedAt'
  | 'lesson___authorCard___lesson___customComplete'
  | 'lesson___authorCard___lesson___metalesson'
  | 'lesson___authorCard___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___authorCard___lesson___children'
  | 'lesson___authorCard___parent___id'
  | 'lesson___authorCard___parent___children'
  | 'lesson___authorCard___children'
  | 'lesson___authorCard___children___id'
  | 'lesson___authorCard___children___children'
  | 'lesson___authorCard___internal___content'
  | 'lesson___authorCard___internal___contentDigest'
  | 'lesson___authorCard___internal___description'
  | 'lesson___authorCard___internal___fieldOwners'
  | 'lesson___authorCard___internal___ignoreType'
  | 'lesson___authorCard___internal___mediaType'
  | 'lesson___authorCard___internal___owner'
  | 'lesson___authorCard___internal___type'
  | 'lesson___cover___contentful_id'
  | 'lesson___cover___id'
  | 'lesson___cover___spaceId'
  | 'lesson___cover___createdAt'
  | 'lesson___cover___updatedAt'
  | 'lesson___cover___file___url'
  | 'lesson___cover___file___fileName'
  | 'lesson___cover___file___contentType'
  | 'lesson___cover___title'
  | 'lesson___cover___description'
  | 'lesson___cover___node_locale'
  | 'lesson___cover___sys___type'
  | 'lesson___cover___sys___revision'
  | 'lesson___cover___fields___excerpt'
  | 'lesson___cover___fields___readingTime'
  | 'lesson___cover___fields___language'
  | 'lesson___cover___fields___order'
  | 'lesson___cover___fixed___base64'
  | 'lesson___cover___fixed___tracedSVG'
  | 'lesson___cover___fixed___aspectRatio'
  | 'lesson___cover___fixed___width'
  | 'lesson___cover___fixed___height'
  | 'lesson___cover___fixed___src'
  | 'lesson___cover___fixed___srcSet'
  | 'lesson___cover___fixed___srcWebp'
  | 'lesson___cover___fixed___srcSetWebp'
  | 'lesson___cover___resolutions___base64'
  | 'lesson___cover___resolutions___tracedSVG'
  | 'lesson___cover___resolutions___aspectRatio'
  | 'lesson___cover___resolutions___width'
  | 'lesson___cover___resolutions___height'
  | 'lesson___cover___resolutions___src'
  | 'lesson___cover___resolutions___srcSet'
  | 'lesson___cover___resolutions___srcWebp'
  | 'lesson___cover___resolutions___srcSetWebp'
  | 'lesson___cover___fluid___base64'
  | 'lesson___cover___fluid___tracedSVG'
  | 'lesson___cover___fluid___aspectRatio'
  | 'lesson___cover___fluid___src'
  | 'lesson___cover___fluid___srcSet'
  | 'lesson___cover___fluid___srcWebp'
  | 'lesson___cover___fluid___srcSetWebp'
  | 'lesson___cover___fluid___sizes'
  | 'lesson___cover___sizes___base64'
  | 'lesson___cover___sizes___tracedSVG'
  | 'lesson___cover___sizes___aspectRatio'
  | 'lesson___cover___sizes___src'
  | 'lesson___cover___sizes___srcSet'
  | 'lesson___cover___sizes___srcWebp'
  | 'lesson___cover___sizes___srcSetWebp'
  | 'lesson___cover___sizes___sizes'
  | 'lesson___cover___gatsbyImageData'
  | 'lesson___cover___resize___base64'
  | 'lesson___cover___resize___tracedSVG'
  | 'lesson___cover___resize___src'
  | 'lesson___cover___resize___width'
  | 'lesson___cover___resize___height'
  | 'lesson___cover___resize___aspectRatio'
  | 'lesson___cover___parent___id'
  | 'lesson___cover___parent___children'
  | 'lesson___cover___children'
  | 'lesson___cover___children___id'
  | 'lesson___cover___children___children'
  | 'lesson___cover___internal___content'
  | 'lesson___cover___internal___contentDigest'
  | 'lesson___cover___internal___description'
  | 'lesson___cover___internal___fieldOwners'
  | 'lesson___cover___internal___ignoreType'
  | 'lesson___cover___internal___mediaType'
  | 'lesson___cover___internal___owner'
  | 'lesson___cover___internal___type'
  | 'lesson___section___contentful_id'
  | 'lesson___section___id'
  | 'lesson___section___node_locale'
  | 'lesson___section___order'
  | 'lesson___section___title'
  | 'lesson___section___lesson'
  | 'lesson___section___lesson___contentful_id'
  | 'lesson___section___lesson___id'
  | 'lesson___section___lesson___node_locale'
  | 'lesson___section___lesson___lessonName'
  | 'lesson___section___lesson___slug'
  | 'lesson___section___lesson___keywords'
  | 'lesson___section___lesson___author'
  | 'lesson___section___lesson___stage'
  | 'lesson___section___lesson___authorCard'
  | 'lesson___section___lesson___habit'
  | 'lesson___section___lesson___week'
  | 'lesson___section___lesson___spaceId'
  | 'lesson___section___lesson___createdAt'
  | 'lesson___section___lesson___updatedAt'
  | 'lesson___section___lesson___customComplete'
  | 'lesson___section___lesson___metalesson'
  | 'lesson___section___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___section___lesson___children'
  | 'lesson___section___spaceId'
  | 'lesson___section___createdAt'
  | 'lesson___section___updatedAt'
  | 'lesson___section___sys___type'
  | 'lesson___section___sys___revision'
  | 'lesson___section___fields___excerpt'
  | 'lesson___section___fields___readingTime'
  | 'lesson___section___fields___language'
  | 'lesson___section___fields___order'
  | 'lesson___section___description___raw'
  | 'lesson___section___parent___id'
  | 'lesson___section___parent___children'
  | 'lesson___section___children'
  | 'lesson___section___children___id'
  | 'lesson___section___children___children'
  | 'lesson___section___internal___content'
  | 'lesson___section___internal___contentDigest'
  | 'lesson___section___internal___description'
  | 'lesson___section___internal___fieldOwners'
  | 'lesson___section___internal___ignoreType'
  | 'lesson___section___internal___mediaType'
  | 'lesson___section___internal___owner'
  | 'lesson___section___internal___type'
  | 'lesson___habit'
  | 'lesson___habit___contentful_id'
  | 'lesson___habit___id'
  | 'lesson___habit___node_locale'
  | 'lesson___habit___title'
  | 'lesson___habit___slug'
  | 'lesson___habit___period'
  | 'lesson___habit___description___raw'
  | 'lesson___habit___description___references'
  | 'lesson___habit___lesson'
  | 'lesson___habit___lesson___contentful_id'
  | 'lesson___habit___lesson___id'
  | 'lesson___habit___lesson___node_locale'
  | 'lesson___habit___lesson___lessonName'
  | 'lesson___habit___lesson___slug'
  | 'lesson___habit___lesson___keywords'
  | 'lesson___habit___lesson___author'
  | 'lesson___habit___lesson___stage'
  | 'lesson___habit___lesson___authorCard'
  | 'lesson___habit___lesson___habit'
  | 'lesson___habit___lesson___week'
  | 'lesson___habit___lesson___spaceId'
  | 'lesson___habit___lesson___createdAt'
  | 'lesson___habit___lesson___updatedAt'
  | 'lesson___habit___lesson___customComplete'
  | 'lesson___habit___lesson___metalesson'
  | 'lesson___habit___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___habit___lesson___children'
  | 'lesson___habit___spaceId'
  | 'lesson___habit___createdAt'
  | 'lesson___habit___updatedAt'
  | 'lesson___habit___sys___type'
  | 'lesson___habit___sys___revision'
  | 'lesson___habit___fields___excerpt'
  | 'lesson___habit___fields___readingTime'
  | 'lesson___habit___fields___language'
  | 'lesson___habit___fields___order'
  | 'lesson___habit___parent___id'
  | 'lesson___habit___parent___children'
  | 'lesson___habit___children'
  | 'lesson___habit___children___id'
  | 'lesson___habit___children___children'
  | 'lesson___habit___internal___content'
  | 'lesson___habit___internal___contentDigest'
  | 'lesson___habit___internal___description'
  | 'lesson___habit___internal___fieldOwners'
  | 'lesson___habit___internal___ignoreType'
  | 'lesson___habit___internal___mediaType'
  | 'lesson___habit___internal___owner'
  | 'lesson___habit___internal___type'
  | 'lesson___week'
  | 'lesson___week___contentful_id'
  | 'lesson___week___id'
  | 'lesson___week___node_locale'
  | 'lesson___week___order'
  | 'lesson___week___weekName'
  | 'lesson___week___slug'
  | 'lesson___week___intro'
  | 'lesson___week___weekDescription___raw'
  | 'lesson___week___taskCount'
  | 'lesson___week___locked'
  | 'lesson___week___duration'
  | 'lesson___week___coverPhoto___contentful_id'
  | 'lesson___week___coverPhoto___id'
  | 'lesson___week___coverPhoto___spaceId'
  | 'lesson___week___coverPhoto___createdAt'
  | 'lesson___week___coverPhoto___updatedAt'
  | 'lesson___week___coverPhoto___title'
  | 'lesson___week___coverPhoto___description'
  | 'lesson___week___coverPhoto___node_locale'
  | 'lesson___week___coverPhoto___gatsbyImageData'
  | 'lesson___week___coverPhoto___children'
  | 'lesson___week___lessons'
  | 'lesson___week___lessons___contentful_id'
  | 'lesson___week___lessons___id'
  | 'lesson___week___lessons___node_locale'
  | 'lesson___week___lessons___lessonName'
  | 'lesson___week___lessons___slug'
  | 'lesson___week___lessons___keywords'
  | 'lesson___week___lessons___author'
  | 'lesson___week___lessons___stage'
  | 'lesson___week___lessons___authorCard'
  | 'lesson___week___lessons___habit'
  | 'lesson___week___lessons___week'
  | 'lesson___week___lessons___spaceId'
  | 'lesson___week___lessons___createdAt'
  | 'lesson___week___lessons___updatedAt'
  | 'lesson___week___lessons___customComplete'
  | 'lesson___week___lessons___metalesson'
  | 'lesson___week___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___week___lessons___children'
  | 'lesson___week___spaceId'
  | 'lesson___week___createdAt'
  | 'lesson___week___updatedAt'
  | 'lesson___week___sys___type'
  | 'lesson___week___sys___revision'
  | 'lesson___week___fields___excerpt'
  | 'lesson___week___fields___readingTime'
  | 'lesson___week___fields___language'
  | 'lesson___week___fields___order'
  | 'lesson___week___parent___id'
  | 'lesson___week___parent___children'
  | 'lesson___week___children'
  | 'lesson___week___children___id'
  | 'lesson___week___children___children'
  | 'lesson___week___internal___content'
  | 'lesson___week___internal___contentDigest'
  | 'lesson___week___internal___description'
  | 'lesson___week___internal___fieldOwners'
  | 'lesson___week___internal___ignoreType'
  | 'lesson___week___internal___mediaType'
  | 'lesson___week___internal___owner'
  | 'lesson___week___internal___type'
  | 'lesson___weights___id'
  | 'lesson___weights___parent___id'
  | 'lesson___weights___parent___children'
  | 'lesson___weights___children'
  | 'lesson___weights___children___id'
  | 'lesson___weights___children___children'
  | 'lesson___weights___internal___content'
  | 'lesson___weights___internal___contentDigest'
  | 'lesson___weights___internal___description'
  | 'lesson___weights___internal___fieldOwners'
  | 'lesson___weights___internal___ignoreType'
  | 'lesson___weights___internal___mediaType'
  | 'lesson___weights___internal___owner'
  | 'lesson___weights___internal___type'
  | 'lesson___weights___jetlag'
  | 'lesson___weights___duration'
  | 'lesson___weights___efficiency'
  | 'lesson___weights___consistency'
  | 'lesson___weights___sys___type'
  | 'lesson___weights___fields___excerpt'
  | 'lesson___weights___fields___readingTime'
  | 'lesson___weights___fields___language'
  | 'lesson___weights___fields___order'
  | 'lesson___spaceId'
  | 'lesson___createdAt'
  | 'lesson___updatedAt'
  | 'lesson___sys___type'
  | 'lesson___sys___revision'
  | 'lesson___fields___excerpt'
  | 'lesson___fields___readingTime'
  | 'lesson___fields___language'
  | 'lesson___fields___order'
  | 'lesson___customComplete'
  | 'lesson___metalesson'
  | 'lesson___metalesson___contentful_id'
  | 'lesson___metalesson___id'
  | 'lesson___metalesson___node_locale'
  | 'lesson___metalesson___title'
  | 'lesson___metalesson___slug'
  | 'lesson___metalesson___keywords'
  | 'lesson___metalesson___lessons'
  | 'lesson___metalesson___lessons___contentful_id'
  | 'lesson___metalesson___lessons___id'
  | 'lesson___metalesson___lessons___node_locale'
  | 'lesson___metalesson___lessons___lessonName'
  | 'lesson___metalesson___lessons___slug'
  | 'lesson___metalesson___lessons___keywords'
  | 'lesson___metalesson___lessons___author'
  | 'lesson___metalesson___lessons___stage'
  | 'lesson___metalesson___lessons___authorCard'
  | 'lesson___metalesson___lessons___habit'
  | 'lesson___metalesson___lessons___week'
  | 'lesson___metalesson___lessons___spaceId'
  | 'lesson___metalesson___lessons___createdAt'
  | 'lesson___metalesson___lessons___updatedAt'
  | 'lesson___metalesson___lessons___customComplete'
  | 'lesson___metalesson___lessons___metalesson'
  | 'lesson___metalesson___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___metalesson___lessons___children'
  | 'lesson___metalesson___relatedContent'
  | 'lesson___metalesson___relatedContent___contentful_id'
  | 'lesson___metalesson___relatedContent___id'
  | 'lesson___metalesson___relatedContent___node_locale'
  | 'lesson___metalesson___relatedContent___lessonName'
  | 'lesson___metalesson___relatedContent___slug'
  | 'lesson___metalesson___relatedContent___keywords'
  | 'lesson___metalesson___relatedContent___author'
  | 'lesson___metalesson___relatedContent___stage'
  | 'lesson___metalesson___relatedContent___authorCard'
  | 'lesson___metalesson___relatedContent___habit'
  | 'lesson___metalesson___relatedContent___week'
  | 'lesson___metalesson___relatedContent___spaceId'
  | 'lesson___metalesson___relatedContent___createdAt'
  | 'lesson___metalesson___relatedContent___updatedAt'
  | 'lesson___metalesson___relatedContent___customComplete'
  | 'lesson___metalesson___relatedContent___metalesson'
  | 'lesson___metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___metalesson___relatedContent___children'
  | 'lesson___metalesson___spaceId'
  | 'lesson___metalesson___createdAt'
  | 'lesson___metalesson___updatedAt'
  | 'lesson___metalesson___sys___type'
  | 'lesson___metalesson___sys___revision'
  | 'lesson___metalesson___fields___excerpt'
  | 'lesson___metalesson___fields___readingTime'
  | 'lesson___metalesson___fields___language'
  | 'lesson___metalesson___fields___order'
  | 'lesson___metalesson___parent___id'
  | 'lesson___metalesson___parent___children'
  | 'lesson___metalesson___children'
  | 'lesson___metalesson___children___id'
  | 'lesson___metalesson___children___children'
  | 'lesson___metalesson___internal___content'
  | 'lesson___metalesson___internal___contentDigest'
  | 'lesson___metalesson___internal___description'
  | 'lesson___metalesson___internal___fieldOwners'
  | 'lesson___metalesson___internal___ignoreType'
  | 'lesson___metalesson___internal___mediaType'
  | 'lesson___metalesson___internal___owner'
  | 'lesson___metalesson___internal___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___sys___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___language'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___order'
  | 'lesson___childContentfulLessonWeightsJsonNode___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childContentfulLessonWeightsJsonNode___sys___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___language'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___order'
  | 'lesson___parent___id'
  | 'lesson___parent___parent___id'
  | 'lesson___parent___parent___children'
  | 'lesson___parent___children'
  | 'lesson___parent___children___id'
  | 'lesson___parent___children___children'
  | 'lesson___parent___internal___content'
  | 'lesson___parent___internal___contentDigest'
  | 'lesson___parent___internal___description'
  | 'lesson___parent___internal___fieldOwners'
  | 'lesson___parent___internal___ignoreType'
  | 'lesson___parent___internal___mediaType'
  | 'lesson___parent___internal___owner'
  | 'lesson___parent___internal___type'
  | 'lesson___children'
  | 'lesson___children___id'
  | 'lesson___children___parent___id'
  | 'lesson___children___parent___children'
  | 'lesson___children___children'
  | 'lesson___children___children___id'
  | 'lesson___children___children___children'
  | 'lesson___children___internal___content'
  | 'lesson___children___internal___contentDigest'
  | 'lesson___children___internal___description'
  | 'lesson___children___internal___fieldOwners'
  | 'lesson___children___internal___ignoreType'
  | 'lesson___children___internal___mediaType'
  | 'lesson___children___internal___owner'
  | 'lesson___children___internal___type'
  | 'lesson___internal___content'
  | 'lesson___internal___contentDigest'
  | 'lesson___internal___description'
  | 'lesson___internal___fieldOwners'
  | 'lesson___internal___ignoreType'
  | 'lesson___internal___mediaType'
  | 'lesson___internal___owner'
  | 'lesson___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulHabitFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulHabitFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  period?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulHabitDescriptionFilterInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHabitSysFilterInput>;
  fields?: Maybe<ContentfulHabitFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulHabitFilterListInput = {
  elemMatch?: Maybe<ContentfulHabitFilterInput>;
};

export type ContentfulHabitGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHabitEdge>;
  nodes: Array<ContentfulHabit>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHabitSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHabitFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHabitSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHabitSysContentType>;
};

export type ContentfulHabitSysContentType = {
  sys?: Maybe<ContentfulHabitSysContentTypeSys>;
};

export type ContentfulHabitSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHabitSysContentTypeSysFilterInput>;
};

export type ContentfulHabitSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulHabitSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHabitSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHabitSysContentTypeFilterInput>;
};

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulLesson = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  lessonName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  author?: Maybe<Scalars['String']>;
  lessonContent?: Maybe<ContentfulLessonLessonContent>;
  additionalInformation?: Maybe<ContentfulLessonAdditionalInformation>;
  stage?: Maybe<Scalars['Int']>;
  authorCard?: Maybe<Array<Maybe<ContentfulAuthor>>>;
  cover?: Maybe<ContentfulAsset>;
  section?: Maybe<ContentfulSection>;
  habit?: Maybe<Array<Maybe<ContentfulHabit>>>;
  week?: Maybe<Array<Maybe<ContentfulWeek>>>;
  weights?: Maybe<ContentfulLessonWeightsJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLessonSys>;
  fields?: Maybe<ContentfulLessonFields>;
  customComplete?: Maybe<Scalars['String']>;
  metalesson?: Maybe<Array<Maybe<ContentfulMetalesson>>>;
  /** Returns all children nodes filtered by type contentfulLessonWeightsJsonNode */
  childrenContentfulLessonWeightsJsonNode?: Maybe<Array<Maybe<ContentfulLessonWeightsJsonNode>>>;
  /**
   * Returns the first child node of type contentfulLessonWeightsJsonNode or null
   * if there are no children of given type on this node
   */
  childContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLessonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulLessonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformation = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulLessonAdditionalInformationFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonEdge>;
  nodes: Array<ContentfulLesson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLessonGroupConnection>;
};


export type ContentfulLessonConnectionDistinctArgs = {
  field: ContentfulLessonFieldsEnum;
};


export type ContentfulLessonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLessonFieldsEnum;
};

export type ContentfulLessonEdge = {
  next?: Maybe<ContentfulLesson>;
  node: ContentfulLesson;
  previous?: Maybe<ContentfulLesson>;
};

export type ContentfulLessonFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulLessonFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'lessonName'
  | 'slug'
  | 'keywords'
  | 'author'
  | 'lessonContent___raw'
  | 'lessonContent___references'
  | 'lessonContent___references___contentful_id'
  | 'lessonContent___references___id'
  | 'lessonContent___references___spaceId'
  | 'lessonContent___references___createdAt'
  | 'lessonContent___references___updatedAt'
  | 'lessonContent___references___file___url'
  | 'lessonContent___references___file___fileName'
  | 'lessonContent___references___file___contentType'
  | 'lessonContent___references___title'
  | 'lessonContent___references___description'
  | 'lessonContent___references___node_locale'
  | 'lessonContent___references___sys___type'
  | 'lessonContent___references___sys___revision'
  | 'lessonContent___references___fields___excerpt'
  | 'lessonContent___references___fields___readingTime'
  | 'lessonContent___references___fields___language'
  | 'lessonContent___references___fields___order'
  | 'lessonContent___references___fixed___base64'
  | 'lessonContent___references___fixed___tracedSVG'
  | 'lessonContent___references___fixed___aspectRatio'
  | 'lessonContent___references___fixed___width'
  | 'lessonContent___references___fixed___height'
  | 'lessonContent___references___fixed___src'
  | 'lessonContent___references___fixed___srcSet'
  | 'lessonContent___references___fixed___srcWebp'
  | 'lessonContent___references___fixed___srcSetWebp'
  | 'lessonContent___references___resolutions___base64'
  | 'lessonContent___references___resolutions___tracedSVG'
  | 'lessonContent___references___resolutions___aspectRatio'
  | 'lessonContent___references___resolutions___width'
  | 'lessonContent___references___resolutions___height'
  | 'lessonContent___references___resolutions___src'
  | 'lessonContent___references___resolutions___srcSet'
  | 'lessonContent___references___resolutions___srcWebp'
  | 'lessonContent___references___resolutions___srcSetWebp'
  | 'lessonContent___references___fluid___base64'
  | 'lessonContent___references___fluid___tracedSVG'
  | 'lessonContent___references___fluid___aspectRatio'
  | 'lessonContent___references___fluid___src'
  | 'lessonContent___references___fluid___srcSet'
  | 'lessonContent___references___fluid___srcWebp'
  | 'lessonContent___references___fluid___srcSetWebp'
  | 'lessonContent___references___fluid___sizes'
  | 'lessonContent___references___sizes___base64'
  | 'lessonContent___references___sizes___tracedSVG'
  | 'lessonContent___references___sizes___aspectRatio'
  | 'lessonContent___references___sizes___src'
  | 'lessonContent___references___sizes___srcSet'
  | 'lessonContent___references___sizes___srcWebp'
  | 'lessonContent___references___sizes___srcSetWebp'
  | 'lessonContent___references___sizes___sizes'
  | 'lessonContent___references___gatsbyImageData'
  | 'lessonContent___references___resize___base64'
  | 'lessonContent___references___resize___tracedSVG'
  | 'lessonContent___references___resize___src'
  | 'lessonContent___references___resize___width'
  | 'lessonContent___references___resize___height'
  | 'lessonContent___references___resize___aspectRatio'
  | 'lessonContent___references___parent___id'
  | 'lessonContent___references___parent___children'
  | 'lessonContent___references___children'
  | 'lessonContent___references___children___id'
  | 'lessonContent___references___children___children'
  | 'lessonContent___references___internal___content'
  | 'lessonContent___references___internal___contentDigest'
  | 'lessonContent___references___internal___description'
  | 'lessonContent___references___internal___fieldOwners'
  | 'lessonContent___references___internal___ignoreType'
  | 'lessonContent___references___internal___mediaType'
  | 'lessonContent___references___internal___owner'
  | 'lessonContent___references___internal___type'
  | 'additionalInformation___raw'
  | 'stage'
  | 'authorCard'
  | 'authorCard___contentful_id'
  | 'authorCard___id'
  | 'authorCard___node_locale'
  | 'authorCard___slug'
  | 'authorCard___name'
  | 'authorCard___credentials'
  | 'authorCard___description___raw'
  | 'authorCard___avatar___contentful_id'
  | 'authorCard___avatar___id'
  | 'authorCard___avatar___spaceId'
  | 'authorCard___avatar___createdAt'
  | 'authorCard___avatar___updatedAt'
  | 'authorCard___avatar___file___url'
  | 'authorCard___avatar___file___fileName'
  | 'authorCard___avatar___file___contentType'
  | 'authorCard___avatar___title'
  | 'authorCard___avatar___description'
  | 'authorCard___avatar___node_locale'
  | 'authorCard___avatar___sys___type'
  | 'authorCard___avatar___sys___revision'
  | 'authorCard___avatar___fields___excerpt'
  | 'authorCard___avatar___fields___readingTime'
  | 'authorCard___avatar___fields___language'
  | 'authorCard___avatar___fields___order'
  | 'authorCard___avatar___fixed___base64'
  | 'authorCard___avatar___fixed___tracedSVG'
  | 'authorCard___avatar___fixed___aspectRatio'
  | 'authorCard___avatar___fixed___width'
  | 'authorCard___avatar___fixed___height'
  | 'authorCard___avatar___fixed___src'
  | 'authorCard___avatar___fixed___srcSet'
  | 'authorCard___avatar___fixed___srcWebp'
  | 'authorCard___avatar___fixed___srcSetWebp'
  | 'authorCard___avatar___resolutions___base64'
  | 'authorCard___avatar___resolutions___tracedSVG'
  | 'authorCard___avatar___resolutions___aspectRatio'
  | 'authorCard___avatar___resolutions___width'
  | 'authorCard___avatar___resolutions___height'
  | 'authorCard___avatar___resolutions___src'
  | 'authorCard___avatar___resolutions___srcSet'
  | 'authorCard___avatar___resolutions___srcWebp'
  | 'authorCard___avatar___resolutions___srcSetWebp'
  | 'authorCard___avatar___fluid___base64'
  | 'authorCard___avatar___fluid___tracedSVG'
  | 'authorCard___avatar___fluid___aspectRatio'
  | 'authorCard___avatar___fluid___src'
  | 'authorCard___avatar___fluid___srcSet'
  | 'authorCard___avatar___fluid___srcWebp'
  | 'authorCard___avatar___fluid___srcSetWebp'
  | 'authorCard___avatar___fluid___sizes'
  | 'authorCard___avatar___sizes___base64'
  | 'authorCard___avatar___sizes___tracedSVG'
  | 'authorCard___avatar___sizes___aspectRatio'
  | 'authorCard___avatar___sizes___src'
  | 'authorCard___avatar___sizes___srcSet'
  | 'authorCard___avatar___sizes___srcWebp'
  | 'authorCard___avatar___sizes___srcSetWebp'
  | 'authorCard___avatar___sizes___sizes'
  | 'authorCard___avatar___gatsbyImageData'
  | 'authorCard___avatar___resize___base64'
  | 'authorCard___avatar___resize___tracedSVG'
  | 'authorCard___avatar___resize___src'
  | 'authorCard___avatar___resize___width'
  | 'authorCard___avatar___resize___height'
  | 'authorCard___avatar___resize___aspectRatio'
  | 'authorCard___avatar___parent___id'
  | 'authorCard___avatar___parent___children'
  | 'authorCard___avatar___children'
  | 'authorCard___avatar___children___id'
  | 'authorCard___avatar___children___children'
  | 'authorCard___avatar___internal___content'
  | 'authorCard___avatar___internal___contentDigest'
  | 'authorCard___avatar___internal___description'
  | 'authorCard___avatar___internal___fieldOwners'
  | 'authorCard___avatar___internal___ignoreType'
  | 'authorCard___avatar___internal___mediaType'
  | 'authorCard___avatar___internal___owner'
  | 'authorCard___avatar___internal___type'
  | 'authorCard___spaceId'
  | 'authorCard___createdAt'
  | 'authorCard___updatedAt'
  | 'authorCard___sys___type'
  | 'authorCard___sys___revision'
  | 'authorCard___fields___excerpt'
  | 'authorCard___fields___readingTime'
  | 'authorCard___fields___language'
  | 'authorCard___fields___order'
  | 'authorCard___lesson'
  | 'authorCard___lesson___contentful_id'
  | 'authorCard___lesson___id'
  | 'authorCard___lesson___node_locale'
  | 'authorCard___lesson___lessonName'
  | 'authorCard___lesson___slug'
  | 'authorCard___lesson___keywords'
  | 'authorCard___lesson___author'
  | 'authorCard___lesson___lessonContent___raw'
  | 'authorCard___lesson___lessonContent___references'
  | 'authorCard___lesson___additionalInformation___raw'
  | 'authorCard___lesson___stage'
  | 'authorCard___lesson___authorCard'
  | 'authorCard___lesson___authorCard___contentful_id'
  | 'authorCard___lesson___authorCard___id'
  | 'authorCard___lesson___authorCard___node_locale'
  | 'authorCard___lesson___authorCard___slug'
  | 'authorCard___lesson___authorCard___name'
  | 'authorCard___lesson___authorCard___credentials'
  | 'authorCard___lesson___authorCard___spaceId'
  | 'authorCard___lesson___authorCard___createdAt'
  | 'authorCard___lesson___authorCard___updatedAt'
  | 'authorCard___lesson___authorCard___lesson'
  | 'authorCard___lesson___authorCard___children'
  | 'authorCard___lesson___cover___contentful_id'
  | 'authorCard___lesson___cover___id'
  | 'authorCard___lesson___cover___spaceId'
  | 'authorCard___lesson___cover___createdAt'
  | 'authorCard___lesson___cover___updatedAt'
  | 'authorCard___lesson___cover___title'
  | 'authorCard___lesson___cover___description'
  | 'authorCard___lesson___cover___node_locale'
  | 'authorCard___lesson___cover___gatsbyImageData'
  | 'authorCard___lesson___cover___children'
  | 'authorCard___lesson___section___contentful_id'
  | 'authorCard___lesson___section___id'
  | 'authorCard___lesson___section___node_locale'
  | 'authorCard___lesson___section___order'
  | 'authorCard___lesson___section___title'
  | 'authorCard___lesson___section___lesson'
  | 'authorCard___lesson___section___spaceId'
  | 'authorCard___lesson___section___createdAt'
  | 'authorCard___lesson___section___updatedAt'
  | 'authorCard___lesson___section___children'
  | 'authorCard___lesson___habit'
  | 'authorCard___lesson___habit___contentful_id'
  | 'authorCard___lesson___habit___id'
  | 'authorCard___lesson___habit___node_locale'
  | 'authorCard___lesson___habit___title'
  | 'authorCard___lesson___habit___slug'
  | 'authorCard___lesson___habit___period'
  | 'authorCard___lesson___habit___lesson'
  | 'authorCard___lesson___habit___spaceId'
  | 'authorCard___lesson___habit___createdAt'
  | 'authorCard___lesson___habit___updatedAt'
  | 'authorCard___lesson___habit___children'
  | 'authorCard___lesson___week'
  | 'authorCard___lesson___week___contentful_id'
  | 'authorCard___lesson___week___id'
  | 'authorCard___lesson___week___node_locale'
  | 'authorCard___lesson___week___order'
  | 'authorCard___lesson___week___weekName'
  | 'authorCard___lesson___week___slug'
  | 'authorCard___lesson___week___intro'
  | 'authorCard___lesson___week___taskCount'
  | 'authorCard___lesson___week___locked'
  | 'authorCard___lesson___week___duration'
  | 'authorCard___lesson___week___lessons'
  | 'authorCard___lesson___week___spaceId'
  | 'authorCard___lesson___week___createdAt'
  | 'authorCard___lesson___week___updatedAt'
  | 'authorCard___lesson___week___children'
  | 'authorCard___lesson___weights___id'
  | 'authorCard___lesson___weights___children'
  | 'authorCard___lesson___weights___jetlag'
  | 'authorCard___lesson___weights___duration'
  | 'authorCard___lesson___weights___efficiency'
  | 'authorCard___lesson___weights___consistency'
  | 'authorCard___lesson___spaceId'
  | 'authorCard___lesson___createdAt'
  | 'authorCard___lesson___updatedAt'
  | 'authorCard___lesson___sys___type'
  | 'authorCard___lesson___sys___revision'
  | 'authorCard___lesson___fields___excerpt'
  | 'authorCard___lesson___fields___readingTime'
  | 'authorCard___lesson___fields___language'
  | 'authorCard___lesson___fields___order'
  | 'authorCard___lesson___customComplete'
  | 'authorCard___lesson___metalesson'
  | 'authorCard___lesson___metalesson___contentful_id'
  | 'authorCard___lesson___metalesson___id'
  | 'authorCard___lesson___metalesson___node_locale'
  | 'authorCard___lesson___metalesson___title'
  | 'authorCard___lesson___metalesson___slug'
  | 'authorCard___lesson___metalesson___keywords'
  | 'authorCard___lesson___metalesson___lessons'
  | 'authorCard___lesson___metalesson___relatedContent'
  | 'authorCard___lesson___metalesson___spaceId'
  | 'authorCard___lesson___metalesson___createdAt'
  | 'authorCard___lesson___metalesson___updatedAt'
  | 'authorCard___lesson___metalesson___children'
  | 'authorCard___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'authorCard___lesson___childrenContentfulLessonWeightsJsonNode___id'
  | 'authorCard___lesson___childrenContentfulLessonWeightsJsonNode___children'
  | 'authorCard___lesson___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'authorCard___lesson___childrenContentfulLessonWeightsJsonNode___duration'
  | 'authorCard___lesson___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'authorCard___lesson___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___id'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___children'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'authorCard___lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'authorCard___lesson___parent___id'
  | 'authorCard___lesson___parent___children'
  | 'authorCard___lesson___children'
  | 'authorCard___lesson___children___id'
  | 'authorCard___lesson___children___children'
  | 'authorCard___lesson___internal___content'
  | 'authorCard___lesson___internal___contentDigest'
  | 'authorCard___lesson___internal___description'
  | 'authorCard___lesson___internal___fieldOwners'
  | 'authorCard___lesson___internal___ignoreType'
  | 'authorCard___lesson___internal___mediaType'
  | 'authorCard___lesson___internal___owner'
  | 'authorCard___lesson___internal___type'
  | 'authorCard___parent___id'
  | 'authorCard___parent___parent___id'
  | 'authorCard___parent___parent___children'
  | 'authorCard___parent___children'
  | 'authorCard___parent___children___id'
  | 'authorCard___parent___children___children'
  | 'authorCard___parent___internal___content'
  | 'authorCard___parent___internal___contentDigest'
  | 'authorCard___parent___internal___description'
  | 'authorCard___parent___internal___fieldOwners'
  | 'authorCard___parent___internal___ignoreType'
  | 'authorCard___parent___internal___mediaType'
  | 'authorCard___parent___internal___owner'
  | 'authorCard___parent___internal___type'
  | 'authorCard___children'
  | 'authorCard___children___id'
  | 'authorCard___children___parent___id'
  | 'authorCard___children___parent___children'
  | 'authorCard___children___children'
  | 'authorCard___children___children___id'
  | 'authorCard___children___children___children'
  | 'authorCard___children___internal___content'
  | 'authorCard___children___internal___contentDigest'
  | 'authorCard___children___internal___description'
  | 'authorCard___children___internal___fieldOwners'
  | 'authorCard___children___internal___ignoreType'
  | 'authorCard___children___internal___mediaType'
  | 'authorCard___children___internal___owner'
  | 'authorCard___children___internal___type'
  | 'authorCard___internal___content'
  | 'authorCard___internal___contentDigest'
  | 'authorCard___internal___description'
  | 'authorCard___internal___fieldOwners'
  | 'authorCard___internal___ignoreType'
  | 'authorCard___internal___mediaType'
  | 'authorCard___internal___owner'
  | 'authorCard___internal___type'
  | 'cover___contentful_id'
  | 'cover___id'
  | 'cover___spaceId'
  | 'cover___createdAt'
  | 'cover___updatedAt'
  | 'cover___file___url'
  | 'cover___file___details___size'
  | 'cover___file___fileName'
  | 'cover___file___contentType'
  | 'cover___title'
  | 'cover___description'
  | 'cover___node_locale'
  | 'cover___sys___type'
  | 'cover___sys___revision'
  | 'cover___fields___excerpt'
  | 'cover___fields___readingTime'
  | 'cover___fields___language'
  | 'cover___fields___order'
  | 'cover___fixed___base64'
  | 'cover___fixed___tracedSVG'
  | 'cover___fixed___aspectRatio'
  | 'cover___fixed___width'
  | 'cover___fixed___height'
  | 'cover___fixed___src'
  | 'cover___fixed___srcSet'
  | 'cover___fixed___srcWebp'
  | 'cover___fixed___srcSetWebp'
  | 'cover___resolutions___base64'
  | 'cover___resolutions___tracedSVG'
  | 'cover___resolutions___aspectRatio'
  | 'cover___resolutions___width'
  | 'cover___resolutions___height'
  | 'cover___resolutions___src'
  | 'cover___resolutions___srcSet'
  | 'cover___resolutions___srcWebp'
  | 'cover___resolutions___srcSetWebp'
  | 'cover___fluid___base64'
  | 'cover___fluid___tracedSVG'
  | 'cover___fluid___aspectRatio'
  | 'cover___fluid___src'
  | 'cover___fluid___srcSet'
  | 'cover___fluid___srcWebp'
  | 'cover___fluid___srcSetWebp'
  | 'cover___fluid___sizes'
  | 'cover___sizes___base64'
  | 'cover___sizes___tracedSVG'
  | 'cover___sizes___aspectRatio'
  | 'cover___sizes___src'
  | 'cover___sizes___srcSet'
  | 'cover___sizes___srcWebp'
  | 'cover___sizes___srcSetWebp'
  | 'cover___sizes___sizes'
  | 'cover___gatsbyImageData'
  | 'cover___resize___base64'
  | 'cover___resize___tracedSVG'
  | 'cover___resize___src'
  | 'cover___resize___width'
  | 'cover___resize___height'
  | 'cover___resize___aspectRatio'
  | 'cover___parent___id'
  | 'cover___parent___parent___id'
  | 'cover___parent___parent___children'
  | 'cover___parent___children'
  | 'cover___parent___children___id'
  | 'cover___parent___children___children'
  | 'cover___parent___internal___content'
  | 'cover___parent___internal___contentDigest'
  | 'cover___parent___internal___description'
  | 'cover___parent___internal___fieldOwners'
  | 'cover___parent___internal___ignoreType'
  | 'cover___parent___internal___mediaType'
  | 'cover___parent___internal___owner'
  | 'cover___parent___internal___type'
  | 'cover___children'
  | 'cover___children___id'
  | 'cover___children___parent___id'
  | 'cover___children___parent___children'
  | 'cover___children___children'
  | 'cover___children___children___id'
  | 'cover___children___children___children'
  | 'cover___children___internal___content'
  | 'cover___children___internal___contentDigest'
  | 'cover___children___internal___description'
  | 'cover___children___internal___fieldOwners'
  | 'cover___children___internal___ignoreType'
  | 'cover___children___internal___mediaType'
  | 'cover___children___internal___owner'
  | 'cover___children___internal___type'
  | 'cover___internal___content'
  | 'cover___internal___contentDigest'
  | 'cover___internal___description'
  | 'cover___internal___fieldOwners'
  | 'cover___internal___ignoreType'
  | 'cover___internal___mediaType'
  | 'cover___internal___owner'
  | 'cover___internal___type'
  | 'section___contentful_id'
  | 'section___id'
  | 'section___node_locale'
  | 'section___order'
  | 'section___title'
  | 'section___lesson'
  | 'section___lesson___contentful_id'
  | 'section___lesson___id'
  | 'section___lesson___node_locale'
  | 'section___lesson___lessonName'
  | 'section___lesson___slug'
  | 'section___lesson___keywords'
  | 'section___lesson___author'
  | 'section___lesson___lessonContent___raw'
  | 'section___lesson___lessonContent___references'
  | 'section___lesson___additionalInformation___raw'
  | 'section___lesson___stage'
  | 'section___lesson___authorCard'
  | 'section___lesson___authorCard___contentful_id'
  | 'section___lesson___authorCard___id'
  | 'section___lesson___authorCard___node_locale'
  | 'section___lesson___authorCard___slug'
  | 'section___lesson___authorCard___name'
  | 'section___lesson___authorCard___credentials'
  | 'section___lesson___authorCard___spaceId'
  | 'section___lesson___authorCard___createdAt'
  | 'section___lesson___authorCard___updatedAt'
  | 'section___lesson___authorCard___lesson'
  | 'section___lesson___authorCard___children'
  | 'section___lesson___cover___contentful_id'
  | 'section___lesson___cover___id'
  | 'section___lesson___cover___spaceId'
  | 'section___lesson___cover___createdAt'
  | 'section___lesson___cover___updatedAt'
  | 'section___lesson___cover___title'
  | 'section___lesson___cover___description'
  | 'section___lesson___cover___node_locale'
  | 'section___lesson___cover___gatsbyImageData'
  | 'section___lesson___cover___children'
  | 'section___lesson___section___contentful_id'
  | 'section___lesson___section___id'
  | 'section___lesson___section___node_locale'
  | 'section___lesson___section___order'
  | 'section___lesson___section___title'
  | 'section___lesson___section___lesson'
  | 'section___lesson___section___spaceId'
  | 'section___lesson___section___createdAt'
  | 'section___lesson___section___updatedAt'
  | 'section___lesson___section___children'
  | 'section___lesson___habit'
  | 'section___lesson___habit___contentful_id'
  | 'section___lesson___habit___id'
  | 'section___lesson___habit___node_locale'
  | 'section___lesson___habit___title'
  | 'section___lesson___habit___slug'
  | 'section___lesson___habit___period'
  | 'section___lesson___habit___lesson'
  | 'section___lesson___habit___spaceId'
  | 'section___lesson___habit___createdAt'
  | 'section___lesson___habit___updatedAt'
  | 'section___lesson___habit___children'
  | 'section___lesson___week'
  | 'section___lesson___week___contentful_id'
  | 'section___lesson___week___id'
  | 'section___lesson___week___node_locale'
  | 'section___lesson___week___order'
  | 'section___lesson___week___weekName'
  | 'section___lesson___week___slug'
  | 'section___lesson___week___intro'
  | 'section___lesson___week___taskCount'
  | 'section___lesson___week___locked'
  | 'section___lesson___week___duration'
  | 'section___lesson___week___lessons'
  | 'section___lesson___week___spaceId'
  | 'section___lesson___week___createdAt'
  | 'section___lesson___week___updatedAt'
  | 'section___lesson___week___children'
  | 'section___lesson___weights___id'
  | 'section___lesson___weights___children'
  | 'section___lesson___weights___jetlag'
  | 'section___lesson___weights___duration'
  | 'section___lesson___weights___efficiency'
  | 'section___lesson___weights___consistency'
  | 'section___lesson___spaceId'
  | 'section___lesson___createdAt'
  | 'section___lesson___updatedAt'
  | 'section___lesson___sys___type'
  | 'section___lesson___sys___revision'
  | 'section___lesson___fields___excerpt'
  | 'section___lesson___fields___readingTime'
  | 'section___lesson___fields___language'
  | 'section___lesson___fields___order'
  | 'section___lesson___customComplete'
  | 'section___lesson___metalesson'
  | 'section___lesson___metalesson___contentful_id'
  | 'section___lesson___metalesson___id'
  | 'section___lesson___metalesson___node_locale'
  | 'section___lesson___metalesson___title'
  | 'section___lesson___metalesson___slug'
  | 'section___lesson___metalesson___keywords'
  | 'section___lesson___metalesson___lessons'
  | 'section___lesson___metalesson___relatedContent'
  | 'section___lesson___metalesson___spaceId'
  | 'section___lesson___metalesson___createdAt'
  | 'section___lesson___metalesson___updatedAt'
  | 'section___lesson___metalesson___children'
  | 'section___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'section___lesson___childrenContentfulLessonWeightsJsonNode___id'
  | 'section___lesson___childrenContentfulLessonWeightsJsonNode___children'
  | 'section___lesson___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'section___lesson___childrenContentfulLessonWeightsJsonNode___duration'
  | 'section___lesson___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'section___lesson___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___id'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___children'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'section___lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'section___lesson___parent___id'
  | 'section___lesson___parent___children'
  | 'section___lesson___children'
  | 'section___lesson___children___id'
  | 'section___lesson___children___children'
  | 'section___lesson___internal___content'
  | 'section___lesson___internal___contentDigest'
  | 'section___lesson___internal___description'
  | 'section___lesson___internal___fieldOwners'
  | 'section___lesson___internal___ignoreType'
  | 'section___lesson___internal___mediaType'
  | 'section___lesson___internal___owner'
  | 'section___lesson___internal___type'
  | 'section___spaceId'
  | 'section___createdAt'
  | 'section___updatedAt'
  | 'section___sys___type'
  | 'section___sys___revision'
  | 'section___fields___excerpt'
  | 'section___fields___readingTime'
  | 'section___fields___language'
  | 'section___fields___order'
  | 'section___description___raw'
  | 'section___parent___id'
  | 'section___parent___parent___id'
  | 'section___parent___parent___children'
  | 'section___parent___children'
  | 'section___parent___children___id'
  | 'section___parent___children___children'
  | 'section___parent___internal___content'
  | 'section___parent___internal___contentDigest'
  | 'section___parent___internal___description'
  | 'section___parent___internal___fieldOwners'
  | 'section___parent___internal___ignoreType'
  | 'section___parent___internal___mediaType'
  | 'section___parent___internal___owner'
  | 'section___parent___internal___type'
  | 'section___children'
  | 'section___children___id'
  | 'section___children___parent___id'
  | 'section___children___parent___children'
  | 'section___children___children'
  | 'section___children___children___id'
  | 'section___children___children___children'
  | 'section___children___internal___content'
  | 'section___children___internal___contentDigest'
  | 'section___children___internal___description'
  | 'section___children___internal___fieldOwners'
  | 'section___children___internal___ignoreType'
  | 'section___children___internal___mediaType'
  | 'section___children___internal___owner'
  | 'section___children___internal___type'
  | 'section___internal___content'
  | 'section___internal___contentDigest'
  | 'section___internal___description'
  | 'section___internal___fieldOwners'
  | 'section___internal___ignoreType'
  | 'section___internal___mediaType'
  | 'section___internal___owner'
  | 'section___internal___type'
  | 'habit'
  | 'habit___contentful_id'
  | 'habit___id'
  | 'habit___node_locale'
  | 'habit___title'
  | 'habit___slug'
  | 'habit___period'
  | 'habit___description___raw'
  | 'habit___description___references'
  | 'habit___description___references___contentful_id'
  | 'habit___description___references___id'
  | 'habit___description___references___node_locale'
  | 'habit___description___references___title'
  | 'habit___description___references___slug'
  | 'habit___description___references___period'
  | 'habit___description___references___lesson'
  | 'habit___description___references___spaceId'
  | 'habit___description___references___createdAt'
  | 'habit___description___references___updatedAt'
  | 'habit___description___references___children'
  | 'habit___lesson'
  | 'habit___lesson___contentful_id'
  | 'habit___lesson___id'
  | 'habit___lesson___node_locale'
  | 'habit___lesson___lessonName'
  | 'habit___lesson___slug'
  | 'habit___lesson___keywords'
  | 'habit___lesson___author'
  | 'habit___lesson___lessonContent___raw'
  | 'habit___lesson___lessonContent___references'
  | 'habit___lesson___additionalInformation___raw'
  | 'habit___lesson___stage'
  | 'habit___lesson___authorCard'
  | 'habit___lesson___authorCard___contentful_id'
  | 'habit___lesson___authorCard___id'
  | 'habit___lesson___authorCard___node_locale'
  | 'habit___lesson___authorCard___slug'
  | 'habit___lesson___authorCard___name'
  | 'habit___lesson___authorCard___credentials'
  | 'habit___lesson___authorCard___spaceId'
  | 'habit___lesson___authorCard___createdAt'
  | 'habit___lesson___authorCard___updatedAt'
  | 'habit___lesson___authorCard___lesson'
  | 'habit___lesson___authorCard___children'
  | 'habit___lesson___cover___contentful_id'
  | 'habit___lesson___cover___id'
  | 'habit___lesson___cover___spaceId'
  | 'habit___lesson___cover___createdAt'
  | 'habit___lesson___cover___updatedAt'
  | 'habit___lesson___cover___title'
  | 'habit___lesson___cover___description'
  | 'habit___lesson___cover___node_locale'
  | 'habit___lesson___cover___gatsbyImageData'
  | 'habit___lesson___cover___children'
  | 'habit___lesson___section___contentful_id'
  | 'habit___lesson___section___id'
  | 'habit___lesson___section___node_locale'
  | 'habit___lesson___section___order'
  | 'habit___lesson___section___title'
  | 'habit___lesson___section___lesson'
  | 'habit___lesson___section___spaceId'
  | 'habit___lesson___section___createdAt'
  | 'habit___lesson___section___updatedAt'
  | 'habit___lesson___section___children'
  | 'habit___lesson___habit'
  | 'habit___lesson___habit___contentful_id'
  | 'habit___lesson___habit___id'
  | 'habit___lesson___habit___node_locale'
  | 'habit___lesson___habit___title'
  | 'habit___lesson___habit___slug'
  | 'habit___lesson___habit___period'
  | 'habit___lesson___habit___lesson'
  | 'habit___lesson___habit___spaceId'
  | 'habit___lesson___habit___createdAt'
  | 'habit___lesson___habit___updatedAt'
  | 'habit___lesson___habit___children'
  | 'habit___lesson___week'
  | 'habit___lesson___week___contentful_id'
  | 'habit___lesson___week___id'
  | 'habit___lesson___week___node_locale'
  | 'habit___lesson___week___order'
  | 'habit___lesson___week___weekName'
  | 'habit___lesson___week___slug'
  | 'habit___lesson___week___intro'
  | 'habit___lesson___week___taskCount'
  | 'habit___lesson___week___locked'
  | 'habit___lesson___week___duration'
  | 'habit___lesson___week___lessons'
  | 'habit___lesson___week___spaceId'
  | 'habit___lesson___week___createdAt'
  | 'habit___lesson___week___updatedAt'
  | 'habit___lesson___week___children'
  | 'habit___lesson___weights___id'
  | 'habit___lesson___weights___children'
  | 'habit___lesson___weights___jetlag'
  | 'habit___lesson___weights___duration'
  | 'habit___lesson___weights___efficiency'
  | 'habit___lesson___weights___consistency'
  | 'habit___lesson___spaceId'
  | 'habit___lesson___createdAt'
  | 'habit___lesson___updatedAt'
  | 'habit___lesson___sys___type'
  | 'habit___lesson___sys___revision'
  | 'habit___lesson___fields___excerpt'
  | 'habit___lesson___fields___readingTime'
  | 'habit___lesson___fields___language'
  | 'habit___lesson___fields___order'
  | 'habit___lesson___customComplete'
  | 'habit___lesson___metalesson'
  | 'habit___lesson___metalesson___contentful_id'
  | 'habit___lesson___metalesson___id'
  | 'habit___lesson___metalesson___node_locale'
  | 'habit___lesson___metalesson___title'
  | 'habit___lesson___metalesson___slug'
  | 'habit___lesson___metalesson___keywords'
  | 'habit___lesson___metalesson___lessons'
  | 'habit___lesson___metalesson___relatedContent'
  | 'habit___lesson___metalesson___spaceId'
  | 'habit___lesson___metalesson___createdAt'
  | 'habit___lesson___metalesson___updatedAt'
  | 'habit___lesson___metalesson___children'
  | 'habit___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'habit___lesson___childrenContentfulLessonWeightsJsonNode___id'
  | 'habit___lesson___childrenContentfulLessonWeightsJsonNode___children'
  | 'habit___lesson___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'habit___lesson___childrenContentfulLessonWeightsJsonNode___duration'
  | 'habit___lesson___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'habit___lesson___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___id'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___children'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'habit___lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'habit___lesson___parent___id'
  | 'habit___lesson___parent___children'
  | 'habit___lesson___children'
  | 'habit___lesson___children___id'
  | 'habit___lesson___children___children'
  | 'habit___lesson___internal___content'
  | 'habit___lesson___internal___contentDigest'
  | 'habit___lesson___internal___description'
  | 'habit___lesson___internal___fieldOwners'
  | 'habit___lesson___internal___ignoreType'
  | 'habit___lesson___internal___mediaType'
  | 'habit___lesson___internal___owner'
  | 'habit___lesson___internal___type'
  | 'habit___spaceId'
  | 'habit___createdAt'
  | 'habit___updatedAt'
  | 'habit___sys___type'
  | 'habit___sys___revision'
  | 'habit___fields___excerpt'
  | 'habit___fields___readingTime'
  | 'habit___fields___language'
  | 'habit___fields___order'
  | 'habit___parent___id'
  | 'habit___parent___parent___id'
  | 'habit___parent___parent___children'
  | 'habit___parent___children'
  | 'habit___parent___children___id'
  | 'habit___parent___children___children'
  | 'habit___parent___internal___content'
  | 'habit___parent___internal___contentDigest'
  | 'habit___parent___internal___description'
  | 'habit___parent___internal___fieldOwners'
  | 'habit___parent___internal___ignoreType'
  | 'habit___parent___internal___mediaType'
  | 'habit___parent___internal___owner'
  | 'habit___parent___internal___type'
  | 'habit___children'
  | 'habit___children___id'
  | 'habit___children___parent___id'
  | 'habit___children___parent___children'
  | 'habit___children___children'
  | 'habit___children___children___id'
  | 'habit___children___children___children'
  | 'habit___children___internal___content'
  | 'habit___children___internal___contentDigest'
  | 'habit___children___internal___description'
  | 'habit___children___internal___fieldOwners'
  | 'habit___children___internal___ignoreType'
  | 'habit___children___internal___mediaType'
  | 'habit___children___internal___owner'
  | 'habit___children___internal___type'
  | 'habit___internal___content'
  | 'habit___internal___contentDigest'
  | 'habit___internal___description'
  | 'habit___internal___fieldOwners'
  | 'habit___internal___ignoreType'
  | 'habit___internal___mediaType'
  | 'habit___internal___owner'
  | 'habit___internal___type'
  | 'week'
  | 'week___contentful_id'
  | 'week___id'
  | 'week___node_locale'
  | 'week___order'
  | 'week___weekName'
  | 'week___slug'
  | 'week___intro'
  | 'week___weekDescription___raw'
  | 'week___taskCount'
  | 'week___locked'
  | 'week___duration'
  | 'week___coverPhoto___contentful_id'
  | 'week___coverPhoto___id'
  | 'week___coverPhoto___spaceId'
  | 'week___coverPhoto___createdAt'
  | 'week___coverPhoto___updatedAt'
  | 'week___coverPhoto___file___url'
  | 'week___coverPhoto___file___fileName'
  | 'week___coverPhoto___file___contentType'
  | 'week___coverPhoto___title'
  | 'week___coverPhoto___description'
  | 'week___coverPhoto___node_locale'
  | 'week___coverPhoto___sys___type'
  | 'week___coverPhoto___sys___revision'
  | 'week___coverPhoto___fields___excerpt'
  | 'week___coverPhoto___fields___readingTime'
  | 'week___coverPhoto___fields___language'
  | 'week___coverPhoto___fields___order'
  | 'week___coverPhoto___fixed___base64'
  | 'week___coverPhoto___fixed___tracedSVG'
  | 'week___coverPhoto___fixed___aspectRatio'
  | 'week___coverPhoto___fixed___width'
  | 'week___coverPhoto___fixed___height'
  | 'week___coverPhoto___fixed___src'
  | 'week___coverPhoto___fixed___srcSet'
  | 'week___coverPhoto___fixed___srcWebp'
  | 'week___coverPhoto___fixed___srcSetWebp'
  | 'week___coverPhoto___resolutions___base64'
  | 'week___coverPhoto___resolutions___tracedSVG'
  | 'week___coverPhoto___resolutions___aspectRatio'
  | 'week___coverPhoto___resolutions___width'
  | 'week___coverPhoto___resolutions___height'
  | 'week___coverPhoto___resolutions___src'
  | 'week___coverPhoto___resolutions___srcSet'
  | 'week___coverPhoto___resolutions___srcWebp'
  | 'week___coverPhoto___resolutions___srcSetWebp'
  | 'week___coverPhoto___fluid___base64'
  | 'week___coverPhoto___fluid___tracedSVG'
  | 'week___coverPhoto___fluid___aspectRatio'
  | 'week___coverPhoto___fluid___src'
  | 'week___coverPhoto___fluid___srcSet'
  | 'week___coverPhoto___fluid___srcWebp'
  | 'week___coverPhoto___fluid___srcSetWebp'
  | 'week___coverPhoto___fluid___sizes'
  | 'week___coverPhoto___sizes___base64'
  | 'week___coverPhoto___sizes___tracedSVG'
  | 'week___coverPhoto___sizes___aspectRatio'
  | 'week___coverPhoto___sizes___src'
  | 'week___coverPhoto___sizes___srcSet'
  | 'week___coverPhoto___sizes___srcWebp'
  | 'week___coverPhoto___sizes___srcSetWebp'
  | 'week___coverPhoto___sizes___sizes'
  | 'week___coverPhoto___gatsbyImageData'
  | 'week___coverPhoto___resize___base64'
  | 'week___coverPhoto___resize___tracedSVG'
  | 'week___coverPhoto___resize___src'
  | 'week___coverPhoto___resize___width'
  | 'week___coverPhoto___resize___height'
  | 'week___coverPhoto___resize___aspectRatio'
  | 'week___coverPhoto___parent___id'
  | 'week___coverPhoto___parent___children'
  | 'week___coverPhoto___children'
  | 'week___coverPhoto___children___id'
  | 'week___coverPhoto___children___children'
  | 'week___coverPhoto___internal___content'
  | 'week___coverPhoto___internal___contentDigest'
  | 'week___coverPhoto___internal___description'
  | 'week___coverPhoto___internal___fieldOwners'
  | 'week___coverPhoto___internal___ignoreType'
  | 'week___coverPhoto___internal___mediaType'
  | 'week___coverPhoto___internal___owner'
  | 'week___coverPhoto___internal___type'
  | 'week___lessons'
  | 'week___lessons___contentful_id'
  | 'week___lessons___id'
  | 'week___lessons___node_locale'
  | 'week___lessons___lessonName'
  | 'week___lessons___slug'
  | 'week___lessons___keywords'
  | 'week___lessons___author'
  | 'week___lessons___lessonContent___raw'
  | 'week___lessons___lessonContent___references'
  | 'week___lessons___additionalInformation___raw'
  | 'week___lessons___stage'
  | 'week___lessons___authorCard'
  | 'week___lessons___authorCard___contentful_id'
  | 'week___lessons___authorCard___id'
  | 'week___lessons___authorCard___node_locale'
  | 'week___lessons___authorCard___slug'
  | 'week___lessons___authorCard___name'
  | 'week___lessons___authorCard___credentials'
  | 'week___lessons___authorCard___spaceId'
  | 'week___lessons___authorCard___createdAt'
  | 'week___lessons___authorCard___updatedAt'
  | 'week___lessons___authorCard___lesson'
  | 'week___lessons___authorCard___children'
  | 'week___lessons___cover___contentful_id'
  | 'week___lessons___cover___id'
  | 'week___lessons___cover___spaceId'
  | 'week___lessons___cover___createdAt'
  | 'week___lessons___cover___updatedAt'
  | 'week___lessons___cover___title'
  | 'week___lessons___cover___description'
  | 'week___lessons___cover___node_locale'
  | 'week___lessons___cover___gatsbyImageData'
  | 'week___lessons___cover___children'
  | 'week___lessons___section___contentful_id'
  | 'week___lessons___section___id'
  | 'week___lessons___section___node_locale'
  | 'week___lessons___section___order'
  | 'week___lessons___section___title'
  | 'week___lessons___section___lesson'
  | 'week___lessons___section___spaceId'
  | 'week___lessons___section___createdAt'
  | 'week___lessons___section___updatedAt'
  | 'week___lessons___section___children'
  | 'week___lessons___habit'
  | 'week___lessons___habit___contentful_id'
  | 'week___lessons___habit___id'
  | 'week___lessons___habit___node_locale'
  | 'week___lessons___habit___title'
  | 'week___lessons___habit___slug'
  | 'week___lessons___habit___period'
  | 'week___lessons___habit___lesson'
  | 'week___lessons___habit___spaceId'
  | 'week___lessons___habit___createdAt'
  | 'week___lessons___habit___updatedAt'
  | 'week___lessons___habit___children'
  | 'week___lessons___week'
  | 'week___lessons___week___contentful_id'
  | 'week___lessons___week___id'
  | 'week___lessons___week___node_locale'
  | 'week___lessons___week___order'
  | 'week___lessons___week___weekName'
  | 'week___lessons___week___slug'
  | 'week___lessons___week___intro'
  | 'week___lessons___week___taskCount'
  | 'week___lessons___week___locked'
  | 'week___lessons___week___duration'
  | 'week___lessons___week___lessons'
  | 'week___lessons___week___spaceId'
  | 'week___lessons___week___createdAt'
  | 'week___lessons___week___updatedAt'
  | 'week___lessons___week___children'
  | 'week___lessons___weights___id'
  | 'week___lessons___weights___children'
  | 'week___lessons___weights___jetlag'
  | 'week___lessons___weights___duration'
  | 'week___lessons___weights___efficiency'
  | 'week___lessons___weights___consistency'
  | 'week___lessons___spaceId'
  | 'week___lessons___createdAt'
  | 'week___lessons___updatedAt'
  | 'week___lessons___sys___type'
  | 'week___lessons___sys___revision'
  | 'week___lessons___fields___excerpt'
  | 'week___lessons___fields___readingTime'
  | 'week___lessons___fields___language'
  | 'week___lessons___fields___order'
  | 'week___lessons___customComplete'
  | 'week___lessons___metalesson'
  | 'week___lessons___metalesson___contentful_id'
  | 'week___lessons___metalesson___id'
  | 'week___lessons___metalesson___node_locale'
  | 'week___lessons___metalesson___title'
  | 'week___lessons___metalesson___slug'
  | 'week___lessons___metalesson___keywords'
  | 'week___lessons___metalesson___lessons'
  | 'week___lessons___metalesson___relatedContent'
  | 'week___lessons___metalesson___spaceId'
  | 'week___lessons___metalesson___createdAt'
  | 'week___lessons___metalesson___updatedAt'
  | 'week___lessons___metalesson___children'
  | 'week___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'week___lessons___childrenContentfulLessonWeightsJsonNode___id'
  | 'week___lessons___childrenContentfulLessonWeightsJsonNode___children'
  | 'week___lessons___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'week___lessons___childrenContentfulLessonWeightsJsonNode___duration'
  | 'week___lessons___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'week___lessons___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___id'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___children'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'week___lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'week___lessons___parent___id'
  | 'week___lessons___parent___children'
  | 'week___lessons___children'
  | 'week___lessons___children___id'
  | 'week___lessons___children___children'
  | 'week___lessons___internal___content'
  | 'week___lessons___internal___contentDigest'
  | 'week___lessons___internal___description'
  | 'week___lessons___internal___fieldOwners'
  | 'week___lessons___internal___ignoreType'
  | 'week___lessons___internal___mediaType'
  | 'week___lessons___internal___owner'
  | 'week___lessons___internal___type'
  | 'week___spaceId'
  | 'week___createdAt'
  | 'week___updatedAt'
  | 'week___sys___type'
  | 'week___sys___revision'
  | 'week___fields___excerpt'
  | 'week___fields___readingTime'
  | 'week___fields___language'
  | 'week___fields___order'
  | 'week___parent___id'
  | 'week___parent___parent___id'
  | 'week___parent___parent___children'
  | 'week___parent___children'
  | 'week___parent___children___id'
  | 'week___parent___children___children'
  | 'week___parent___internal___content'
  | 'week___parent___internal___contentDigest'
  | 'week___parent___internal___description'
  | 'week___parent___internal___fieldOwners'
  | 'week___parent___internal___ignoreType'
  | 'week___parent___internal___mediaType'
  | 'week___parent___internal___owner'
  | 'week___parent___internal___type'
  | 'week___children'
  | 'week___children___id'
  | 'week___children___parent___id'
  | 'week___children___parent___children'
  | 'week___children___children'
  | 'week___children___children___id'
  | 'week___children___children___children'
  | 'week___children___internal___content'
  | 'week___children___internal___contentDigest'
  | 'week___children___internal___description'
  | 'week___children___internal___fieldOwners'
  | 'week___children___internal___ignoreType'
  | 'week___children___internal___mediaType'
  | 'week___children___internal___owner'
  | 'week___children___internal___type'
  | 'week___internal___content'
  | 'week___internal___contentDigest'
  | 'week___internal___description'
  | 'week___internal___fieldOwners'
  | 'week___internal___ignoreType'
  | 'week___internal___mediaType'
  | 'week___internal___owner'
  | 'week___internal___type'
  | 'weights___id'
  | 'weights___parent___id'
  | 'weights___parent___parent___id'
  | 'weights___parent___parent___children'
  | 'weights___parent___children'
  | 'weights___parent___children___id'
  | 'weights___parent___children___children'
  | 'weights___parent___internal___content'
  | 'weights___parent___internal___contentDigest'
  | 'weights___parent___internal___description'
  | 'weights___parent___internal___fieldOwners'
  | 'weights___parent___internal___ignoreType'
  | 'weights___parent___internal___mediaType'
  | 'weights___parent___internal___owner'
  | 'weights___parent___internal___type'
  | 'weights___children'
  | 'weights___children___id'
  | 'weights___children___parent___id'
  | 'weights___children___parent___children'
  | 'weights___children___children'
  | 'weights___children___children___id'
  | 'weights___children___children___children'
  | 'weights___children___internal___content'
  | 'weights___children___internal___contentDigest'
  | 'weights___children___internal___description'
  | 'weights___children___internal___fieldOwners'
  | 'weights___children___internal___ignoreType'
  | 'weights___children___internal___mediaType'
  | 'weights___children___internal___owner'
  | 'weights___children___internal___type'
  | 'weights___internal___content'
  | 'weights___internal___contentDigest'
  | 'weights___internal___description'
  | 'weights___internal___fieldOwners'
  | 'weights___internal___ignoreType'
  | 'weights___internal___mediaType'
  | 'weights___internal___owner'
  | 'weights___internal___type'
  | 'weights___jetlag'
  | 'weights___duration'
  | 'weights___efficiency'
  | 'weights___consistency'
  | 'weights___sys___type'
  | 'weights___fields___excerpt'
  | 'weights___fields___readingTime'
  | 'weights___fields___language'
  | 'weights___fields___order'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'customComplete'
  | 'metalesson'
  | 'metalesson___contentful_id'
  | 'metalesson___id'
  | 'metalesson___node_locale'
  | 'metalesson___title'
  | 'metalesson___slug'
  | 'metalesson___keywords'
  | 'metalesson___lessons'
  | 'metalesson___lessons___contentful_id'
  | 'metalesson___lessons___id'
  | 'metalesson___lessons___node_locale'
  | 'metalesson___lessons___lessonName'
  | 'metalesson___lessons___slug'
  | 'metalesson___lessons___keywords'
  | 'metalesson___lessons___author'
  | 'metalesson___lessons___lessonContent___raw'
  | 'metalesson___lessons___lessonContent___references'
  | 'metalesson___lessons___additionalInformation___raw'
  | 'metalesson___lessons___stage'
  | 'metalesson___lessons___authorCard'
  | 'metalesson___lessons___authorCard___contentful_id'
  | 'metalesson___lessons___authorCard___id'
  | 'metalesson___lessons___authorCard___node_locale'
  | 'metalesson___lessons___authorCard___slug'
  | 'metalesson___lessons___authorCard___name'
  | 'metalesson___lessons___authorCard___credentials'
  | 'metalesson___lessons___authorCard___spaceId'
  | 'metalesson___lessons___authorCard___createdAt'
  | 'metalesson___lessons___authorCard___updatedAt'
  | 'metalesson___lessons___authorCard___lesson'
  | 'metalesson___lessons___authorCard___children'
  | 'metalesson___lessons___cover___contentful_id'
  | 'metalesson___lessons___cover___id'
  | 'metalesson___lessons___cover___spaceId'
  | 'metalesson___lessons___cover___createdAt'
  | 'metalesson___lessons___cover___updatedAt'
  | 'metalesson___lessons___cover___title'
  | 'metalesson___lessons___cover___description'
  | 'metalesson___lessons___cover___node_locale'
  | 'metalesson___lessons___cover___gatsbyImageData'
  | 'metalesson___lessons___cover___children'
  | 'metalesson___lessons___section___contentful_id'
  | 'metalesson___lessons___section___id'
  | 'metalesson___lessons___section___node_locale'
  | 'metalesson___lessons___section___order'
  | 'metalesson___lessons___section___title'
  | 'metalesson___lessons___section___lesson'
  | 'metalesson___lessons___section___spaceId'
  | 'metalesson___lessons___section___createdAt'
  | 'metalesson___lessons___section___updatedAt'
  | 'metalesson___lessons___section___children'
  | 'metalesson___lessons___habit'
  | 'metalesson___lessons___habit___contentful_id'
  | 'metalesson___lessons___habit___id'
  | 'metalesson___lessons___habit___node_locale'
  | 'metalesson___lessons___habit___title'
  | 'metalesson___lessons___habit___slug'
  | 'metalesson___lessons___habit___period'
  | 'metalesson___lessons___habit___lesson'
  | 'metalesson___lessons___habit___spaceId'
  | 'metalesson___lessons___habit___createdAt'
  | 'metalesson___lessons___habit___updatedAt'
  | 'metalesson___lessons___habit___children'
  | 'metalesson___lessons___week'
  | 'metalesson___lessons___week___contentful_id'
  | 'metalesson___lessons___week___id'
  | 'metalesson___lessons___week___node_locale'
  | 'metalesson___lessons___week___order'
  | 'metalesson___lessons___week___weekName'
  | 'metalesson___lessons___week___slug'
  | 'metalesson___lessons___week___intro'
  | 'metalesson___lessons___week___taskCount'
  | 'metalesson___lessons___week___locked'
  | 'metalesson___lessons___week___duration'
  | 'metalesson___lessons___week___lessons'
  | 'metalesson___lessons___week___spaceId'
  | 'metalesson___lessons___week___createdAt'
  | 'metalesson___lessons___week___updatedAt'
  | 'metalesson___lessons___week___children'
  | 'metalesson___lessons___weights___id'
  | 'metalesson___lessons___weights___children'
  | 'metalesson___lessons___weights___jetlag'
  | 'metalesson___lessons___weights___duration'
  | 'metalesson___lessons___weights___efficiency'
  | 'metalesson___lessons___weights___consistency'
  | 'metalesson___lessons___spaceId'
  | 'metalesson___lessons___createdAt'
  | 'metalesson___lessons___updatedAt'
  | 'metalesson___lessons___sys___type'
  | 'metalesson___lessons___sys___revision'
  | 'metalesson___lessons___fields___excerpt'
  | 'metalesson___lessons___fields___readingTime'
  | 'metalesson___lessons___fields___language'
  | 'metalesson___lessons___fields___order'
  | 'metalesson___lessons___customComplete'
  | 'metalesson___lessons___metalesson'
  | 'metalesson___lessons___metalesson___contentful_id'
  | 'metalesson___lessons___metalesson___id'
  | 'metalesson___lessons___metalesson___node_locale'
  | 'metalesson___lessons___metalesson___title'
  | 'metalesson___lessons___metalesson___slug'
  | 'metalesson___lessons___metalesson___keywords'
  | 'metalesson___lessons___metalesson___lessons'
  | 'metalesson___lessons___metalesson___relatedContent'
  | 'metalesson___lessons___metalesson___spaceId'
  | 'metalesson___lessons___metalesson___createdAt'
  | 'metalesson___lessons___metalesson___updatedAt'
  | 'metalesson___lessons___metalesson___children'
  | 'metalesson___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'metalesson___lessons___childrenContentfulLessonWeightsJsonNode___id'
  | 'metalesson___lessons___childrenContentfulLessonWeightsJsonNode___children'
  | 'metalesson___lessons___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'metalesson___lessons___childrenContentfulLessonWeightsJsonNode___duration'
  | 'metalesson___lessons___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'metalesson___lessons___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___id'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___children'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'metalesson___lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'metalesson___lessons___parent___id'
  | 'metalesson___lessons___parent___children'
  | 'metalesson___lessons___children'
  | 'metalesson___lessons___children___id'
  | 'metalesson___lessons___children___children'
  | 'metalesson___lessons___internal___content'
  | 'metalesson___lessons___internal___contentDigest'
  | 'metalesson___lessons___internal___description'
  | 'metalesson___lessons___internal___fieldOwners'
  | 'metalesson___lessons___internal___ignoreType'
  | 'metalesson___lessons___internal___mediaType'
  | 'metalesson___lessons___internal___owner'
  | 'metalesson___lessons___internal___type'
  | 'metalesson___relatedContent'
  | 'metalesson___relatedContent___contentful_id'
  | 'metalesson___relatedContent___id'
  | 'metalesson___relatedContent___node_locale'
  | 'metalesson___relatedContent___lessonName'
  | 'metalesson___relatedContent___slug'
  | 'metalesson___relatedContent___keywords'
  | 'metalesson___relatedContent___author'
  | 'metalesson___relatedContent___lessonContent___raw'
  | 'metalesson___relatedContent___lessonContent___references'
  | 'metalesson___relatedContent___additionalInformation___raw'
  | 'metalesson___relatedContent___stage'
  | 'metalesson___relatedContent___authorCard'
  | 'metalesson___relatedContent___authorCard___contentful_id'
  | 'metalesson___relatedContent___authorCard___id'
  | 'metalesson___relatedContent___authorCard___node_locale'
  | 'metalesson___relatedContent___authorCard___slug'
  | 'metalesson___relatedContent___authorCard___name'
  | 'metalesson___relatedContent___authorCard___credentials'
  | 'metalesson___relatedContent___authorCard___spaceId'
  | 'metalesson___relatedContent___authorCard___createdAt'
  | 'metalesson___relatedContent___authorCard___updatedAt'
  | 'metalesson___relatedContent___authorCard___lesson'
  | 'metalesson___relatedContent___authorCard___children'
  | 'metalesson___relatedContent___cover___contentful_id'
  | 'metalesson___relatedContent___cover___id'
  | 'metalesson___relatedContent___cover___spaceId'
  | 'metalesson___relatedContent___cover___createdAt'
  | 'metalesson___relatedContent___cover___updatedAt'
  | 'metalesson___relatedContent___cover___title'
  | 'metalesson___relatedContent___cover___description'
  | 'metalesson___relatedContent___cover___node_locale'
  | 'metalesson___relatedContent___cover___gatsbyImageData'
  | 'metalesson___relatedContent___cover___children'
  | 'metalesson___relatedContent___section___contentful_id'
  | 'metalesson___relatedContent___section___id'
  | 'metalesson___relatedContent___section___node_locale'
  | 'metalesson___relatedContent___section___order'
  | 'metalesson___relatedContent___section___title'
  | 'metalesson___relatedContent___section___lesson'
  | 'metalesson___relatedContent___section___spaceId'
  | 'metalesson___relatedContent___section___createdAt'
  | 'metalesson___relatedContent___section___updatedAt'
  | 'metalesson___relatedContent___section___children'
  | 'metalesson___relatedContent___habit'
  | 'metalesson___relatedContent___habit___contentful_id'
  | 'metalesson___relatedContent___habit___id'
  | 'metalesson___relatedContent___habit___node_locale'
  | 'metalesson___relatedContent___habit___title'
  | 'metalesson___relatedContent___habit___slug'
  | 'metalesson___relatedContent___habit___period'
  | 'metalesson___relatedContent___habit___lesson'
  | 'metalesson___relatedContent___habit___spaceId'
  | 'metalesson___relatedContent___habit___createdAt'
  | 'metalesson___relatedContent___habit___updatedAt'
  | 'metalesson___relatedContent___habit___children'
  | 'metalesson___relatedContent___week'
  | 'metalesson___relatedContent___week___contentful_id'
  | 'metalesson___relatedContent___week___id'
  | 'metalesson___relatedContent___week___node_locale'
  | 'metalesson___relatedContent___week___order'
  | 'metalesson___relatedContent___week___weekName'
  | 'metalesson___relatedContent___week___slug'
  | 'metalesson___relatedContent___week___intro'
  | 'metalesson___relatedContent___week___taskCount'
  | 'metalesson___relatedContent___week___locked'
  | 'metalesson___relatedContent___week___duration'
  | 'metalesson___relatedContent___week___lessons'
  | 'metalesson___relatedContent___week___spaceId'
  | 'metalesson___relatedContent___week___createdAt'
  | 'metalesson___relatedContent___week___updatedAt'
  | 'metalesson___relatedContent___week___children'
  | 'metalesson___relatedContent___weights___id'
  | 'metalesson___relatedContent___weights___children'
  | 'metalesson___relatedContent___weights___jetlag'
  | 'metalesson___relatedContent___weights___duration'
  | 'metalesson___relatedContent___weights___efficiency'
  | 'metalesson___relatedContent___weights___consistency'
  | 'metalesson___relatedContent___spaceId'
  | 'metalesson___relatedContent___createdAt'
  | 'metalesson___relatedContent___updatedAt'
  | 'metalesson___relatedContent___sys___type'
  | 'metalesson___relatedContent___sys___revision'
  | 'metalesson___relatedContent___fields___excerpt'
  | 'metalesson___relatedContent___fields___readingTime'
  | 'metalesson___relatedContent___fields___language'
  | 'metalesson___relatedContent___fields___order'
  | 'metalesson___relatedContent___customComplete'
  | 'metalesson___relatedContent___metalesson'
  | 'metalesson___relatedContent___metalesson___contentful_id'
  | 'metalesson___relatedContent___metalesson___id'
  | 'metalesson___relatedContent___metalesson___node_locale'
  | 'metalesson___relatedContent___metalesson___title'
  | 'metalesson___relatedContent___metalesson___slug'
  | 'metalesson___relatedContent___metalesson___keywords'
  | 'metalesson___relatedContent___metalesson___lessons'
  | 'metalesson___relatedContent___metalesson___relatedContent'
  | 'metalesson___relatedContent___metalesson___spaceId'
  | 'metalesson___relatedContent___metalesson___createdAt'
  | 'metalesson___relatedContent___metalesson___updatedAt'
  | 'metalesson___relatedContent___metalesson___children'
  | 'metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode___id'
  | 'metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode___children'
  | 'metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode___duration'
  | 'metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___id'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___children'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___jetlag'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___duration'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___efficiency'
  | 'metalesson___relatedContent___childContentfulLessonWeightsJsonNode___consistency'
  | 'metalesson___relatedContent___parent___id'
  | 'metalesson___relatedContent___parent___children'
  | 'metalesson___relatedContent___children'
  | 'metalesson___relatedContent___children___id'
  | 'metalesson___relatedContent___children___children'
  | 'metalesson___relatedContent___internal___content'
  | 'metalesson___relatedContent___internal___contentDigest'
  | 'metalesson___relatedContent___internal___description'
  | 'metalesson___relatedContent___internal___fieldOwners'
  | 'metalesson___relatedContent___internal___ignoreType'
  | 'metalesson___relatedContent___internal___mediaType'
  | 'metalesson___relatedContent___internal___owner'
  | 'metalesson___relatedContent___internal___type'
  | 'metalesson___spaceId'
  | 'metalesson___createdAt'
  | 'metalesson___updatedAt'
  | 'metalesson___sys___type'
  | 'metalesson___sys___revision'
  | 'metalesson___fields___excerpt'
  | 'metalesson___fields___readingTime'
  | 'metalesson___fields___language'
  | 'metalesson___fields___order'
  | 'metalesson___parent___id'
  | 'metalesson___parent___parent___id'
  | 'metalesson___parent___parent___children'
  | 'metalesson___parent___children'
  | 'metalesson___parent___children___id'
  | 'metalesson___parent___children___children'
  | 'metalesson___parent___internal___content'
  | 'metalesson___parent___internal___contentDigest'
  | 'metalesson___parent___internal___description'
  | 'metalesson___parent___internal___fieldOwners'
  | 'metalesson___parent___internal___ignoreType'
  | 'metalesson___parent___internal___mediaType'
  | 'metalesson___parent___internal___owner'
  | 'metalesson___parent___internal___type'
  | 'metalesson___children'
  | 'metalesson___children___id'
  | 'metalesson___children___parent___id'
  | 'metalesson___children___parent___children'
  | 'metalesson___children___children'
  | 'metalesson___children___children___id'
  | 'metalesson___children___children___children'
  | 'metalesson___children___internal___content'
  | 'metalesson___children___internal___contentDigest'
  | 'metalesson___children___internal___description'
  | 'metalesson___children___internal___fieldOwners'
  | 'metalesson___children___internal___ignoreType'
  | 'metalesson___children___internal___mediaType'
  | 'metalesson___children___internal___owner'
  | 'metalesson___children___internal___type'
  | 'metalesson___internal___content'
  | 'metalesson___internal___contentDigest'
  | 'metalesson___internal___description'
  | 'metalesson___internal___fieldOwners'
  | 'metalesson___internal___ignoreType'
  | 'metalesson___internal___mediaType'
  | 'metalesson___internal___owner'
  | 'metalesson___internal___type'
  | 'childrenContentfulLessonWeightsJsonNode'
  | 'childrenContentfulLessonWeightsJsonNode___id'
  | 'childrenContentfulLessonWeightsJsonNode___parent___id'
  | 'childrenContentfulLessonWeightsJsonNode___parent___parent___id'
  | 'childrenContentfulLessonWeightsJsonNode___parent___parent___children'
  | 'childrenContentfulLessonWeightsJsonNode___parent___children'
  | 'childrenContentfulLessonWeightsJsonNode___parent___children___id'
  | 'childrenContentfulLessonWeightsJsonNode___parent___children___children'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___content'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___contentDigest'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___description'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___fieldOwners'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___ignoreType'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___mediaType'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___owner'
  | 'childrenContentfulLessonWeightsJsonNode___parent___internal___type'
  | 'childrenContentfulLessonWeightsJsonNode___children'
  | 'childrenContentfulLessonWeightsJsonNode___children___id'
  | 'childrenContentfulLessonWeightsJsonNode___children___parent___id'
  | 'childrenContentfulLessonWeightsJsonNode___children___parent___children'
  | 'childrenContentfulLessonWeightsJsonNode___children___children'
  | 'childrenContentfulLessonWeightsJsonNode___children___children___id'
  | 'childrenContentfulLessonWeightsJsonNode___children___children___children'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___content'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___contentDigest'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___description'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___fieldOwners'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___ignoreType'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___mediaType'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___owner'
  | 'childrenContentfulLessonWeightsJsonNode___children___internal___type'
  | 'childrenContentfulLessonWeightsJsonNode___internal___content'
  | 'childrenContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'childrenContentfulLessonWeightsJsonNode___internal___description'
  | 'childrenContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'childrenContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'childrenContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'childrenContentfulLessonWeightsJsonNode___internal___owner'
  | 'childrenContentfulLessonWeightsJsonNode___internal___type'
  | 'childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'childrenContentfulLessonWeightsJsonNode___duration'
  | 'childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'childrenContentfulLessonWeightsJsonNode___consistency'
  | 'childrenContentfulLessonWeightsJsonNode___sys___type'
  | 'childrenContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'childrenContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'childrenContentfulLessonWeightsJsonNode___fields___language'
  | 'childrenContentfulLessonWeightsJsonNode___fields___order'
  | 'childContentfulLessonWeightsJsonNode___id'
  | 'childContentfulLessonWeightsJsonNode___parent___id'
  | 'childContentfulLessonWeightsJsonNode___parent___parent___id'
  | 'childContentfulLessonWeightsJsonNode___parent___parent___children'
  | 'childContentfulLessonWeightsJsonNode___parent___children'
  | 'childContentfulLessonWeightsJsonNode___parent___children___id'
  | 'childContentfulLessonWeightsJsonNode___parent___children___children'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___content'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___description'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___owner'
  | 'childContentfulLessonWeightsJsonNode___parent___internal___type'
  | 'childContentfulLessonWeightsJsonNode___children'
  | 'childContentfulLessonWeightsJsonNode___children___id'
  | 'childContentfulLessonWeightsJsonNode___children___parent___id'
  | 'childContentfulLessonWeightsJsonNode___children___parent___children'
  | 'childContentfulLessonWeightsJsonNode___children___children'
  | 'childContentfulLessonWeightsJsonNode___children___children___id'
  | 'childContentfulLessonWeightsJsonNode___children___children___children'
  | 'childContentfulLessonWeightsJsonNode___children___internal___content'
  | 'childContentfulLessonWeightsJsonNode___children___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNode___children___internal___description'
  | 'childContentfulLessonWeightsJsonNode___children___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNode___children___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNode___children___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNode___children___internal___owner'
  | 'childContentfulLessonWeightsJsonNode___children___internal___type'
  | 'childContentfulLessonWeightsJsonNode___internal___content'
  | 'childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'childContentfulLessonWeightsJsonNode___internal___description'
  | 'childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'childContentfulLessonWeightsJsonNode___internal___owner'
  | 'childContentfulLessonWeightsJsonNode___internal___type'
  | 'childContentfulLessonWeightsJsonNode___jetlag'
  | 'childContentfulLessonWeightsJsonNode___duration'
  | 'childContentfulLessonWeightsJsonNode___efficiency'
  | 'childContentfulLessonWeightsJsonNode___consistency'
  | 'childContentfulLessonWeightsJsonNode___sys___type'
  | 'childContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'childContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'childContentfulLessonWeightsJsonNode___fields___language'
  | 'childContentfulLessonWeightsJsonNode___fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulLessonFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulLessonFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  lessonName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  lessonContent?: Maybe<ContentfulLessonLessonContentFilterInput>;
  additionalInformation?: Maybe<ContentfulLessonAdditionalInformationFilterInput>;
  stage?: Maybe<IntQueryOperatorInput>;
  authorCard?: Maybe<ContentfulAuthorFilterListInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  section?: Maybe<ContentfulSectionFilterInput>;
  habit?: Maybe<ContentfulHabitFilterListInput>;
  week?: Maybe<ContentfulWeekFilterListInput>;
  weights?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLessonSysFilterInput>;
  fields?: Maybe<ContentfulLessonFieldsFilterInput>;
  customComplete?: Maybe<StringQueryOperatorInput>;
  metalesson?: Maybe<ContentfulMetalessonFilterListInput>;
  childrenContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNodeFilterListInput>;
  childContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulLessonFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonFilterInput>;
};

export type ContentfulLessonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonEdge>;
  nodes: Array<ContentfulLesson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLessonLessonContent = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulAsset>>>;
};

export type ContentfulLessonLessonContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
  references?: Maybe<ContentfulAssetFilterListInput>;
};

export type ContentfulLessonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLessonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLessonSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLessonSysContentType>;
};

export type ContentfulLessonSysContentType = {
  sys?: Maybe<ContentfulLessonSysContentTypeSys>;
};

export type ContentfulLessonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulLessonSysContentTypeSysFilterInput>;
};

export type ContentfulLessonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLessonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulLessonSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulLessonSysContentTypeFilterInput>;
};

export type ContentfulLessonWeightsJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  jetlag?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  efficiency?: Maybe<Scalars['Int']>;
  consistency?: Maybe<Scalars['Int']>;
  sys?: Maybe<ContentfulLessonWeightsJsonNodeSys>;
  fields?: Maybe<ContentfulLessonWeightsJsonNodeFields>;
};

export type ContentfulLessonWeightsJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonWeightsJsonNodeEdge>;
  nodes: Array<ContentfulLessonWeightsJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLessonWeightsJsonNodeGroupConnection>;
};


export type ContentfulLessonWeightsJsonNodeConnectionDistinctArgs = {
  field: ContentfulLessonWeightsJsonNodeFieldsEnum;
};


export type ContentfulLessonWeightsJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLessonWeightsJsonNodeFieldsEnum;
};

export type ContentfulLessonWeightsJsonNodeEdge = {
  next?: Maybe<ContentfulLessonWeightsJsonNode>;
  node: ContentfulLessonWeightsJsonNode;
  previous?: Maybe<ContentfulLessonWeightsJsonNode>;
};

export type ContentfulLessonWeightsJsonNodeFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulLessonWeightsJsonNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jetlag'
  | 'duration'
  | 'efficiency'
  | 'consistency'
  | 'sys___type'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order';

export type ContentfulLessonWeightsJsonNodeFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulLessonWeightsJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jetlag?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  efficiency?: Maybe<IntQueryOperatorInput>;
  consistency?: Maybe<IntQueryOperatorInput>;
  sys?: Maybe<ContentfulLessonWeightsJsonNodeSysFilterInput>;
  fields?: Maybe<ContentfulLessonWeightsJsonNodeFieldsFilterInput>;
};

export type ContentfulLessonWeightsJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
};

export type ContentfulLessonWeightsJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLessonWeightsJsonNodeEdge>;
  nodes: Array<ContentfulLessonWeightsJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLessonWeightsJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLessonWeightsJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLessonWeightsJsonNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulLessonWeightsJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMetalesson = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessons?: Maybe<Array<Maybe<ContentfulLesson>>>;
  relatedContent?: Maybe<Array<Maybe<ContentfulLesson>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMetalessonSys>;
  fields?: Maybe<ContentfulMetalessonFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulMetalessonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMetalessonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMetalessonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetalessonEdge>;
  nodes: Array<ContentfulMetalesson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMetalessonGroupConnection>;
};


export type ContentfulMetalessonConnectionDistinctArgs = {
  field: ContentfulMetalessonFieldsEnum;
};


export type ContentfulMetalessonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMetalessonFieldsEnum;
};

export type ContentfulMetalessonEdge = {
  next?: Maybe<ContentfulMetalesson>;
  node: ContentfulMetalesson;
  previous?: Maybe<ContentfulMetalesson>;
};

export type ContentfulMetalessonFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulMetalessonFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'keywords'
  | 'lessons'
  | 'lessons___contentful_id'
  | 'lessons___id'
  | 'lessons___node_locale'
  | 'lessons___lessonName'
  | 'lessons___slug'
  | 'lessons___keywords'
  | 'lessons___author'
  | 'lessons___lessonContent___raw'
  | 'lessons___lessonContent___references'
  | 'lessons___lessonContent___references___contentful_id'
  | 'lessons___lessonContent___references___id'
  | 'lessons___lessonContent___references___spaceId'
  | 'lessons___lessonContent___references___createdAt'
  | 'lessons___lessonContent___references___updatedAt'
  | 'lessons___lessonContent___references___title'
  | 'lessons___lessonContent___references___description'
  | 'lessons___lessonContent___references___node_locale'
  | 'lessons___lessonContent___references___gatsbyImageData'
  | 'lessons___lessonContent___references___children'
  | 'lessons___additionalInformation___raw'
  | 'lessons___stage'
  | 'lessons___authorCard'
  | 'lessons___authorCard___contentful_id'
  | 'lessons___authorCard___id'
  | 'lessons___authorCard___node_locale'
  | 'lessons___authorCard___slug'
  | 'lessons___authorCard___name'
  | 'lessons___authorCard___credentials'
  | 'lessons___authorCard___description___raw'
  | 'lessons___authorCard___avatar___contentful_id'
  | 'lessons___authorCard___avatar___id'
  | 'lessons___authorCard___avatar___spaceId'
  | 'lessons___authorCard___avatar___createdAt'
  | 'lessons___authorCard___avatar___updatedAt'
  | 'lessons___authorCard___avatar___title'
  | 'lessons___authorCard___avatar___description'
  | 'lessons___authorCard___avatar___node_locale'
  | 'lessons___authorCard___avatar___gatsbyImageData'
  | 'lessons___authorCard___avatar___children'
  | 'lessons___authorCard___spaceId'
  | 'lessons___authorCard___createdAt'
  | 'lessons___authorCard___updatedAt'
  | 'lessons___authorCard___sys___type'
  | 'lessons___authorCard___sys___revision'
  | 'lessons___authorCard___fields___excerpt'
  | 'lessons___authorCard___fields___readingTime'
  | 'lessons___authorCard___fields___language'
  | 'lessons___authorCard___fields___order'
  | 'lessons___authorCard___lesson'
  | 'lessons___authorCard___lesson___contentful_id'
  | 'lessons___authorCard___lesson___id'
  | 'lessons___authorCard___lesson___node_locale'
  | 'lessons___authorCard___lesson___lessonName'
  | 'lessons___authorCard___lesson___slug'
  | 'lessons___authorCard___lesson___keywords'
  | 'lessons___authorCard___lesson___author'
  | 'lessons___authorCard___lesson___stage'
  | 'lessons___authorCard___lesson___authorCard'
  | 'lessons___authorCard___lesson___habit'
  | 'lessons___authorCard___lesson___week'
  | 'lessons___authorCard___lesson___spaceId'
  | 'lessons___authorCard___lesson___createdAt'
  | 'lessons___authorCard___lesson___updatedAt'
  | 'lessons___authorCard___lesson___customComplete'
  | 'lessons___authorCard___lesson___metalesson'
  | 'lessons___authorCard___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___authorCard___lesson___children'
  | 'lessons___authorCard___parent___id'
  | 'lessons___authorCard___parent___children'
  | 'lessons___authorCard___children'
  | 'lessons___authorCard___children___id'
  | 'lessons___authorCard___children___children'
  | 'lessons___authorCard___internal___content'
  | 'lessons___authorCard___internal___contentDigest'
  | 'lessons___authorCard___internal___description'
  | 'lessons___authorCard___internal___fieldOwners'
  | 'lessons___authorCard___internal___ignoreType'
  | 'lessons___authorCard___internal___mediaType'
  | 'lessons___authorCard___internal___owner'
  | 'lessons___authorCard___internal___type'
  | 'lessons___cover___contentful_id'
  | 'lessons___cover___id'
  | 'lessons___cover___spaceId'
  | 'lessons___cover___createdAt'
  | 'lessons___cover___updatedAt'
  | 'lessons___cover___file___url'
  | 'lessons___cover___file___fileName'
  | 'lessons___cover___file___contentType'
  | 'lessons___cover___title'
  | 'lessons___cover___description'
  | 'lessons___cover___node_locale'
  | 'lessons___cover___sys___type'
  | 'lessons___cover___sys___revision'
  | 'lessons___cover___fields___excerpt'
  | 'lessons___cover___fields___readingTime'
  | 'lessons___cover___fields___language'
  | 'lessons___cover___fields___order'
  | 'lessons___cover___fixed___base64'
  | 'lessons___cover___fixed___tracedSVG'
  | 'lessons___cover___fixed___aspectRatio'
  | 'lessons___cover___fixed___width'
  | 'lessons___cover___fixed___height'
  | 'lessons___cover___fixed___src'
  | 'lessons___cover___fixed___srcSet'
  | 'lessons___cover___fixed___srcWebp'
  | 'lessons___cover___fixed___srcSetWebp'
  | 'lessons___cover___resolutions___base64'
  | 'lessons___cover___resolutions___tracedSVG'
  | 'lessons___cover___resolutions___aspectRatio'
  | 'lessons___cover___resolutions___width'
  | 'lessons___cover___resolutions___height'
  | 'lessons___cover___resolutions___src'
  | 'lessons___cover___resolutions___srcSet'
  | 'lessons___cover___resolutions___srcWebp'
  | 'lessons___cover___resolutions___srcSetWebp'
  | 'lessons___cover___fluid___base64'
  | 'lessons___cover___fluid___tracedSVG'
  | 'lessons___cover___fluid___aspectRatio'
  | 'lessons___cover___fluid___src'
  | 'lessons___cover___fluid___srcSet'
  | 'lessons___cover___fluid___srcWebp'
  | 'lessons___cover___fluid___srcSetWebp'
  | 'lessons___cover___fluid___sizes'
  | 'lessons___cover___sizes___base64'
  | 'lessons___cover___sizes___tracedSVG'
  | 'lessons___cover___sizes___aspectRatio'
  | 'lessons___cover___sizes___src'
  | 'lessons___cover___sizes___srcSet'
  | 'lessons___cover___sizes___srcWebp'
  | 'lessons___cover___sizes___srcSetWebp'
  | 'lessons___cover___sizes___sizes'
  | 'lessons___cover___gatsbyImageData'
  | 'lessons___cover___resize___base64'
  | 'lessons___cover___resize___tracedSVG'
  | 'lessons___cover___resize___src'
  | 'lessons___cover___resize___width'
  | 'lessons___cover___resize___height'
  | 'lessons___cover___resize___aspectRatio'
  | 'lessons___cover___parent___id'
  | 'lessons___cover___parent___children'
  | 'lessons___cover___children'
  | 'lessons___cover___children___id'
  | 'lessons___cover___children___children'
  | 'lessons___cover___internal___content'
  | 'lessons___cover___internal___contentDigest'
  | 'lessons___cover___internal___description'
  | 'lessons___cover___internal___fieldOwners'
  | 'lessons___cover___internal___ignoreType'
  | 'lessons___cover___internal___mediaType'
  | 'lessons___cover___internal___owner'
  | 'lessons___cover___internal___type'
  | 'lessons___section___contentful_id'
  | 'lessons___section___id'
  | 'lessons___section___node_locale'
  | 'lessons___section___order'
  | 'lessons___section___title'
  | 'lessons___section___lesson'
  | 'lessons___section___lesson___contentful_id'
  | 'lessons___section___lesson___id'
  | 'lessons___section___lesson___node_locale'
  | 'lessons___section___lesson___lessonName'
  | 'lessons___section___lesson___slug'
  | 'lessons___section___lesson___keywords'
  | 'lessons___section___lesson___author'
  | 'lessons___section___lesson___stage'
  | 'lessons___section___lesson___authorCard'
  | 'lessons___section___lesson___habit'
  | 'lessons___section___lesson___week'
  | 'lessons___section___lesson___spaceId'
  | 'lessons___section___lesson___createdAt'
  | 'lessons___section___lesson___updatedAt'
  | 'lessons___section___lesson___customComplete'
  | 'lessons___section___lesson___metalesson'
  | 'lessons___section___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___section___lesson___children'
  | 'lessons___section___spaceId'
  | 'lessons___section___createdAt'
  | 'lessons___section___updatedAt'
  | 'lessons___section___sys___type'
  | 'lessons___section___sys___revision'
  | 'lessons___section___fields___excerpt'
  | 'lessons___section___fields___readingTime'
  | 'lessons___section___fields___language'
  | 'lessons___section___fields___order'
  | 'lessons___section___description___raw'
  | 'lessons___section___parent___id'
  | 'lessons___section___parent___children'
  | 'lessons___section___children'
  | 'lessons___section___children___id'
  | 'lessons___section___children___children'
  | 'lessons___section___internal___content'
  | 'lessons___section___internal___contentDigest'
  | 'lessons___section___internal___description'
  | 'lessons___section___internal___fieldOwners'
  | 'lessons___section___internal___ignoreType'
  | 'lessons___section___internal___mediaType'
  | 'lessons___section___internal___owner'
  | 'lessons___section___internal___type'
  | 'lessons___habit'
  | 'lessons___habit___contentful_id'
  | 'lessons___habit___id'
  | 'lessons___habit___node_locale'
  | 'lessons___habit___title'
  | 'lessons___habit___slug'
  | 'lessons___habit___period'
  | 'lessons___habit___description___raw'
  | 'lessons___habit___description___references'
  | 'lessons___habit___lesson'
  | 'lessons___habit___lesson___contentful_id'
  | 'lessons___habit___lesson___id'
  | 'lessons___habit___lesson___node_locale'
  | 'lessons___habit___lesson___lessonName'
  | 'lessons___habit___lesson___slug'
  | 'lessons___habit___lesson___keywords'
  | 'lessons___habit___lesson___author'
  | 'lessons___habit___lesson___stage'
  | 'lessons___habit___lesson___authorCard'
  | 'lessons___habit___lesson___habit'
  | 'lessons___habit___lesson___week'
  | 'lessons___habit___lesson___spaceId'
  | 'lessons___habit___lesson___createdAt'
  | 'lessons___habit___lesson___updatedAt'
  | 'lessons___habit___lesson___customComplete'
  | 'lessons___habit___lesson___metalesson'
  | 'lessons___habit___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___habit___lesson___children'
  | 'lessons___habit___spaceId'
  | 'lessons___habit___createdAt'
  | 'lessons___habit___updatedAt'
  | 'lessons___habit___sys___type'
  | 'lessons___habit___sys___revision'
  | 'lessons___habit___fields___excerpt'
  | 'lessons___habit___fields___readingTime'
  | 'lessons___habit___fields___language'
  | 'lessons___habit___fields___order'
  | 'lessons___habit___parent___id'
  | 'lessons___habit___parent___children'
  | 'lessons___habit___children'
  | 'lessons___habit___children___id'
  | 'lessons___habit___children___children'
  | 'lessons___habit___internal___content'
  | 'lessons___habit___internal___contentDigest'
  | 'lessons___habit___internal___description'
  | 'lessons___habit___internal___fieldOwners'
  | 'lessons___habit___internal___ignoreType'
  | 'lessons___habit___internal___mediaType'
  | 'lessons___habit___internal___owner'
  | 'lessons___habit___internal___type'
  | 'lessons___week'
  | 'lessons___week___contentful_id'
  | 'lessons___week___id'
  | 'lessons___week___node_locale'
  | 'lessons___week___order'
  | 'lessons___week___weekName'
  | 'lessons___week___slug'
  | 'lessons___week___intro'
  | 'lessons___week___weekDescription___raw'
  | 'lessons___week___taskCount'
  | 'lessons___week___locked'
  | 'lessons___week___duration'
  | 'lessons___week___coverPhoto___contentful_id'
  | 'lessons___week___coverPhoto___id'
  | 'lessons___week___coverPhoto___spaceId'
  | 'lessons___week___coverPhoto___createdAt'
  | 'lessons___week___coverPhoto___updatedAt'
  | 'lessons___week___coverPhoto___title'
  | 'lessons___week___coverPhoto___description'
  | 'lessons___week___coverPhoto___node_locale'
  | 'lessons___week___coverPhoto___gatsbyImageData'
  | 'lessons___week___coverPhoto___children'
  | 'lessons___week___lessons'
  | 'lessons___week___lessons___contentful_id'
  | 'lessons___week___lessons___id'
  | 'lessons___week___lessons___node_locale'
  | 'lessons___week___lessons___lessonName'
  | 'lessons___week___lessons___slug'
  | 'lessons___week___lessons___keywords'
  | 'lessons___week___lessons___author'
  | 'lessons___week___lessons___stage'
  | 'lessons___week___lessons___authorCard'
  | 'lessons___week___lessons___habit'
  | 'lessons___week___lessons___week'
  | 'lessons___week___lessons___spaceId'
  | 'lessons___week___lessons___createdAt'
  | 'lessons___week___lessons___updatedAt'
  | 'lessons___week___lessons___customComplete'
  | 'lessons___week___lessons___metalesson'
  | 'lessons___week___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___week___lessons___children'
  | 'lessons___week___spaceId'
  | 'lessons___week___createdAt'
  | 'lessons___week___updatedAt'
  | 'lessons___week___sys___type'
  | 'lessons___week___sys___revision'
  | 'lessons___week___fields___excerpt'
  | 'lessons___week___fields___readingTime'
  | 'lessons___week___fields___language'
  | 'lessons___week___fields___order'
  | 'lessons___week___parent___id'
  | 'lessons___week___parent___children'
  | 'lessons___week___children'
  | 'lessons___week___children___id'
  | 'lessons___week___children___children'
  | 'lessons___week___internal___content'
  | 'lessons___week___internal___contentDigest'
  | 'lessons___week___internal___description'
  | 'lessons___week___internal___fieldOwners'
  | 'lessons___week___internal___ignoreType'
  | 'lessons___week___internal___mediaType'
  | 'lessons___week___internal___owner'
  | 'lessons___week___internal___type'
  | 'lessons___weights___id'
  | 'lessons___weights___parent___id'
  | 'lessons___weights___parent___children'
  | 'lessons___weights___children'
  | 'lessons___weights___children___id'
  | 'lessons___weights___children___children'
  | 'lessons___weights___internal___content'
  | 'lessons___weights___internal___contentDigest'
  | 'lessons___weights___internal___description'
  | 'lessons___weights___internal___fieldOwners'
  | 'lessons___weights___internal___ignoreType'
  | 'lessons___weights___internal___mediaType'
  | 'lessons___weights___internal___owner'
  | 'lessons___weights___internal___type'
  | 'lessons___weights___jetlag'
  | 'lessons___weights___duration'
  | 'lessons___weights___efficiency'
  | 'lessons___weights___consistency'
  | 'lessons___weights___sys___type'
  | 'lessons___weights___fields___excerpt'
  | 'lessons___weights___fields___readingTime'
  | 'lessons___weights___fields___language'
  | 'lessons___weights___fields___order'
  | 'lessons___spaceId'
  | 'lessons___createdAt'
  | 'lessons___updatedAt'
  | 'lessons___sys___type'
  | 'lessons___sys___revision'
  | 'lessons___fields___excerpt'
  | 'lessons___fields___readingTime'
  | 'lessons___fields___language'
  | 'lessons___fields___order'
  | 'lessons___customComplete'
  | 'lessons___metalesson'
  | 'lessons___metalesson___contentful_id'
  | 'lessons___metalesson___id'
  | 'lessons___metalesson___node_locale'
  | 'lessons___metalesson___title'
  | 'lessons___metalesson___slug'
  | 'lessons___metalesson___keywords'
  | 'lessons___metalesson___lessons'
  | 'lessons___metalesson___lessons___contentful_id'
  | 'lessons___metalesson___lessons___id'
  | 'lessons___metalesson___lessons___node_locale'
  | 'lessons___metalesson___lessons___lessonName'
  | 'lessons___metalesson___lessons___slug'
  | 'lessons___metalesson___lessons___keywords'
  | 'lessons___metalesson___lessons___author'
  | 'lessons___metalesson___lessons___stage'
  | 'lessons___metalesson___lessons___authorCard'
  | 'lessons___metalesson___lessons___habit'
  | 'lessons___metalesson___lessons___week'
  | 'lessons___metalesson___lessons___spaceId'
  | 'lessons___metalesson___lessons___createdAt'
  | 'lessons___metalesson___lessons___updatedAt'
  | 'lessons___metalesson___lessons___customComplete'
  | 'lessons___metalesson___lessons___metalesson'
  | 'lessons___metalesson___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___metalesson___lessons___children'
  | 'lessons___metalesson___relatedContent'
  | 'lessons___metalesson___relatedContent___contentful_id'
  | 'lessons___metalesson___relatedContent___id'
  | 'lessons___metalesson___relatedContent___node_locale'
  | 'lessons___metalesson___relatedContent___lessonName'
  | 'lessons___metalesson___relatedContent___slug'
  | 'lessons___metalesson___relatedContent___keywords'
  | 'lessons___metalesson___relatedContent___author'
  | 'lessons___metalesson___relatedContent___stage'
  | 'lessons___metalesson___relatedContent___authorCard'
  | 'lessons___metalesson___relatedContent___habit'
  | 'lessons___metalesson___relatedContent___week'
  | 'lessons___metalesson___relatedContent___spaceId'
  | 'lessons___metalesson___relatedContent___createdAt'
  | 'lessons___metalesson___relatedContent___updatedAt'
  | 'lessons___metalesson___relatedContent___customComplete'
  | 'lessons___metalesson___relatedContent___metalesson'
  | 'lessons___metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___metalesson___relatedContent___children'
  | 'lessons___metalesson___spaceId'
  | 'lessons___metalesson___createdAt'
  | 'lessons___metalesson___updatedAt'
  | 'lessons___metalesson___sys___type'
  | 'lessons___metalesson___sys___revision'
  | 'lessons___metalesson___fields___excerpt'
  | 'lessons___metalesson___fields___readingTime'
  | 'lessons___metalesson___fields___language'
  | 'lessons___metalesson___fields___order'
  | 'lessons___metalesson___parent___id'
  | 'lessons___metalesson___parent___children'
  | 'lessons___metalesson___children'
  | 'lessons___metalesson___children___id'
  | 'lessons___metalesson___children___children'
  | 'lessons___metalesson___internal___content'
  | 'lessons___metalesson___internal___contentDigest'
  | 'lessons___metalesson___internal___description'
  | 'lessons___metalesson___internal___fieldOwners'
  | 'lessons___metalesson___internal___ignoreType'
  | 'lessons___metalesson___internal___mediaType'
  | 'lessons___metalesson___internal___owner'
  | 'lessons___metalesson___internal___type'
  | 'lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___id'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___parent___id'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___parent___children'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___children'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___children___id'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___children___children'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___content'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___description'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___owner'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___type'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___duration'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___sys___type'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___language'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___order'
  | 'lessons___childContentfulLessonWeightsJsonNode___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'lessons___childContentfulLessonWeightsJsonNode___sys___type'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___language'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___order'
  | 'lessons___parent___id'
  | 'lessons___parent___parent___id'
  | 'lessons___parent___parent___children'
  | 'lessons___parent___children'
  | 'lessons___parent___children___id'
  | 'lessons___parent___children___children'
  | 'lessons___parent___internal___content'
  | 'lessons___parent___internal___contentDigest'
  | 'lessons___parent___internal___description'
  | 'lessons___parent___internal___fieldOwners'
  | 'lessons___parent___internal___ignoreType'
  | 'lessons___parent___internal___mediaType'
  | 'lessons___parent___internal___owner'
  | 'lessons___parent___internal___type'
  | 'lessons___children'
  | 'lessons___children___id'
  | 'lessons___children___parent___id'
  | 'lessons___children___parent___children'
  | 'lessons___children___children'
  | 'lessons___children___children___id'
  | 'lessons___children___children___children'
  | 'lessons___children___internal___content'
  | 'lessons___children___internal___contentDigest'
  | 'lessons___children___internal___description'
  | 'lessons___children___internal___fieldOwners'
  | 'lessons___children___internal___ignoreType'
  | 'lessons___children___internal___mediaType'
  | 'lessons___children___internal___owner'
  | 'lessons___children___internal___type'
  | 'lessons___internal___content'
  | 'lessons___internal___contentDigest'
  | 'lessons___internal___description'
  | 'lessons___internal___fieldOwners'
  | 'lessons___internal___ignoreType'
  | 'lessons___internal___mediaType'
  | 'lessons___internal___owner'
  | 'lessons___internal___type'
  | 'relatedContent'
  | 'relatedContent___contentful_id'
  | 'relatedContent___id'
  | 'relatedContent___node_locale'
  | 'relatedContent___lessonName'
  | 'relatedContent___slug'
  | 'relatedContent___keywords'
  | 'relatedContent___author'
  | 'relatedContent___lessonContent___raw'
  | 'relatedContent___lessonContent___references'
  | 'relatedContent___lessonContent___references___contentful_id'
  | 'relatedContent___lessonContent___references___id'
  | 'relatedContent___lessonContent___references___spaceId'
  | 'relatedContent___lessonContent___references___createdAt'
  | 'relatedContent___lessonContent___references___updatedAt'
  | 'relatedContent___lessonContent___references___title'
  | 'relatedContent___lessonContent___references___description'
  | 'relatedContent___lessonContent___references___node_locale'
  | 'relatedContent___lessonContent___references___gatsbyImageData'
  | 'relatedContent___lessonContent___references___children'
  | 'relatedContent___additionalInformation___raw'
  | 'relatedContent___stage'
  | 'relatedContent___authorCard'
  | 'relatedContent___authorCard___contentful_id'
  | 'relatedContent___authorCard___id'
  | 'relatedContent___authorCard___node_locale'
  | 'relatedContent___authorCard___slug'
  | 'relatedContent___authorCard___name'
  | 'relatedContent___authorCard___credentials'
  | 'relatedContent___authorCard___description___raw'
  | 'relatedContent___authorCard___avatar___contentful_id'
  | 'relatedContent___authorCard___avatar___id'
  | 'relatedContent___authorCard___avatar___spaceId'
  | 'relatedContent___authorCard___avatar___createdAt'
  | 'relatedContent___authorCard___avatar___updatedAt'
  | 'relatedContent___authorCard___avatar___title'
  | 'relatedContent___authorCard___avatar___description'
  | 'relatedContent___authorCard___avatar___node_locale'
  | 'relatedContent___authorCard___avatar___gatsbyImageData'
  | 'relatedContent___authorCard___avatar___children'
  | 'relatedContent___authorCard___spaceId'
  | 'relatedContent___authorCard___createdAt'
  | 'relatedContent___authorCard___updatedAt'
  | 'relatedContent___authorCard___sys___type'
  | 'relatedContent___authorCard___sys___revision'
  | 'relatedContent___authorCard___fields___excerpt'
  | 'relatedContent___authorCard___fields___readingTime'
  | 'relatedContent___authorCard___fields___language'
  | 'relatedContent___authorCard___fields___order'
  | 'relatedContent___authorCard___lesson'
  | 'relatedContent___authorCard___lesson___contentful_id'
  | 'relatedContent___authorCard___lesson___id'
  | 'relatedContent___authorCard___lesson___node_locale'
  | 'relatedContent___authorCard___lesson___lessonName'
  | 'relatedContent___authorCard___lesson___slug'
  | 'relatedContent___authorCard___lesson___keywords'
  | 'relatedContent___authorCard___lesson___author'
  | 'relatedContent___authorCard___lesson___stage'
  | 'relatedContent___authorCard___lesson___authorCard'
  | 'relatedContent___authorCard___lesson___habit'
  | 'relatedContent___authorCard___lesson___week'
  | 'relatedContent___authorCard___lesson___spaceId'
  | 'relatedContent___authorCard___lesson___createdAt'
  | 'relatedContent___authorCard___lesson___updatedAt'
  | 'relatedContent___authorCard___lesson___customComplete'
  | 'relatedContent___authorCard___lesson___metalesson'
  | 'relatedContent___authorCard___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'relatedContent___authorCard___lesson___children'
  | 'relatedContent___authorCard___parent___id'
  | 'relatedContent___authorCard___parent___children'
  | 'relatedContent___authorCard___children'
  | 'relatedContent___authorCard___children___id'
  | 'relatedContent___authorCard___children___children'
  | 'relatedContent___authorCard___internal___content'
  | 'relatedContent___authorCard___internal___contentDigest'
  | 'relatedContent___authorCard___internal___description'
  | 'relatedContent___authorCard___internal___fieldOwners'
  | 'relatedContent___authorCard___internal___ignoreType'
  | 'relatedContent___authorCard___internal___mediaType'
  | 'relatedContent___authorCard___internal___owner'
  | 'relatedContent___authorCard___internal___type'
  | 'relatedContent___cover___contentful_id'
  | 'relatedContent___cover___id'
  | 'relatedContent___cover___spaceId'
  | 'relatedContent___cover___createdAt'
  | 'relatedContent___cover___updatedAt'
  | 'relatedContent___cover___file___url'
  | 'relatedContent___cover___file___fileName'
  | 'relatedContent___cover___file___contentType'
  | 'relatedContent___cover___title'
  | 'relatedContent___cover___description'
  | 'relatedContent___cover___node_locale'
  | 'relatedContent___cover___sys___type'
  | 'relatedContent___cover___sys___revision'
  | 'relatedContent___cover___fields___excerpt'
  | 'relatedContent___cover___fields___readingTime'
  | 'relatedContent___cover___fields___language'
  | 'relatedContent___cover___fields___order'
  | 'relatedContent___cover___fixed___base64'
  | 'relatedContent___cover___fixed___tracedSVG'
  | 'relatedContent___cover___fixed___aspectRatio'
  | 'relatedContent___cover___fixed___width'
  | 'relatedContent___cover___fixed___height'
  | 'relatedContent___cover___fixed___src'
  | 'relatedContent___cover___fixed___srcSet'
  | 'relatedContent___cover___fixed___srcWebp'
  | 'relatedContent___cover___fixed___srcSetWebp'
  | 'relatedContent___cover___resolutions___base64'
  | 'relatedContent___cover___resolutions___tracedSVG'
  | 'relatedContent___cover___resolutions___aspectRatio'
  | 'relatedContent___cover___resolutions___width'
  | 'relatedContent___cover___resolutions___height'
  | 'relatedContent___cover___resolutions___src'
  | 'relatedContent___cover___resolutions___srcSet'
  | 'relatedContent___cover___resolutions___srcWebp'
  | 'relatedContent___cover___resolutions___srcSetWebp'
  | 'relatedContent___cover___fluid___base64'
  | 'relatedContent___cover___fluid___tracedSVG'
  | 'relatedContent___cover___fluid___aspectRatio'
  | 'relatedContent___cover___fluid___src'
  | 'relatedContent___cover___fluid___srcSet'
  | 'relatedContent___cover___fluid___srcWebp'
  | 'relatedContent___cover___fluid___srcSetWebp'
  | 'relatedContent___cover___fluid___sizes'
  | 'relatedContent___cover___sizes___base64'
  | 'relatedContent___cover___sizes___tracedSVG'
  | 'relatedContent___cover___sizes___aspectRatio'
  | 'relatedContent___cover___sizes___src'
  | 'relatedContent___cover___sizes___srcSet'
  | 'relatedContent___cover___sizes___srcWebp'
  | 'relatedContent___cover___sizes___srcSetWebp'
  | 'relatedContent___cover___sizes___sizes'
  | 'relatedContent___cover___gatsbyImageData'
  | 'relatedContent___cover___resize___base64'
  | 'relatedContent___cover___resize___tracedSVG'
  | 'relatedContent___cover___resize___src'
  | 'relatedContent___cover___resize___width'
  | 'relatedContent___cover___resize___height'
  | 'relatedContent___cover___resize___aspectRatio'
  | 'relatedContent___cover___parent___id'
  | 'relatedContent___cover___parent___children'
  | 'relatedContent___cover___children'
  | 'relatedContent___cover___children___id'
  | 'relatedContent___cover___children___children'
  | 'relatedContent___cover___internal___content'
  | 'relatedContent___cover___internal___contentDigest'
  | 'relatedContent___cover___internal___description'
  | 'relatedContent___cover___internal___fieldOwners'
  | 'relatedContent___cover___internal___ignoreType'
  | 'relatedContent___cover___internal___mediaType'
  | 'relatedContent___cover___internal___owner'
  | 'relatedContent___cover___internal___type'
  | 'relatedContent___section___contentful_id'
  | 'relatedContent___section___id'
  | 'relatedContent___section___node_locale'
  | 'relatedContent___section___order'
  | 'relatedContent___section___title'
  | 'relatedContent___section___lesson'
  | 'relatedContent___section___lesson___contentful_id'
  | 'relatedContent___section___lesson___id'
  | 'relatedContent___section___lesson___node_locale'
  | 'relatedContent___section___lesson___lessonName'
  | 'relatedContent___section___lesson___slug'
  | 'relatedContent___section___lesson___keywords'
  | 'relatedContent___section___lesson___author'
  | 'relatedContent___section___lesson___stage'
  | 'relatedContent___section___lesson___authorCard'
  | 'relatedContent___section___lesson___habit'
  | 'relatedContent___section___lesson___week'
  | 'relatedContent___section___lesson___spaceId'
  | 'relatedContent___section___lesson___createdAt'
  | 'relatedContent___section___lesson___updatedAt'
  | 'relatedContent___section___lesson___customComplete'
  | 'relatedContent___section___lesson___metalesson'
  | 'relatedContent___section___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'relatedContent___section___lesson___children'
  | 'relatedContent___section___spaceId'
  | 'relatedContent___section___createdAt'
  | 'relatedContent___section___updatedAt'
  | 'relatedContent___section___sys___type'
  | 'relatedContent___section___sys___revision'
  | 'relatedContent___section___fields___excerpt'
  | 'relatedContent___section___fields___readingTime'
  | 'relatedContent___section___fields___language'
  | 'relatedContent___section___fields___order'
  | 'relatedContent___section___description___raw'
  | 'relatedContent___section___parent___id'
  | 'relatedContent___section___parent___children'
  | 'relatedContent___section___children'
  | 'relatedContent___section___children___id'
  | 'relatedContent___section___children___children'
  | 'relatedContent___section___internal___content'
  | 'relatedContent___section___internal___contentDigest'
  | 'relatedContent___section___internal___description'
  | 'relatedContent___section___internal___fieldOwners'
  | 'relatedContent___section___internal___ignoreType'
  | 'relatedContent___section___internal___mediaType'
  | 'relatedContent___section___internal___owner'
  | 'relatedContent___section___internal___type'
  | 'relatedContent___habit'
  | 'relatedContent___habit___contentful_id'
  | 'relatedContent___habit___id'
  | 'relatedContent___habit___node_locale'
  | 'relatedContent___habit___title'
  | 'relatedContent___habit___slug'
  | 'relatedContent___habit___period'
  | 'relatedContent___habit___description___raw'
  | 'relatedContent___habit___description___references'
  | 'relatedContent___habit___lesson'
  | 'relatedContent___habit___lesson___contentful_id'
  | 'relatedContent___habit___lesson___id'
  | 'relatedContent___habit___lesson___node_locale'
  | 'relatedContent___habit___lesson___lessonName'
  | 'relatedContent___habit___lesson___slug'
  | 'relatedContent___habit___lesson___keywords'
  | 'relatedContent___habit___lesson___author'
  | 'relatedContent___habit___lesson___stage'
  | 'relatedContent___habit___lesson___authorCard'
  | 'relatedContent___habit___lesson___habit'
  | 'relatedContent___habit___lesson___week'
  | 'relatedContent___habit___lesson___spaceId'
  | 'relatedContent___habit___lesson___createdAt'
  | 'relatedContent___habit___lesson___updatedAt'
  | 'relatedContent___habit___lesson___customComplete'
  | 'relatedContent___habit___lesson___metalesson'
  | 'relatedContent___habit___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'relatedContent___habit___lesson___children'
  | 'relatedContent___habit___spaceId'
  | 'relatedContent___habit___createdAt'
  | 'relatedContent___habit___updatedAt'
  | 'relatedContent___habit___sys___type'
  | 'relatedContent___habit___sys___revision'
  | 'relatedContent___habit___fields___excerpt'
  | 'relatedContent___habit___fields___readingTime'
  | 'relatedContent___habit___fields___language'
  | 'relatedContent___habit___fields___order'
  | 'relatedContent___habit___parent___id'
  | 'relatedContent___habit___parent___children'
  | 'relatedContent___habit___children'
  | 'relatedContent___habit___children___id'
  | 'relatedContent___habit___children___children'
  | 'relatedContent___habit___internal___content'
  | 'relatedContent___habit___internal___contentDigest'
  | 'relatedContent___habit___internal___description'
  | 'relatedContent___habit___internal___fieldOwners'
  | 'relatedContent___habit___internal___ignoreType'
  | 'relatedContent___habit___internal___mediaType'
  | 'relatedContent___habit___internal___owner'
  | 'relatedContent___habit___internal___type'
  | 'relatedContent___week'
  | 'relatedContent___week___contentful_id'
  | 'relatedContent___week___id'
  | 'relatedContent___week___node_locale'
  | 'relatedContent___week___order'
  | 'relatedContent___week___weekName'
  | 'relatedContent___week___slug'
  | 'relatedContent___week___intro'
  | 'relatedContent___week___weekDescription___raw'
  | 'relatedContent___week___taskCount'
  | 'relatedContent___week___locked'
  | 'relatedContent___week___duration'
  | 'relatedContent___week___coverPhoto___contentful_id'
  | 'relatedContent___week___coverPhoto___id'
  | 'relatedContent___week___coverPhoto___spaceId'
  | 'relatedContent___week___coverPhoto___createdAt'
  | 'relatedContent___week___coverPhoto___updatedAt'
  | 'relatedContent___week___coverPhoto___title'
  | 'relatedContent___week___coverPhoto___description'
  | 'relatedContent___week___coverPhoto___node_locale'
  | 'relatedContent___week___coverPhoto___gatsbyImageData'
  | 'relatedContent___week___coverPhoto___children'
  | 'relatedContent___week___lessons'
  | 'relatedContent___week___lessons___contentful_id'
  | 'relatedContent___week___lessons___id'
  | 'relatedContent___week___lessons___node_locale'
  | 'relatedContent___week___lessons___lessonName'
  | 'relatedContent___week___lessons___slug'
  | 'relatedContent___week___lessons___keywords'
  | 'relatedContent___week___lessons___author'
  | 'relatedContent___week___lessons___stage'
  | 'relatedContent___week___lessons___authorCard'
  | 'relatedContent___week___lessons___habit'
  | 'relatedContent___week___lessons___week'
  | 'relatedContent___week___lessons___spaceId'
  | 'relatedContent___week___lessons___createdAt'
  | 'relatedContent___week___lessons___updatedAt'
  | 'relatedContent___week___lessons___customComplete'
  | 'relatedContent___week___lessons___metalesson'
  | 'relatedContent___week___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'relatedContent___week___lessons___children'
  | 'relatedContent___week___spaceId'
  | 'relatedContent___week___createdAt'
  | 'relatedContent___week___updatedAt'
  | 'relatedContent___week___sys___type'
  | 'relatedContent___week___sys___revision'
  | 'relatedContent___week___fields___excerpt'
  | 'relatedContent___week___fields___readingTime'
  | 'relatedContent___week___fields___language'
  | 'relatedContent___week___fields___order'
  | 'relatedContent___week___parent___id'
  | 'relatedContent___week___parent___children'
  | 'relatedContent___week___children'
  | 'relatedContent___week___children___id'
  | 'relatedContent___week___children___children'
  | 'relatedContent___week___internal___content'
  | 'relatedContent___week___internal___contentDigest'
  | 'relatedContent___week___internal___description'
  | 'relatedContent___week___internal___fieldOwners'
  | 'relatedContent___week___internal___ignoreType'
  | 'relatedContent___week___internal___mediaType'
  | 'relatedContent___week___internal___owner'
  | 'relatedContent___week___internal___type'
  | 'relatedContent___weights___id'
  | 'relatedContent___weights___parent___id'
  | 'relatedContent___weights___parent___children'
  | 'relatedContent___weights___children'
  | 'relatedContent___weights___children___id'
  | 'relatedContent___weights___children___children'
  | 'relatedContent___weights___internal___content'
  | 'relatedContent___weights___internal___contentDigest'
  | 'relatedContent___weights___internal___description'
  | 'relatedContent___weights___internal___fieldOwners'
  | 'relatedContent___weights___internal___ignoreType'
  | 'relatedContent___weights___internal___mediaType'
  | 'relatedContent___weights___internal___owner'
  | 'relatedContent___weights___internal___type'
  | 'relatedContent___weights___jetlag'
  | 'relatedContent___weights___duration'
  | 'relatedContent___weights___efficiency'
  | 'relatedContent___weights___consistency'
  | 'relatedContent___weights___sys___type'
  | 'relatedContent___weights___fields___excerpt'
  | 'relatedContent___weights___fields___readingTime'
  | 'relatedContent___weights___fields___language'
  | 'relatedContent___weights___fields___order'
  | 'relatedContent___spaceId'
  | 'relatedContent___createdAt'
  | 'relatedContent___updatedAt'
  | 'relatedContent___sys___type'
  | 'relatedContent___sys___revision'
  | 'relatedContent___fields___excerpt'
  | 'relatedContent___fields___readingTime'
  | 'relatedContent___fields___language'
  | 'relatedContent___fields___order'
  | 'relatedContent___customComplete'
  | 'relatedContent___metalesson'
  | 'relatedContent___metalesson___contentful_id'
  | 'relatedContent___metalesson___id'
  | 'relatedContent___metalesson___node_locale'
  | 'relatedContent___metalesson___title'
  | 'relatedContent___metalesson___slug'
  | 'relatedContent___metalesson___keywords'
  | 'relatedContent___metalesson___lessons'
  | 'relatedContent___metalesson___lessons___contentful_id'
  | 'relatedContent___metalesson___lessons___id'
  | 'relatedContent___metalesson___lessons___node_locale'
  | 'relatedContent___metalesson___lessons___lessonName'
  | 'relatedContent___metalesson___lessons___slug'
  | 'relatedContent___metalesson___lessons___keywords'
  | 'relatedContent___metalesson___lessons___author'
  | 'relatedContent___metalesson___lessons___stage'
  | 'relatedContent___metalesson___lessons___authorCard'
  | 'relatedContent___metalesson___lessons___habit'
  | 'relatedContent___metalesson___lessons___week'
  | 'relatedContent___metalesson___lessons___spaceId'
  | 'relatedContent___metalesson___lessons___createdAt'
  | 'relatedContent___metalesson___lessons___updatedAt'
  | 'relatedContent___metalesson___lessons___customComplete'
  | 'relatedContent___metalesson___lessons___metalesson'
  | 'relatedContent___metalesson___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'relatedContent___metalesson___lessons___children'
  | 'relatedContent___metalesson___relatedContent'
  | 'relatedContent___metalesson___relatedContent___contentful_id'
  | 'relatedContent___metalesson___relatedContent___id'
  | 'relatedContent___metalesson___relatedContent___node_locale'
  | 'relatedContent___metalesson___relatedContent___lessonName'
  | 'relatedContent___metalesson___relatedContent___slug'
  | 'relatedContent___metalesson___relatedContent___keywords'
  | 'relatedContent___metalesson___relatedContent___author'
  | 'relatedContent___metalesson___relatedContent___stage'
  | 'relatedContent___metalesson___relatedContent___authorCard'
  | 'relatedContent___metalesson___relatedContent___habit'
  | 'relatedContent___metalesson___relatedContent___week'
  | 'relatedContent___metalesson___relatedContent___spaceId'
  | 'relatedContent___metalesson___relatedContent___createdAt'
  | 'relatedContent___metalesson___relatedContent___updatedAt'
  | 'relatedContent___metalesson___relatedContent___customComplete'
  | 'relatedContent___metalesson___relatedContent___metalesson'
  | 'relatedContent___metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'relatedContent___metalesson___relatedContent___children'
  | 'relatedContent___metalesson___spaceId'
  | 'relatedContent___metalesson___createdAt'
  | 'relatedContent___metalesson___updatedAt'
  | 'relatedContent___metalesson___sys___type'
  | 'relatedContent___metalesson___sys___revision'
  | 'relatedContent___metalesson___fields___excerpt'
  | 'relatedContent___metalesson___fields___readingTime'
  | 'relatedContent___metalesson___fields___language'
  | 'relatedContent___metalesson___fields___order'
  | 'relatedContent___metalesson___parent___id'
  | 'relatedContent___metalesson___parent___children'
  | 'relatedContent___metalesson___children'
  | 'relatedContent___metalesson___children___id'
  | 'relatedContent___metalesson___children___children'
  | 'relatedContent___metalesson___internal___content'
  | 'relatedContent___metalesson___internal___contentDigest'
  | 'relatedContent___metalesson___internal___description'
  | 'relatedContent___metalesson___internal___fieldOwners'
  | 'relatedContent___metalesson___internal___ignoreType'
  | 'relatedContent___metalesson___internal___mediaType'
  | 'relatedContent___metalesson___internal___owner'
  | 'relatedContent___metalesson___internal___type'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___id'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___parent___id'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___parent___children'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___children'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___children___id'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___children___children'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___content'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___description'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___owner'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___internal___type'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___duration'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___sys___type'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___fields___language'
  | 'relatedContent___childrenContentfulLessonWeightsJsonNode___fields___order'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___id'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___parent___id'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___parent___children'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___children'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___children___id'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___children___children'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___content'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___description'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___internal___type'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___jetlag'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___duration'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___efficiency'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___consistency'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___sys___type'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___fields___language'
  | 'relatedContent___childContentfulLessonWeightsJsonNode___fields___order'
  | 'relatedContent___parent___id'
  | 'relatedContent___parent___parent___id'
  | 'relatedContent___parent___parent___children'
  | 'relatedContent___parent___children'
  | 'relatedContent___parent___children___id'
  | 'relatedContent___parent___children___children'
  | 'relatedContent___parent___internal___content'
  | 'relatedContent___parent___internal___contentDigest'
  | 'relatedContent___parent___internal___description'
  | 'relatedContent___parent___internal___fieldOwners'
  | 'relatedContent___parent___internal___ignoreType'
  | 'relatedContent___parent___internal___mediaType'
  | 'relatedContent___parent___internal___owner'
  | 'relatedContent___parent___internal___type'
  | 'relatedContent___children'
  | 'relatedContent___children___id'
  | 'relatedContent___children___parent___id'
  | 'relatedContent___children___parent___children'
  | 'relatedContent___children___children'
  | 'relatedContent___children___children___id'
  | 'relatedContent___children___children___children'
  | 'relatedContent___children___internal___content'
  | 'relatedContent___children___internal___contentDigest'
  | 'relatedContent___children___internal___description'
  | 'relatedContent___children___internal___fieldOwners'
  | 'relatedContent___children___internal___ignoreType'
  | 'relatedContent___children___internal___mediaType'
  | 'relatedContent___children___internal___owner'
  | 'relatedContent___children___internal___type'
  | 'relatedContent___internal___content'
  | 'relatedContent___internal___contentDigest'
  | 'relatedContent___internal___description'
  | 'relatedContent___internal___fieldOwners'
  | 'relatedContent___internal___ignoreType'
  | 'relatedContent___internal___mediaType'
  | 'relatedContent___internal___owner'
  | 'relatedContent___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulMetalessonFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulMetalessonFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  relatedContent?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMetalessonSysFilterInput>;
  fields?: Maybe<ContentfulMetalessonFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulMetalessonFilterListInput = {
  elemMatch?: Maybe<ContentfulMetalessonFilterInput>;
};

export type ContentfulMetalessonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetalessonEdge>;
  nodes: Array<ContentfulMetalesson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMetalessonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMetalessonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMetalessonSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMetalessonSysContentType>;
};

export type ContentfulMetalessonSysContentType = {
  sys?: Maybe<ContentfulMetalessonSysContentTypeSys>;
};

export type ContentfulMetalessonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMetalessonSysContentTypeSysFilterInput>;
};

export type ContentfulMetalessonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulMetalessonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMetalessonSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMetalessonSysContentTypeFilterInput>;
};

export type ContentfulQuestion = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  answers?: Maybe<Array<Maybe<ContentfulAnswer>>>;
  questionnaire?: Maybe<Array<Maybe<ContentfulQuestionnaire>>>;
  question?: Maybe<ContentfulQuestionQuestionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQuestionSys>;
  fields?: Maybe<ContentfulQuestionFields>;
  /** Returns all children nodes filtered by type contentfulQuestionQuestionTextNode */
  childrenContentfulQuestionQuestionTextNode?: Maybe<Array<Maybe<ContentfulQuestionQuestionTextNode>>>;
  /**
   * Returns the first child node of type contentfulQuestionQuestionTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulQuestionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQuestionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionEdge>;
  nodes: Array<ContentfulQuestion>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuestionGroupConnection>;
};


export type ContentfulQuestionConnectionDistinctArgs = {
  field: ContentfulQuestionFieldsEnum;
};


export type ContentfulQuestionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuestionFieldsEnum;
};

export type ContentfulQuestionEdge = {
  next?: Maybe<ContentfulQuestion>;
  node: ContentfulQuestion;
  previous?: Maybe<ContentfulQuestion>;
};

export type ContentfulQuestionFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulQuestionFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'type'
  | 'answers'
  | 'answers___contentful_id'
  | 'answers___id'
  | 'answers___node_locale'
  | 'answers___title'
  | 'answers___score'
  | 'answers___question'
  | 'answers___question___contentful_id'
  | 'answers___question___id'
  | 'answers___question___node_locale'
  | 'answers___question___title'
  | 'answers___question___type'
  | 'answers___question___answers'
  | 'answers___question___answers___contentful_id'
  | 'answers___question___answers___id'
  | 'answers___question___answers___node_locale'
  | 'answers___question___answers___title'
  | 'answers___question___answers___score'
  | 'answers___question___answers___question'
  | 'answers___question___answers___spaceId'
  | 'answers___question___answers___createdAt'
  | 'answers___question___answers___updatedAt'
  | 'answers___question___answers___children'
  | 'answers___question___questionnaire'
  | 'answers___question___questionnaire___contentful_id'
  | 'answers___question___questionnaire___id'
  | 'answers___question___questionnaire___node_locale'
  | 'answers___question___questionnaire___title'
  | 'answers___question___questionnaire___slug'
  | 'answers___question___questionnaire___questions'
  | 'answers___question___questionnaire___results'
  | 'answers___question___questionnaire___spaceId'
  | 'answers___question___questionnaire___createdAt'
  | 'answers___question___questionnaire___updatedAt'
  | 'answers___question___questionnaire___children'
  | 'answers___question___question___id'
  | 'answers___question___question___children'
  | 'answers___question___question___question'
  | 'answers___question___spaceId'
  | 'answers___question___createdAt'
  | 'answers___question___updatedAt'
  | 'answers___question___sys___type'
  | 'answers___question___sys___revision'
  | 'answers___question___fields___excerpt'
  | 'answers___question___fields___readingTime'
  | 'answers___question___fields___language'
  | 'answers___question___fields___order'
  | 'answers___question___childrenContentfulQuestionQuestionTextNode'
  | 'answers___question___childrenContentfulQuestionQuestionTextNode___id'
  | 'answers___question___childrenContentfulQuestionQuestionTextNode___children'
  | 'answers___question___childrenContentfulQuestionQuestionTextNode___question'
  | 'answers___question___childContentfulQuestionQuestionTextNode___id'
  | 'answers___question___childContentfulQuestionQuestionTextNode___children'
  | 'answers___question___childContentfulQuestionQuestionTextNode___question'
  | 'answers___question___parent___id'
  | 'answers___question___parent___children'
  | 'answers___question___children'
  | 'answers___question___children___id'
  | 'answers___question___children___children'
  | 'answers___question___internal___content'
  | 'answers___question___internal___contentDigest'
  | 'answers___question___internal___description'
  | 'answers___question___internal___fieldOwners'
  | 'answers___question___internal___ignoreType'
  | 'answers___question___internal___mediaType'
  | 'answers___question___internal___owner'
  | 'answers___question___internal___type'
  | 'answers___spaceId'
  | 'answers___createdAt'
  | 'answers___updatedAt'
  | 'answers___sys___type'
  | 'answers___sys___revision'
  | 'answers___fields___excerpt'
  | 'answers___fields___readingTime'
  | 'answers___fields___language'
  | 'answers___fields___order'
  | 'answers___parent___id'
  | 'answers___parent___parent___id'
  | 'answers___parent___parent___children'
  | 'answers___parent___children'
  | 'answers___parent___children___id'
  | 'answers___parent___children___children'
  | 'answers___parent___internal___content'
  | 'answers___parent___internal___contentDigest'
  | 'answers___parent___internal___description'
  | 'answers___parent___internal___fieldOwners'
  | 'answers___parent___internal___ignoreType'
  | 'answers___parent___internal___mediaType'
  | 'answers___parent___internal___owner'
  | 'answers___parent___internal___type'
  | 'answers___children'
  | 'answers___children___id'
  | 'answers___children___parent___id'
  | 'answers___children___parent___children'
  | 'answers___children___children'
  | 'answers___children___children___id'
  | 'answers___children___children___children'
  | 'answers___children___internal___content'
  | 'answers___children___internal___contentDigest'
  | 'answers___children___internal___description'
  | 'answers___children___internal___fieldOwners'
  | 'answers___children___internal___ignoreType'
  | 'answers___children___internal___mediaType'
  | 'answers___children___internal___owner'
  | 'answers___children___internal___type'
  | 'answers___internal___content'
  | 'answers___internal___contentDigest'
  | 'answers___internal___description'
  | 'answers___internal___fieldOwners'
  | 'answers___internal___ignoreType'
  | 'answers___internal___mediaType'
  | 'answers___internal___owner'
  | 'answers___internal___type'
  | 'questionnaire'
  | 'questionnaire___contentful_id'
  | 'questionnaire___id'
  | 'questionnaire___node_locale'
  | 'questionnaire___title'
  | 'questionnaire___slug'
  | 'questionnaire___description___raw'
  | 'questionnaire___questions'
  | 'questionnaire___questions___contentful_id'
  | 'questionnaire___questions___id'
  | 'questionnaire___questions___node_locale'
  | 'questionnaire___questions___title'
  | 'questionnaire___questions___type'
  | 'questionnaire___questions___answers'
  | 'questionnaire___questions___answers___contentful_id'
  | 'questionnaire___questions___answers___id'
  | 'questionnaire___questions___answers___node_locale'
  | 'questionnaire___questions___answers___title'
  | 'questionnaire___questions___answers___score'
  | 'questionnaire___questions___answers___question'
  | 'questionnaire___questions___answers___spaceId'
  | 'questionnaire___questions___answers___createdAt'
  | 'questionnaire___questions___answers___updatedAt'
  | 'questionnaire___questions___answers___children'
  | 'questionnaire___questions___questionnaire'
  | 'questionnaire___questions___questionnaire___contentful_id'
  | 'questionnaire___questions___questionnaire___id'
  | 'questionnaire___questions___questionnaire___node_locale'
  | 'questionnaire___questions___questionnaire___title'
  | 'questionnaire___questions___questionnaire___slug'
  | 'questionnaire___questions___questionnaire___questions'
  | 'questionnaire___questions___questionnaire___results'
  | 'questionnaire___questions___questionnaire___spaceId'
  | 'questionnaire___questions___questionnaire___createdAt'
  | 'questionnaire___questions___questionnaire___updatedAt'
  | 'questionnaire___questions___questionnaire___children'
  | 'questionnaire___questions___question___id'
  | 'questionnaire___questions___question___children'
  | 'questionnaire___questions___question___question'
  | 'questionnaire___questions___spaceId'
  | 'questionnaire___questions___createdAt'
  | 'questionnaire___questions___updatedAt'
  | 'questionnaire___questions___sys___type'
  | 'questionnaire___questions___sys___revision'
  | 'questionnaire___questions___fields___excerpt'
  | 'questionnaire___questions___fields___readingTime'
  | 'questionnaire___questions___fields___language'
  | 'questionnaire___questions___fields___order'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode___id'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode___children'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode___question'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___id'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___children'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___question'
  | 'questionnaire___questions___parent___id'
  | 'questionnaire___questions___parent___children'
  | 'questionnaire___questions___children'
  | 'questionnaire___questions___children___id'
  | 'questionnaire___questions___children___children'
  | 'questionnaire___questions___internal___content'
  | 'questionnaire___questions___internal___contentDigest'
  | 'questionnaire___questions___internal___description'
  | 'questionnaire___questions___internal___fieldOwners'
  | 'questionnaire___questions___internal___ignoreType'
  | 'questionnaire___questions___internal___mediaType'
  | 'questionnaire___questions___internal___owner'
  | 'questionnaire___questions___internal___type'
  | 'questionnaire___results'
  | 'questionnaire___results___contentful_id'
  | 'questionnaire___results___id'
  | 'questionnaire___results___node_locale'
  | 'questionnaire___results___title'
  | 'questionnaire___results___description___raw'
  | 'questionnaire___results___details___raw'
  | 'questionnaire___results___questionnaire'
  | 'questionnaire___results___questionnaire___contentful_id'
  | 'questionnaire___results___questionnaire___id'
  | 'questionnaire___results___questionnaire___node_locale'
  | 'questionnaire___results___questionnaire___title'
  | 'questionnaire___results___questionnaire___slug'
  | 'questionnaire___results___questionnaire___questions'
  | 'questionnaire___results___questionnaire___results'
  | 'questionnaire___results___questionnaire___spaceId'
  | 'questionnaire___results___questionnaire___createdAt'
  | 'questionnaire___results___questionnaire___updatedAt'
  | 'questionnaire___results___questionnaire___children'
  | 'questionnaire___results___scoreRange___id'
  | 'questionnaire___results___scoreRange___children'
  | 'questionnaire___results___scoreRange___lowEnd'
  | 'questionnaire___results___scoreRange___highEnd'
  | 'questionnaire___results___spaceId'
  | 'questionnaire___results___createdAt'
  | 'questionnaire___results___updatedAt'
  | 'questionnaire___results___sys___type'
  | 'questionnaire___results___sys___revision'
  | 'questionnaire___results___fields___excerpt'
  | 'questionnaire___results___fields___readingTime'
  | 'questionnaire___results___fields___language'
  | 'questionnaire___results___fields___order'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___id'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___children'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___lowEnd'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___highEnd'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___id'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___children'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___highEnd'
  | 'questionnaire___results___parent___id'
  | 'questionnaire___results___parent___children'
  | 'questionnaire___results___children'
  | 'questionnaire___results___children___id'
  | 'questionnaire___results___children___children'
  | 'questionnaire___results___internal___content'
  | 'questionnaire___results___internal___contentDigest'
  | 'questionnaire___results___internal___description'
  | 'questionnaire___results___internal___fieldOwners'
  | 'questionnaire___results___internal___ignoreType'
  | 'questionnaire___results___internal___mediaType'
  | 'questionnaire___results___internal___owner'
  | 'questionnaire___results___internal___type'
  | 'questionnaire___spaceId'
  | 'questionnaire___createdAt'
  | 'questionnaire___updatedAt'
  | 'questionnaire___sys___type'
  | 'questionnaire___sys___revision'
  | 'questionnaire___fields___excerpt'
  | 'questionnaire___fields___readingTime'
  | 'questionnaire___fields___language'
  | 'questionnaire___fields___order'
  | 'questionnaire___parent___id'
  | 'questionnaire___parent___parent___id'
  | 'questionnaire___parent___parent___children'
  | 'questionnaire___parent___children'
  | 'questionnaire___parent___children___id'
  | 'questionnaire___parent___children___children'
  | 'questionnaire___parent___internal___content'
  | 'questionnaire___parent___internal___contentDigest'
  | 'questionnaire___parent___internal___description'
  | 'questionnaire___parent___internal___fieldOwners'
  | 'questionnaire___parent___internal___ignoreType'
  | 'questionnaire___parent___internal___mediaType'
  | 'questionnaire___parent___internal___owner'
  | 'questionnaire___parent___internal___type'
  | 'questionnaire___children'
  | 'questionnaire___children___id'
  | 'questionnaire___children___parent___id'
  | 'questionnaire___children___parent___children'
  | 'questionnaire___children___children'
  | 'questionnaire___children___children___id'
  | 'questionnaire___children___children___children'
  | 'questionnaire___children___internal___content'
  | 'questionnaire___children___internal___contentDigest'
  | 'questionnaire___children___internal___description'
  | 'questionnaire___children___internal___fieldOwners'
  | 'questionnaire___children___internal___ignoreType'
  | 'questionnaire___children___internal___mediaType'
  | 'questionnaire___children___internal___owner'
  | 'questionnaire___children___internal___type'
  | 'questionnaire___internal___content'
  | 'questionnaire___internal___contentDigest'
  | 'questionnaire___internal___description'
  | 'questionnaire___internal___fieldOwners'
  | 'questionnaire___internal___ignoreType'
  | 'questionnaire___internal___mediaType'
  | 'questionnaire___internal___owner'
  | 'questionnaire___internal___type'
  | 'question___id'
  | 'question___parent___id'
  | 'question___parent___parent___id'
  | 'question___parent___parent___children'
  | 'question___parent___children'
  | 'question___parent___children___id'
  | 'question___parent___children___children'
  | 'question___parent___internal___content'
  | 'question___parent___internal___contentDigest'
  | 'question___parent___internal___description'
  | 'question___parent___internal___fieldOwners'
  | 'question___parent___internal___ignoreType'
  | 'question___parent___internal___mediaType'
  | 'question___parent___internal___owner'
  | 'question___parent___internal___type'
  | 'question___children'
  | 'question___children___id'
  | 'question___children___parent___id'
  | 'question___children___parent___children'
  | 'question___children___children'
  | 'question___children___children___id'
  | 'question___children___children___children'
  | 'question___children___internal___content'
  | 'question___children___internal___contentDigest'
  | 'question___children___internal___description'
  | 'question___children___internal___fieldOwners'
  | 'question___children___internal___ignoreType'
  | 'question___children___internal___mediaType'
  | 'question___children___internal___owner'
  | 'question___children___internal___type'
  | 'question___internal___content'
  | 'question___internal___contentDigest'
  | 'question___internal___description'
  | 'question___internal___fieldOwners'
  | 'question___internal___ignoreType'
  | 'question___internal___mediaType'
  | 'question___internal___owner'
  | 'question___internal___type'
  | 'question___question'
  | 'question___sys___type'
  | 'question___fields___excerpt'
  | 'question___fields___readingTime'
  | 'question___fields___language'
  | 'question___fields___order'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'childrenContentfulQuestionQuestionTextNode'
  | 'childrenContentfulQuestionQuestionTextNode___id'
  | 'childrenContentfulQuestionQuestionTextNode___parent___id'
  | 'childrenContentfulQuestionQuestionTextNode___parent___parent___id'
  | 'childrenContentfulQuestionQuestionTextNode___parent___parent___children'
  | 'childrenContentfulQuestionQuestionTextNode___parent___children'
  | 'childrenContentfulQuestionQuestionTextNode___parent___children___id'
  | 'childrenContentfulQuestionQuestionTextNode___parent___children___children'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___content'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___description'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___mediaType'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___owner'
  | 'childrenContentfulQuestionQuestionTextNode___parent___internal___type'
  | 'childrenContentfulQuestionQuestionTextNode___children'
  | 'childrenContentfulQuestionQuestionTextNode___children___id'
  | 'childrenContentfulQuestionQuestionTextNode___children___parent___id'
  | 'childrenContentfulQuestionQuestionTextNode___children___parent___children'
  | 'childrenContentfulQuestionQuestionTextNode___children___children'
  | 'childrenContentfulQuestionQuestionTextNode___children___children___id'
  | 'childrenContentfulQuestionQuestionTextNode___children___children___children'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___content'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___contentDigest'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___description'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___ignoreType'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___mediaType'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___owner'
  | 'childrenContentfulQuestionQuestionTextNode___children___internal___type'
  | 'childrenContentfulQuestionQuestionTextNode___internal___content'
  | 'childrenContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'childrenContentfulQuestionQuestionTextNode___internal___description'
  | 'childrenContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'childrenContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'childrenContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'childrenContentfulQuestionQuestionTextNode___internal___owner'
  | 'childrenContentfulQuestionQuestionTextNode___internal___type'
  | 'childrenContentfulQuestionQuestionTextNode___question'
  | 'childrenContentfulQuestionQuestionTextNode___sys___type'
  | 'childrenContentfulQuestionQuestionTextNode___fields___excerpt'
  | 'childrenContentfulQuestionQuestionTextNode___fields___readingTime'
  | 'childrenContentfulQuestionQuestionTextNode___fields___language'
  | 'childrenContentfulQuestionQuestionTextNode___fields___order'
  | 'childContentfulQuestionQuestionTextNode___id'
  | 'childContentfulQuestionQuestionTextNode___parent___id'
  | 'childContentfulQuestionQuestionTextNode___parent___parent___id'
  | 'childContentfulQuestionQuestionTextNode___parent___parent___children'
  | 'childContentfulQuestionQuestionTextNode___parent___children'
  | 'childContentfulQuestionQuestionTextNode___parent___children___id'
  | 'childContentfulQuestionQuestionTextNode___parent___children___children'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___content'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___contentDigest'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___description'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___fieldOwners'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___ignoreType'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___mediaType'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___owner'
  | 'childContentfulQuestionQuestionTextNode___parent___internal___type'
  | 'childContentfulQuestionQuestionTextNode___children'
  | 'childContentfulQuestionQuestionTextNode___children___id'
  | 'childContentfulQuestionQuestionTextNode___children___parent___id'
  | 'childContentfulQuestionQuestionTextNode___children___parent___children'
  | 'childContentfulQuestionQuestionTextNode___children___children'
  | 'childContentfulQuestionQuestionTextNode___children___children___id'
  | 'childContentfulQuestionQuestionTextNode___children___children___children'
  | 'childContentfulQuestionQuestionTextNode___children___internal___content'
  | 'childContentfulQuestionQuestionTextNode___children___internal___contentDigest'
  | 'childContentfulQuestionQuestionTextNode___children___internal___description'
  | 'childContentfulQuestionQuestionTextNode___children___internal___fieldOwners'
  | 'childContentfulQuestionQuestionTextNode___children___internal___ignoreType'
  | 'childContentfulQuestionQuestionTextNode___children___internal___mediaType'
  | 'childContentfulQuestionQuestionTextNode___children___internal___owner'
  | 'childContentfulQuestionQuestionTextNode___children___internal___type'
  | 'childContentfulQuestionQuestionTextNode___internal___content'
  | 'childContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'childContentfulQuestionQuestionTextNode___internal___description'
  | 'childContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'childContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'childContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'childContentfulQuestionQuestionTextNode___internal___owner'
  | 'childContentfulQuestionQuestionTextNode___internal___type'
  | 'childContentfulQuestionQuestionTextNode___question'
  | 'childContentfulQuestionQuestionTextNode___sys___type'
  | 'childContentfulQuestionQuestionTextNode___fields___excerpt'
  | 'childContentfulQuestionQuestionTextNode___fields___readingTime'
  | 'childContentfulQuestionQuestionTextNode___fields___language'
  | 'childContentfulQuestionQuestionTextNode___fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulQuestionFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulQuestionFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  answers?: Maybe<ContentfulAnswerFilterListInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  question?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionSysFilterInput>;
  fields?: Maybe<ContentfulQuestionFieldsFilterInput>;
  childrenContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNodeFilterListInput>;
  childContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulQuestionFilterListInput = {
  elemMatch?: Maybe<ContentfulQuestionFilterInput>;
};

export type ContentfulQuestionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionEdge>;
  nodes: Array<ContentfulQuestion>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaire = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulQuestionnaireDescription>;
  questions?: Maybe<Array<Maybe<ContentfulQuestion>>>;
  results?: Maybe<Array<Maybe<ContentfulResult>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQuestionnaireSys>;
  fields?: Maybe<ContentfulQuestionnaireFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulQuestionnaireCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQuestionnaireUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionnaireEdge>;
  nodes: Array<ContentfulQuestionnaire>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuestionnaireGroupConnection>;
};


export type ContentfulQuestionnaireConnectionDistinctArgs = {
  field: ContentfulQuestionnaireFieldsEnum;
};


export type ContentfulQuestionnaireConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuestionnaireFieldsEnum;
};

export type ContentfulQuestionnaireDescription = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionnaireEdge = {
  next?: Maybe<ContentfulQuestionnaire>;
  node: ContentfulQuestionnaire;
  previous?: Maybe<ContentfulQuestionnaire>;
};

export type ContentfulQuestionnaireFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulQuestionnaireFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'description___raw'
  | 'questions'
  | 'questions___contentful_id'
  | 'questions___id'
  | 'questions___node_locale'
  | 'questions___title'
  | 'questions___type'
  | 'questions___answers'
  | 'questions___answers___contentful_id'
  | 'questions___answers___id'
  | 'questions___answers___node_locale'
  | 'questions___answers___title'
  | 'questions___answers___score'
  | 'questions___answers___question'
  | 'questions___answers___question___contentful_id'
  | 'questions___answers___question___id'
  | 'questions___answers___question___node_locale'
  | 'questions___answers___question___title'
  | 'questions___answers___question___type'
  | 'questions___answers___question___answers'
  | 'questions___answers___question___questionnaire'
  | 'questions___answers___question___spaceId'
  | 'questions___answers___question___createdAt'
  | 'questions___answers___question___updatedAt'
  | 'questions___answers___question___childrenContentfulQuestionQuestionTextNode'
  | 'questions___answers___question___children'
  | 'questions___answers___spaceId'
  | 'questions___answers___createdAt'
  | 'questions___answers___updatedAt'
  | 'questions___answers___sys___type'
  | 'questions___answers___sys___revision'
  | 'questions___answers___fields___excerpt'
  | 'questions___answers___fields___readingTime'
  | 'questions___answers___fields___language'
  | 'questions___answers___fields___order'
  | 'questions___answers___parent___id'
  | 'questions___answers___parent___children'
  | 'questions___answers___children'
  | 'questions___answers___children___id'
  | 'questions___answers___children___children'
  | 'questions___answers___internal___content'
  | 'questions___answers___internal___contentDigest'
  | 'questions___answers___internal___description'
  | 'questions___answers___internal___fieldOwners'
  | 'questions___answers___internal___ignoreType'
  | 'questions___answers___internal___mediaType'
  | 'questions___answers___internal___owner'
  | 'questions___answers___internal___type'
  | 'questions___questionnaire'
  | 'questions___questionnaire___contentful_id'
  | 'questions___questionnaire___id'
  | 'questions___questionnaire___node_locale'
  | 'questions___questionnaire___title'
  | 'questions___questionnaire___slug'
  | 'questions___questionnaire___description___raw'
  | 'questions___questionnaire___questions'
  | 'questions___questionnaire___questions___contentful_id'
  | 'questions___questionnaire___questions___id'
  | 'questions___questionnaire___questions___node_locale'
  | 'questions___questionnaire___questions___title'
  | 'questions___questionnaire___questions___type'
  | 'questions___questionnaire___questions___answers'
  | 'questions___questionnaire___questions___questionnaire'
  | 'questions___questionnaire___questions___spaceId'
  | 'questions___questionnaire___questions___createdAt'
  | 'questions___questionnaire___questions___updatedAt'
  | 'questions___questionnaire___questions___childrenContentfulQuestionQuestionTextNode'
  | 'questions___questionnaire___questions___children'
  | 'questions___questionnaire___results'
  | 'questions___questionnaire___results___contentful_id'
  | 'questions___questionnaire___results___id'
  | 'questions___questionnaire___results___node_locale'
  | 'questions___questionnaire___results___title'
  | 'questions___questionnaire___results___questionnaire'
  | 'questions___questionnaire___results___spaceId'
  | 'questions___questionnaire___results___createdAt'
  | 'questions___questionnaire___results___updatedAt'
  | 'questions___questionnaire___results___childrenContentfulResultScoreRangeJsonNode'
  | 'questions___questionnaire___results___children'
  | 'questions___questionnaire___spaceId'
  | 'questions___questionnaire___createdAt'
  | 'questions___questionnaire___updatedAt'
  | 'questions___questionnaire___sys___type'
  | 'questions___questionnaire___sys___revision'
  | 'questions___questionnaire___fields___excerpt'
  | 'questions___questionnaire___fields___readingTime'
  | 'questions___questionnaire___fields___language'
  | 'questions___questionnaire___fields___order'
  | 'questions___questionnaire___parent___id'
  | 'questions___questionnaire___parent___children'
  | 'questions___questionnaire___children'
  | 'questions___questionnaire___children___id'
  | 'questions___questionnaire___children___children'
  | 'questions___questionnaire___internal___content'
  | 'questions___questionnaire___internal___contentDigest'
  | 'questions___questionnaire___internal___description'
  | 'questions___questionnaire___internal___fieldOwners'
  | 'questions___questionnaire___internal___ignoreType'
  | 'questions___questionnaire___internal___mediaType'
  | 'questions___questionnaire___internal___owner'
  | 'questions___questionnaire___internal___type'
  | 'questions___question___id'
  | 'questions___question___parent___id'
  | 'questions___question___parent___children'
  | 'questions___question___children'
  | 'questions___question___children___id'
  | 'questions___question___children___children'
  | 'questions___question___internal___content'
  | 'questions___question___internal___contentDigest'
  | 'questions___question___internal___description'
  | 'questions___question___internal___fieldOwners'
  | 'questions___question___internal___ignoreType'
  | 'questions___question___internal___mediaType'
  | 'questions___question___internal___owner'
  | 'questions___question___internal___type'
  | 'questions___question___question'
  | 'questions___question___sys___type'
  | 'questions___question___fields___excerpt'
  | 'questions___question___fields___readingTime'
  | 'questions___question___fields___language'
  | 'questions___question___fields___order'
  | 'questions___spaceId'
  | 'questions___createdAt'
  | 'questions___updatedAt'
  | 'questions___sys___type'
  | 'questions___sys___revision'
  | 'questions___fields___excerpt'
  | 'questions___fields___readingTime'
  | 'questions___fields___language'
  | 'questions___fields___order'
  | 'questions___childrenContentfulQuestionQuestionTextNode'
  | 'questions___childrenContentfulQuestionQuestionTextNode___id'
  | 'questions___childrenContentfulQuestionQuestionTextNode___parent___id'
  | 'questions___childrenContentfulQuestionQuestionTextNode___parent___children'
  | 'questions___childrenContentfulQuestionQuestionTextNode___children'
  | 'questions___childrenContentfulQuestionQuestionTextNode___children___id'
  | 'questions___childrenContentfulQuestionQuestionTextNode___children___children'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___content'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___description'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___owner'
  | 'questions___childrenContentfulQuestionQuestionTextNode___internal___type'
  | 'questions___childrenContentfulQuestionQuestionTextNode___question'
  | 'questions___childrenContentfulQuestionQuestionTextNode___sys___type'
  | 'questions___childrenContentfulQuestionQuestionTextNode___fields___excerpt'
  | 'questions___childrenContentfulQuestionQuestionTextNode___fields___readingTime'
  | 'questions___childrenContentfulQuestionQuestionTextNode___fields___language'
  | 'questions___childrenContentfulQuestionQuestionTextNode___fields___order'
  | 'questions___childContentfulQuestionQuestionTextNode___id'
  | 'questions___childContentfulQuestionQuestionTextNode___parent___id'
  | 'questions___childContentfulQuestionQuestionTextNode___parent___children'
  | 'questions___childContentfulQuestionQuestionTextNode___children'
  | 'questions___childContentfulQuestionQuestionTextNode___children___id'
  | 'questions___childContentfulQuestionQuestionTextNode___children___children'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___content'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___contentDigest'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___description'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___fieldOwners'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___ignoreType'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___mediaType'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___owner'
  | 'questions___childContentfulQuestionQuestionTextNode___internal___type'
  | 'questions___childContentfulQuestionQuestionTextNode___question'
  | 'questions___childContentfulQuestionQuestionTextNode___sys___type'
  | 'questions___childContentfulQuestionQuestionTextNode___fields___excerpt'
  | 'questions___childContentfulQuestionQuestionTextNode___fields___readingTime'
  | 'questions___childContentfulQuestionQuestionTextNode___fields___language'
  | 'questions___childContentfulQuestionQuestionTextNode___fields___order'
  | 'questions___parent___id'
  | 'questions___parent___parent___id'
  | 'questions___parent___parent___children'
  | 'questions___parent___children'
  | 'questions___parent___children___id'
  | 'questions___parent___children___children'
  | 'questions___parent___internal___content'
  | 'questions___parent___internal___contentDigest'
  | 'questions___parent___internal___description'
  | 'questions___parent___internal___fieldOwners'
  | 'questions___parent___internal___ignoreType'
  | 'questions___parent___internal___mediaType'
  | 'questions___parent___internal___owner'
  | 'questions___parent___internal___type'
  | 'questions___children'
  | 'questions___children___id'
  | 'questions___children___parent___id'
  | 'questions___children___parent___children'
  | 'questions___children___children'
  | 'questions___children___children___id'
  | 'questions___children___children___children'
  | 'questions___children___internal___content'
  | 'questions___children___internal___contentDigest'
  | 'questions___children___internal___description'
  | 'questions___children___internal___fieldOwners'
  | 'questions___children___internal___ignoreType'
  | 'questions___children___internal___mediaType'
  | 'questions___children___internal___owner'
  | 'questions___children___internal___type'
  | 'questions___internal___content'
  | 'questions___internal___contentDigest'
  | 'questions___internal___description'
  | 'questions___internal___fieldOwners'
  | 'questions___internal___ignoreType'
  | 'questions___internal___mediaType'
  | 'questions___internal___owner'
  | 'questions___internal___type'
  | 'results'
  | 'results___contentful_id'
  | 'results___id'
  | 'results___node_locale'
  | 'results___title'
  | 'results___description___raw'
  | 'results___details___raw'
  | 'results___questionnaire'
  | 'results___questionnaire___contentful_id'
  | 'results___questionnaire___id'
  | 'results___questionnaire___node_locale'
  | 'results___questionnaire___title'
  | 'results___questionnaire___slug'
  | 'results___questionnaire___description___raw'
  | 'results___questionnaire___questions'
  | 'results___questionnaire___questions___contentful_id'
  | 'results___questionnaire___questions___id'
  | 'results___questionnaire___questions___node_locale'
  | 'results___questionnaire___questions___title'
  | 'results___questionnaire___questions___type'
  | 'results___questionnaire___questions___answers'
  | 'results___questionnaire___questions___questionnaire'
  | 'results___questionnaire___questions___spaceId'
  | 'results___questionnaire___questions___createdAt'
  | 'results___questionnaire___questions___updatedAt'
  | 'results___questionnaire___questions___childrenContentfulQuestionQuestionTextNode'
  | 'results___questionnaire___questions___children'
  | 'results___questionnaire___results'
  | 'results___questionnaire___results___contentful_id'
  | 'results___questionnaire___results___id'
  | 'results___questionnaire___results___node_locale'
  | 'results___questionnaire___results___title'
  | 'results___questionnaire___results___questionnaire'
  | 'results___questionnaire___results___spaceId'
  | 'results___questionnaire___results___createdAt'
  | 'results___questionnaire___results___updatedAt'
  | 'results___questionnaire___results___childrenContentfulResultScoreRangeJsonNode'
  | 'results___questionnaire___results___children'
  | 'results___questionnaire___spaceId'
  | 'results___questionnaire___createdAt'
  | 'results___questionnaire___updatedAt'
  | 'results___questionnaire___sys___type'
  | 'results___questionnaire___sys___revision'
  | 'results___questionnaire___fields___excerpt'
  | 'results___questionnaire___fields___readingTime'
  | 'results___questionnaire___fields___language'
  | 'results___questionnaire___fields___order'
  | 'results___questionnaire___parent___id'
  | 'results___questionnaire___parent___children'
  | 'results___questionnaire___children'
  | 'results___questionnaire___children___id'
  | 'results___questionnaire___children___children'
  | 'results___questionnaire___internal___content'
  | 'results___questionnaire___internal___contentDigest'
  | 'results___questionnaire___internal___description'
  | 'results___questionnaire___internal___fieldOwners'
  | 'results___questionnaire___internal___ignoreType'
  | 'results___questionnaire___internal___mediaType'
  | 'results___questionnaire___internal___owner'
  | 'results___questionnaire___internal___type'
  | 'results___scoreRange___id'
  | 'results___scoreRange___parent___id'
  | 'results___scoreRange___parent___children'
  | 'results___scoreRange___children'
  | 'results___scoreRange___children___id'
  | 'results___scoreRange___children___children'
  | 'results___scoreRange___internal___content'
  | 'results___scoreRange___internal___contentDigest'
  | 'results___scoreRange___internal___description'
  | 'results___scoreRange___internal___fieldOwners'
  | 'results___scoreRange___internal___ignoreType'
  | 'results___scoreRange___internal___mediaType'
  | 'results___scoreRange___internal___owner'
  | 'results___scoreRange___internal___type'
  | 'results___scoreRange___lowEnd'
  | 'results___scoreRange___highEnd'
  | 'results___scoreRange___sys___type'
  | 'results___scoreRange___fields___excerpt'
  | 'results___scoreRange___fields___readingTime'
  | 'results___scoreRange___fields___language'
  | 'results___scoreRange___fields___order'
  | 'results___spaceId'
  | 'results___createdAt'
  | 'results___updatedAt'
  | 'results___sys___type'
  | 'results___sys___revision'
  | 'results___fields___excerpt'
  | 'results___fields___readingTime'
  | 'results___fields___language'
  | 'results___fields___order'
  | 'results___childrenContentfulResultScoreRangeJsonNode'
  | 'results___childrenContentfulResultScoreRangeJsonNode___id'
  | 'results___childrenContentfulResultScoreRangeJsonNode___parent___id'
  | 'results___childrenContentfulResultScoreRangeJsonNode___parent___children'
  | 'results___childrenContentfulResultScoreRangeJsonNode___children'
  | 'results___childrenContentfulResultScoreRangeJsonNode___children___id'
  | 'results___childrenContentfulResultScoreRangeJsonNode___children___children'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___content'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___contentDigest'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___description'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___fieldOwners'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___ignoreType'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___mediaType'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___owner'
  | 'results___childrenContentfulResultScoreRangeJsonNode___internal___type'
  | 'results___childrenContentfulResultScoreRangeJsonNode___lowEnd'
  | 'results___childrenContentfulResultScoreRangeJsonNode___highEnd'
  | 'results___childrenContentfulResultScoreRangeJsonNode___sys___type'
  | 'results___childrenContentfulResultScoreRangeJsonNode___fields___excerpt'
  | 'results___childrenContentfulResultScoreRangeJsonNode___fields___readingTime'
  | 'results___childrenContentfulResultScoreRangeJsonNode___fields___language'
  | 'results___childrenContentfulResultScoreRangeJsonNode___fields___order'
  | 'results___childContentfulResultScoreRangeJsonNode___id'
  | 'results___childContentfulResultScoreRangeJsonNode___parent___id'
  | 'results___childContentfulResultScoreRangeJsonNode___parent___children'
  | 'results___childContentfulResultScoreRangeJsonNode___children'
  | 'results___childContentfulResultScoreRangeJsonNode___children___id'
  | 'results___childContentfulResultScoreRangeJsonNode___children___children'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___content'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___contentDigest'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___description'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___fieldOwners'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___ignoreType'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___mediaType'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___owner'
  | 'results___childContentfulResultScoreRangeJsonNode___internal___type'
  | 'results___childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'results___childContentfulResultScoreRangeJsonNode___highEnd'
  | 'results___childContentfulResultScoreRangeJsonNode___sys___type'
  | 'results___childContentfulResultScoreRangeJsonNode___fields___excerpt'
  | 'results___childContentfulResultScoreRangeJsonNode___fields___readingTime'
  | 'results___childContentfulResultScoreRangeJsonNode___fields___language'
  | 'results___childContentfulResultScoreRangeJsonNode___fields___order'
  | 'results___parent___id'
  | 'results___parent___parent___id'
  | 'results___parent___parent___children'
  | 'results___parent___children'
  | 'results___parent___children___id'
  | 'results___parent___children___children'
  | 'results___parent___internal___content'
  | 'results___parent___internal___contentDigest'
  | 'results___parent___internal___description'
  | 'results___parent___internal___fieldOwners'
  | 'results___parent___internal___ignoreType'
  | 'results___parent___internal___mediaType'
  | 'results___parent___internal___owner'
  | 'results___parent___internal___type'
  | 'results___children'
  | 'results___children___id'
  | 'results___children___parent___id'
  | 'results___children___parent___children'
  | 'results___children___children'
  | 'results___children___children___id'
  | 'results___children___children___children'
  | 'results___children___internal___content'
  | 'results___children___internal___contentDigest'
  | 'results___children___internal___description'
  | 'results___children___internal___fieldOwners'
  | 'results___children___internal___ignoreType'
  | 'results___children___internal___mediaType'
  | 'results___children___internal___owner'
  | 'results___children___internal___type'
  | 'results___internal___content'
  | 'results___internal___contentDigest'
  | 'results___internal___description'
  | 'results___internal___fieldOwners'
  | 'results___internal___ignoreType'
  | 'results___internal___mediaType'
  | 'results___internal___owner'
  | 'results___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulQuestionnaireFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulQuestionnaireFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulQuestionnaireDescriptionFilterInput>;
  questions?: Maybe<ContentfulQuestionFilterListInput>;
  results?: Maybe<ContentfulResultFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionnaireSysFilterInput>;
  fields?: Maybe<ContentfulQuestionnaireFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulQuestionnaireFilterListInput = {
  elemMatch?: Maybe<ContentfulQuestionnaireFilterInput>;
};

export type ContentfulQuestionnaireGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionnaireEdge>;
  nodes: Array<ContentfulQuestionnaire>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuestionnaireFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuestionnaireSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQuestionnaireSysContentType>;
};

export type ContentfulQuestionnaireSysContentType = {
  sys?: Maybe<ContentfulQuestionnaireSysContentTypeSys>;
};

export type ContentfulQuestionnaireSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQuestionnaireSysContentTypeSysFilterInput>;
};

export type ContentfulQuestionnaireSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionnaireSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionnaireSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQuestionnaireSysContentTypeFilterInput>;
};

export type ContentfulQuestionQuestionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  question?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulQuestionQuestionTextNodeSys>;
  fields?: Maybe<ContentfulQuestionQuestionTextNodeFields>;
};

export type ContentfulQuestionQuestionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionQuestionTextNodeEdge>;
  nodes: Array<ContentfulQuestionQuestionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuestionQuestionTextNodeGroupConnection>;
};


export type ContentfulQuestionQuestionTextNodeConnectionDistinctArgs = {
  field: ContentfulQuestionQuestionTextNodeFieldsEnum;
};


export type ContentfulQuestionQuestionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuestionQuestionTextNodeFieldsEnum;
};

export type ContentfulQuestionQuestionTextNodeEdge = {
  next?: Maybe<ContentfulQuestionQuestionTextNode>;
  node: ContentfulQuestionQuestionTextNode;
  previous?: Maybe<ContentfulQuestionQuestionTextNode>;
};

export type ContentfulQuestionQuestionTextNodeFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulQuestionQuestionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'question'
  | 'sys___type'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order';

export type ContentfulQuestionQuestionTextNodeFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulQuestionQuestionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  question?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionQuestionTextNodeSysFilterInput>;
  fields?: Maybe<ContentfulQuestionQuestionTextNodeFieldsFilterInput>;
};

export type ContentfulQuestionQuestionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
};

export type ContentfulQuestionQuestionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuestionQuestionTextNodeEdge>;
  nodes: Array<ContentfulQuestionQuestionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionQuestionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuestionQuestionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuestionQuestionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionQuestionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuestionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuestionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQuestionSysContentType>;
};

export type ContentfulQuestionSysContentType = {
  sys?: Maybe<ContentfulQuestionSysContentTypeSys>;
};

export type ContentfulQuestionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQuestionSysContentTypeSysFilterInput>;
};

export type ContentfulQuestionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQuestionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuestionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQuestionSysContentTypeFilterInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResult = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulResultDescription>;
  details?: Maybe<ContentfulResultDetails>;
  questionnaire?: Maybe<Array<Maybe<ContentfulQuestionnaire>>>;
  scoreRange?: Maybe<ContentfulResultScoreRangeJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulResultSys>;
  fields?: Maybe<ContentfulResultFields>;
  /** Returns all children nodes filtered by type contentfulResultScoreRangeJsonNode */
  childrenContentfulResultScoreRangeJsonNode?: Maybe<Array<Maybe<ContentfulResultScoreRangeJsonNode>>>;
  /**
   * Returns the first child node of type contentfulResultScoreRangeJsonNode or
   * null if there are no children of given type on this node
   */
  childContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulResultCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulResultUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulResultConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultEdge>;
  nodes: Array<ContentfulResult>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulResultGroupConnection>;
};


export type ContentfulResultConnectionDistinctArgs = {
  field: ContentfulResultFieldsEnum;
};


export type ContentfulResultConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulResultFieldsEnum;
};

export type ContentfulResultDescription = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulResultDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultDetails = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulResultDetailsFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultEdge = {
  next?: Maybe<ContentfulResult>;
  node: ContentfulResult;
  previous?: Maybe<ContentfulResult>;
};

export type ContentfulResultFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulResultFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'description___raw'
  | 'details___raw'
  | 'questionnaire'
  | 'questionnaire___contentful_id'
  | 'questionnaire___id'
  | 'questionnaire___node_locale'
  | 'questionnaire___title'
  | 'questionnaire___slug'
  | 'questionnaire___description___raw'
  | 'questionnaire___questions'
  | 'questionnaire___questions___contentful_id'
  | 'questionnaire___questions___id'
  | 'questionnaire___questions___node_locale'
  | 'questionnaire___questions___title'
  | 'questionnaire___questions___type'
  | 'questionnaire___questions___answers'
  | 'questionnaire___questions___answers___contentful_id'
  | 'questionnaire___questions___answers___id'
  | 'questionnaire___questions___answers___node_locale'
  | 'questionnaire___questions___answers___title'
  | 'questionnaire___questions___answers___score'
  | 'questionnaire___questions___answers___question'
  | 'questionnaire___questions___answers___spaceId'
  | 'questionnaire___questions___answers___createdAt'
  | 'questionnaire___questions___answers___updatedAt'
  | 'questionnaire___questions___answers___children'
  | 'questionnaire___questions___questionnaire'
  | 'questionnaire___questions___questionnaire___contentful_id'
  | 'questionnaire___questions___questionnaire___id'
  | 'questionnaire___questions___questionnaire___node_locale'
  | 'questionnaire___questions___questionnaire___title'
  | 'questionnaire___questions___questionnaire___slug'
  | 'questionnaire___questions___questionnaire___questions'
  | 'questionnaire___questions___questionnaire___results'
  | 'questionnaire___questions___questionnaire___spaceId'
  | 'questionnaire___questions___questionnaire___createdAt'
  | 'questionnaire___questions___questionnaire___updatedAt'
  | 'questionnaire___questions___questionnaire___children'
  | 'questionnaire___questions___question___id'
  | 'questionnaire___questions___question___children'
  | 'questionnaire___questions___question___question'
  | 'questionnaire___questions___spaceId'
  | 'questionnaire___questions___createdAt'
  | 'questionnaire___questions___updatedAt'
  | 'questionnaire___questions___sys___type'
  | 'questionnaire___questions___sys___revision'
  | 'questionnaire___questions___fields___excerpt'
  | 'questionnaire___questions___fields___readingTime'
  | 'questionnaire___questions___fields___language'
  | 'questionnaire___questions___fields___order'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode___id'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode___children'
  | 'questionnaire___questions___childrenContentfulQuestionQuestionTextNode___question'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___id'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___children'
  | 'questionnaire___questions___childContentfulQuestionQuestionTextNode___question'
  | 'questionnaire___questions___parent___id'
  | 'questionnaire___questions___parent___children'
  | 'questionnaire___questions___children'
  | 'questionnaire___questions___children___id'
  | 'questionnaire___questions___children___children'
  | 'questionnaire___questions___internal___content'
  | 'questionnaire___questions___internal___contentDigest'
  | 'questionnaire___questions___internal___description'
  | 'questionnaire___questions___internal___fieldOwners'
  | 'questionnaire___questions___internal___ignoreType'
  | 'questionnaire___questions___internal___mediaType'
  | 'questionnaire___questions___internal___owner'
  | 'questionnaire___questions___internal___type'
  | 'questionnaire___results'
  | 'questionnaire___results___contentful_id'
  | 'questionnaire___results___id'
  | 'questionnaire___results___node_locale'
  | 'questionnaire___results___title'
  | 'questionnaire___results___description___raw'
  | 'questionnaire___results___details___raw'
  | 'questionnaire___results___questionnaire'
  | 'questionnaire___results___questionnaire___contentful_id'
  | 'questionnaire___results___questionnaire___id'
  | 'questionnaire___results___questionnaire___node_locale'
  | 'questionnaire___results___questionnaire___title'
  | 'questionnaire___results___questionnaire___slug'
  | 'questionnaire___results___questionnaire___questions'
  | 'questionnaire___results___questionnaire___results'
  | 'questionnaire___results___questionnaire___spaceId'
  | 'questionnaire___results___questionnaire___createdAt'
  | 'questionnaire___results___questionnaire___updatedAt'
  | 'questionnaire___results___questionnaire___children'
  | 'questionnaire___results___scoreRange___id'
  | 'questionnaire___results___scoreRange___children'
  | 'questionnaire___results___scoreRange___lowEnd'
  | 'questionnaire___results___scoreRange___highEnd'
  | 'questionnaire___results___spaceId'
  | 'questionnaire___results___createdAt'
  | 'questionnaire___results___updatedAt'
  | 'questionnaire___results___sys___type'
  | 'questionnaire___results___sys___revision'
  | 'questionnaire___results___fields___excerpt'
  | 'questionnaire___results___fields___readingTime'
  | 'questionnaire___results___fields___language'
  | 'questionnaire___results___fields___order'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___id'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___children'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___lowEnd'
  | 'questionnaire___results___childrenContentfulResultScoreRangeJsonNode___highEnd'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___id'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___children'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'questionnaire___results___childContentfulResultScoreRangeJsonNode___highEnd'
  | 'questionnaire___results___parent___id'
  | 'questionnaire___results___parent___children'
  | 'questionnaire___results___children'
  | 'questionnaire___results___children___id'
  | 'questionnaire___results___children___children'
  | 'questionnaire___results___internal___content'
  | 'questionnaire___results___internal___contentDigest'
  | 'questionnaire___results___internal___description'
  | 'questionnaire___results___internal___fieldOwners'
  | 'questionnaire___results___internal___ignoreType'
  | 'questionnaire___results___internal___mediaType'
  | 'questionnaire___results___internal___owner'
  | 'questionnaire___results___internal___type'
  | 'questionnaire___spaceId'
  | 'questionnaire___createdAt'
  | 'questionnaire___updatedAt'
  | 'questionnaire___sys___type'
  | 'questionnaire___sys___revision'
  | 'questionnaire___fields___excerpt'
  | 'questionnaire___fields___readingTime'
  | 'questionnaire___fields___language'
  | 'questionnaire___fields___order'
  | 'questionnaire___parent___id'
  | 'questionnaire___parent___parent___id'
  | 'questionnaire___parent___parent___children'
  | 'questionnaire___parent___children'
  | 'questionnaire___parent___children___id'
  | 'questionnaire___parent___children___children'
  | 'questionnaire___parent___internal___content'
  | 'questionnaire___parent___internal___contentDigest'
  | 'questionnaire___parent___internal___description'
  | 'questionnaire___parent___internal___fieldOwners'
  | 'questionnaire___parent___internal___ignoreType'
  | 'questionnaire___parent___internal___mediaType'
  | 'questionnaire___parent___internal___owner'
  | 'questionnaire___parent___internal___type'
  | 'questionnaire___children'
  | 'questionnaire___children___id'
  | 'questionnaire___children___parent___id'
  | 'questionnaire___children___parent___children'
  | 'questionnaire___children___children'
  | 'questionnaire___children___children___id'
  | 'questionnaire___children___children___children'
  | 'questionnaire___children___internal___content'
  | 'questionnaire___children___internal___contentDigest'
  | 'questionnaire___children___internal___description'
  | 'questionnaire___children___internal___fieldOwners'
  | 'questionnaire___children___internal___ignoreType'
  | 'questionnaire___children___internal___mediaType'
  | 'questionnaire___children___internal___owner'
  | 'questionnaire___children___internal___type'
  | 'questionnaire___internal___content'
  | 'questionnaire___internal___contentDigest'
  | 'questionnaire___internal___description'
  | 'questionnaire___internal___fieldOwners'
  | 'questionnaire___internal___ignoreType'
  | 'questionnaire___internal___mediaType'
  | 'questionnaire___internal___owner'
  | 'questionnaire___internal___type'
  | 'scoreRange___id'
  | 'scoreRange___parent___id'
  | 'scoreRange___parent___parent___id'
  | 'scoreRange___parent___parent___children'
  | 'scoreRange___parent___children'
  | 'scoreRange___parent___children___id'
  | 'scoreRange___parent___children___children'
  | 'scoreRange___parent___internal___content'
  | 'scoreRange___parent___internal___contentDigest'
  | 'scoreRange___parent___internal___description'
  | 'scoreRange___parent___internal___fieldOwners'
  | 'scoreRange___parent___internal___ignoreType'
  | 'scoreRange___parent___internal___mediaType'
  | 'scoreRange___parent___internal___owner'
  | 'scoreRange___parent___internal___type'
  | 'scoreRange___children'
  | 'scoreRange___children___id'
  | 'scoreRange___children___parent___id'
  | 'scoreRange___children___parent___children'
  | 'scoreRange___children___children'
  | 'scoreRange___children___children___id'
  | 'scoreRange___children___children___children'
  | 'scoreRange___children___internal___content'
  | 'scoreRange___children___internal___contentDigest'
  | 'scoreRange___children___internal___description'
  | 'scoreRange___children___internal___fieldOwners'
  | 'scoreRange___children___internal___ignoreType'
  | 'scoreRange___children___internal___mediaType'
  | 'scoreRange___children___internal___owner'
  | 'scoreRange___children___internal___type'
  | 'scoreRange___internal___content'
  | 'scoreRange___internal___contentDigest'
  | 'scoreRange___internal___description'
  | 'scoreRange___internal___fieldOwners'
  | 'scoreRange___internal___ignoreType'
  | 'scoreRange___internal___mediaType'
  | 'scoreRange___internal___owner'
  | 'scoreRange___internal___type'
  | 'scoreRange___lowEnd'
  | 'scoreRange___highEnd'
  | 'scoreRange___sys___type'
  | 'scoreRange___fields___excerpt'
  | 'scoreRange___fields___readingTime'
  | 'scoreRange___fields___language'
  | 'scoreRange___fields___order'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'childrenContentfulResultScoreRangeJsonNode'
  | 'childrenContentfulResultScoreRangeJsonNode___id'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___id'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___parent___id'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___parent___children'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___children'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___children___id'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___children___children'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___content'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___contentDigest'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___description'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___fieldOwners'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___ignoreType'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___mediaType'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___owner'
  | 'childrenContentfulResultScoreRangeJsonNode___parent___internal___type'
  | 'childrenContentfulResultScoreRangeJsonNode___children'
  | 'childrenContentfulResultScoreRangeJsonNode___children___id'
  | 'childrenContentfulResultScoreRangeJsonNode___children___parent___id'
  | 'childrenContentfulResultScoreRangeJsonNode___children___parent___children'
  | 'childrenContentfulResultScoreRangeJsonNode___children___children'
  | 'childrenContentfulResultScoreRangeJsonNode___children___children___id'
  | 'childrenContentfulResultScoreRangeJsonNode___children___children___children'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___content'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___contentDigest'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___description'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___fieldOwners'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___ignoreType'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___mediaType'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___owner'
  | 'childrenContentfulResultScoreRangeJsonNode___children___internal___type'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___content'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___contentDigest'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___description'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___fieldOwners'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___ignoreType'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___mediaType'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___owner'
  | 'childrenContentfulResultScoreRangeJsonNode___internal___type'
  | 'childrenContentfulResultScoreRangeJsonNode___lowEnd'
  | 'childrenContentfulResultScoreRangeJsonNode___highEnd'
  | 'childrenContentfulResultScoreRangeJsonNode___sys___type'
  | 'childrenContentfulResultScoreRangeJsonNode___fields___excerpt'
  | 'childrenContentfulResultScoreRangeJsonNode___fields___readingTime'
  | 'childrenContentfulResultScoreRangeJsonNode___fields___language'
  | 'childrenContentfulResultScoreRangeJsonNode___fields___order'
  | 'childContentfulResultScoreRangeJsonNode___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___parent___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___parent___children'
  | 'childContentfulResultScoreRangeJsonNode___parent___children'
  | 'childContentfulResultScoreRangeJsonNode___parent___children___id'
  | 'childContentfulResultScoreRangeJsonNode___parent___children___children'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___content'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___description'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___owner'
  | 'childContentfulResultScoreRangeJsonNode___parent___internal___type'
  | 'childContentfulResultScoreRangeJsonNode___children'
  | 'childContentfulResultScoreRangeJsonNode___children___id'
  | 'childContentfulResultScoreRangeJsonNode___children___parent___id'
  | 'childContentfulResultScoreRangeJsonNode___children___parent___children'
  | 'childContentfulResultScoreRangeJsonNode___children___children'
  | 'childContentfulResultScoreRangeJsonNode___children___children___id'
  | 'childContentfulResultScoreRangeJsonNode___children___children___children'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___content'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___description'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___owner'
  | 'childContentfulResultScoreRangeJsonNode___children___internal___type'
  | 'childContentfulResultScoreRangeJsonNode___internal___content'
  | 'childContentfulResultScoreRangeJsonNode___internal___contentDigest'
  | 'childContentfulResultScoreRangeJsonNode___internal___description'
  | 'childContentfulResultScoreRangeJsonNode___internal___fieldOwners'
  | 'childContentfulResultScoreRangeJsonNode___internal___ignoreType'
  | 'childContentfulResultScoreRangeJsonNode___internal___mediaType'
  | 'childContentfulResultScoreRangeJsonNode___internal___owner'
  | 'childContentfulResultScoreRangeJsonNode___internal___type'
  | 'childContentfulResultScoreRangeJsonNode___lowEnd'
  | 'childContentfulResultScoreRangeJsonNode___highEnd'
  | 'childContentfulResultScoreRangeJsonNode___sys___type'
  | 'childContentfulResultScoreRangeJsonNode___fields___excerpt'
  | 'childContentfulResultScoreRangeJsonNode___fields___readingTime'
  | 'childContentfulResultScoreRangeJsonNode___fields___language'
  | 'childContentfulResultScoreRangeJsonNode___fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulResultFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulResultFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulResultDescriptionFilterInput>;
  details?: Maybe<ContentfulResultDetailsFilterInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  scoreRange?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulResultSysFilterInput>;
  fields?: Maybe<ContentfulResultFieldsFilterInput>;
  childrenContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNodeFilterListInput>;
  childContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulResultFilterListInput = {
  elemMatch?: Maybe<ContentfulResultFilterInput>;
};

export type ContentfulResultGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultEdge>;
  nodes: Array<ContentfulResult>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulResultScoreRangeJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  lowEnd?: Maybe<Scalars['Int']>;
  highEnd?: Maybe<Scalars['Int']>;
  sys?: Maybe<ContentfulResultScoreRangeJsonNodeSys>;
  fields?: Maybe<ContentfulResultScoreRangeJsonNodeFields>;
};

export type ContentfulResultScoreRangeJsonNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultScoreRangeJsonNodeEdge>;
  nodes: Array<ContentfulResultScoreRangeJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulResultScoreRangeJsonNodeGroupConnection>;
};


export type ContentfulResultScoreRangeJsonNodeConnectionDistinctArgs = {
  field: ContentfulResultScoreRangeJsonNodeFieldsEnum;
};


export type ContentfulResultScoreRangeJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulResultScoreRangeJsonNodeFieldsEnum;
};

export type ContentfulResultScoreRangeJsonNodeEdge = {
  next?: Maybe<ContentfulResultScoreRangeJsonNode>;
  node: ContentfulResultScoreRangeJsonNode;
  previous?: Maybe<ContentfulResultScoreRangeJsonNode>;
};

export type ContentfulResultScoreRangeJsonNodeFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulResultScoreRangeJsonNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'lowEnd'
  | 'highEnd'
  | 'sys___type'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order';

export type ContentfulResultScoreRangeJsonNodeFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulResultScoreRangeJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lowEnd?: Maybe<IntQueryOperatorInput>;
  highEnd?: Maybe<IntQueryOperatorInput>;
  sys?: Maybe<ContentfulResultScoreRangeJsonNodeSysFilterInput>;
  fields?: Maybe<ContentfulResultScoreRangeJsonNodeFieldsFilterInput>;
};

export type ContentfulResultScoreRangeJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
};

export type ContentfulResultScoreRangeJsonNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulResultScoreRangeJsonNodeEdge>;
  nodes: Array<ContentfulResultScoreRangeJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulResultScoreRangeJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulResultScoreRangeJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResultScoreRangeJsonNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulResultScoreRangeJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulResultFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulResultSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulResultSysContentType>;
};

export type ContentfulResultSysContentType = {
  sys?: Maybe<ContentfulResultSysContentTypeSys>;
};

export type ContentfulResultSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulResultSysContentTypeSysFilterInput>;
};

export type ContentfulResultSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulResultSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulResultSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulResultSysContentTypeFilterInput>;
};

export type ContentfulSection = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  lesson?: Maybe<Array<Maybe<ContentfulLesson>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSectionSys>;
  fields?: Maybe<ContentfulSectionFields>;
  description?: Maybe<ContentfulSectionDescription>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSectionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSectionGroupConnection>;
};


export type ContentfulSectionConnectionDistinctArgs = {
  field: ContentfulSectionFieldsEnum;
};


export type ContentfulSectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSectionFieldsEnum;
};

export type ContentfulSectionDescription = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulSectionDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionEdge = {
  next?: Maybe<ContentfulSection>;
  node: ContentfulSection;
  previous?: Maybe<ContentfulSection>;
};

export type ContentfulSectionFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulSectionFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'order'
  | 'title'
  | 'lesson'
  | 'lesson___contentful_id'
  | 'lesson___id'
  | 'lesson___node_locale'
  | 'lesson___lessonName'
  | 'lesson___slug'
  | 'lesson___keywords'
  | 'lesson___author'
  | 'lesson___lessonContent___raw'
  | 'lesson___lessonContent___references'
  | 'lesson___lessonContent___references___contentful_id'
  | 'lesson___lessonContent___references___id'
  | 'lesson___lessonContent___references___spaceId'
  | 'lesson___lessonContent___references___createdAt'
  | 'lesson___lessonContent___references___updatedAt'
  | 'lesson___lessonContent___references___title'
  | 'lesson___lessonContent___references___description'
  | 'lesson___lessonContent___references___node_locale'
  | 'lesson___lessonContent___references___gatsbyImageData'
  | 'lesson___lessonContent___references___children'
  | 'lesson___additionalInformation___raw'
  | 'lesson___stage'
  | 'lesson___authorCard'
  | 'lesson___authorCard___contentful_id'
  | 'lesson___authorCard___id'
  | 'lesson___authorCard___node_locale'
  | 'lesson___authorCard___slug'
  | 'lesson___authorCard___name'
  | 'lesson___authorCard___credentials'
  | 'lesson___authorCard___description___raw'
  | 'lesson___authorCard___avatar___contentful_id'
  | 'lesson___authorCard___avatar___id'
  | 'lesson___authorCard___avatar___spaceId'
  | 'lesson___authorCard___avatar___createdAt'
  | 'lesson___authorCard___avatar___updatedAt'
  | 'lesson___authorCard___avatar___title'
  | 'lesson___authorCard___avatar___description'
  | 'lesson___authorCard___avatar___node_locale'
  | 'lesson___authorCard___avatar___gatsbyImageData'
  | 'lesson___authorCard___avatar___children'
  | 'lesson___authorCard___spaceId'
  | 'lesson___authorCard___createdAt'
  | 'lesson___authorCard___updatedAt'
  | 'lesson___authorCard___sys___type'
  | 'lesson___authorCard___sys___revision'
  | 'lesson___authorCard___fields___excerpt'
  | 'lesson___authorCard___fields___readingTime'
  | 'lesson___authorCard___fields___language'
  | 'lesson___authorCard___fields___order'
  | 'lesson___authorCard___lesson'
  | 'lesson___authorCard___lesson___contentful_id'
  | 'lesson___authorCard___lesson___id'
  | 'lesson___authorCard___lesson___node_locale'
  | 'lesson___authorCard___lesson___lessonName'
  | 'lesson___authorCard___lesson___slug'
  | 'lesson___authorCard___lesson___keywords'
  | 'lesson___authorCard___lesson___author'
  | 'lesson___authorCard___lesson___stage'
  | 'lesson___authorCard___lesson___authorCard'
  | 'lesson___authorCard___lesson___habit'
  | 'lesson___authorCard___lesson___week'
  | 'lesson___authorCard___lesson___spaceId'
  | 'lesson___authorCard___lesson___createdAt'
  | 'lesson___authorCard___lesson___updatedAt'
  | 'lesson___authorCard___lesson___customComplete'
  | 'lesson___authorCard___lesson___metalesson'
  | 'lesson___authorCard___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___authorCard___lesson___children'
  | 'lesson___authorCard___parent___id'
  | 'lesson___authorCard___parent___children'
  | 'lesson___authorCard___children'
  | 'lesson___authorCard___children___id'
  | 'lesson___authorCard___children___children'
  | 'lesson___authorCard___internal___content'
  | 'lesson___authorCard___internal___contentDigest'
  | 'lesson___authorCard___internal___description'
  | 'lesson___authorCard___internal___fieldOwners'
  | 'lesson___authorCard___internal___ignoreType'
  | 'lesson___authorCard___internal___mediaType'
  | 'lesson___authorCard___internal___owner'
  | 'lesson___authorCard___internal___type'
  | 'lesson___cover___contentful_id'
  | 'lesson___cover___id'
  | 'lesson___cover___spaceId'
  | 'lesson___cover___createdAt'
  | 'lesson___cover___updatedAt'
  | 'lesson___cover___file___url'
  | 'lesson___cover___file___fileName'
  | 'lesson___cover___file___contentType'
  | 'lesson___cover___title'
  | 'lesson___cover___description'
  | 'lesson___cover___node_locale'
  | 'lesson___cover___sys___type'
  | 'lesson___cover___sys___revision'
  | 'lesson___cover___fields___excerpt'
  | 'lesson___cover___fields___readingTime'
  | 'lesson___cover___fields___language'
  | 'lesson___cover___fields___order'
  | 'lesson___cover___fixed___base64'
  | 'lesson___cover___fixed___tracedSVG'
  | 'lesson___cover___fixed___aspectRatio'
  | 'lesson___cover___fixed___width'
  | 'lesson___cover___fixed___height'
  | 'lesson___cover___fixed___src'
  | 'lesson___cover___fixed___srcSet'
  | 'lesson___cover___fixed___srcWebp'
  | 'lesson___cover___fixed___srcSetWebp'
  | 'lesson___cover___resolutions___base64'
  | 'lesson___cover___resolutions___tracedSVG'
  | 'lesson___cover___resolutions___aspectRatio'
  | 'lesson___cover___resolutions___width'
  | 'lesson___cover___resolutions___height'
  | 'lesson___cover___resolutions___src'
  | 'lesson___cover___resolutions___srcSet'
  | 'lesson___cover___resolutions___srcWebp'
  | 'lesson___cover___resolutions___srcSetWebp'
  | 'lesson___cover___fluid___base64'
  | 'lesson___cover___fluid___tracedSVG'
  | 'lesson___cover___fluid___aspectRatio'
  | 'lesson___cover___fluid___src'
  | 'lesson___cover___fluid___srcSet'
  | 'lesson___cover___fluid___srcWebp'
  | 'lesson___cover___fluid___srcSetWebp'
  | 'lesson___cover___fluid___sizes'
  | 'lesson___cover___sizes___base64'
  | 'lesson___cover___sizes___tracedSVG'
  | 'lesson___cover___sizes___aspectRatio'
  | 'lesson___cover___sizes___src'
  | 'lesson___cover___sizes___srcSet'
  | 'lesson___cover___sizes___srcWebp'
  | 'lesson___cover___sizes___srcSetWebp'
  | 'lesson___cover___sizes___sizes'
  | 'lesson___cover___gatsbyImageData'
  | 'lesson___cover___resize___base64'
  | 'lesson___cover___resize___tracedSVG'
  | 'lesson___cover___resize___src'
  | 'lesson___cover___resize___width'
  | 'lesson___cover___resize___height'
  | 'lesson___cover___resize___aspectRatio'
  | 'lesson___cover___parent___id'
  | 'lesson___cover___parent___children'
  | 'lesson___cover___children'
  | 'lesson___cover___children___id'
  | 'lesson___cover___children___children'
  | 'lesson___cover___internal___content'
  | 'lesson___cover___internal___contentDigest'
  | 'lesson___cover___internal___description'
  | 'lesson___cover___internal___fieldOwners'
  | 'lesson___cover___internal___ignoreType'
  | 'lesson___cover___internal___mediaType'
  | 'lesson___cover___internal___owner'
  | 'lesson___cover___internal___type'
  | 'lesson___section___contentful_id'
  | 'lesson___section___id'
  | 'lesson___section___node_locale'
  | 'lesson___section___order'
  | 'lesson___section___title'
  | 'lesson___section___lesson'
  | 'lesson___section___lesson___contentful_id'
  | 'lesson___section___lesson___id'
  | 'lesson___section___lesson___node_locale'
  | 'lesson___section___lesson___lessonName'
  | 'lesson___section___lesson___slug'
  | 'lesson___section___lesson___keywords'
  | 'lesson___section___lesson___author'
  | 'lesson___section___lesson___stage'
  | 'lesson___section___lesson___authorCard'
  | 'lesson___section___lesson___habit'
  | 'lesson___section___lesson___week'
  | 'lesson___section___lesson___spaceId'
  | 'lesson___section___lesson___createdAt'
  | 'lesson___section___lesson___updatedAt'
  | 'lesson___section___lesson___customComplete'
  | 'lesson___section___lesson___metalesson'
  | 'lesson___section___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___section___lesson___children'
  | 'lesson___section___spaceId'
  | 'lesson___section___createdAt'
  | 'lesson___section___updatedAt'
  | 'lesson___section___sys___type'
  | 'lesson___section___sys___revision'
  | 'lesson___section___fields___excerpt'
  | 'lesson___section___fields___readingTime'
  | 'lesson___section___fields___language'
  | 'lesson___section___fields___order'
  | 'lesson___section___description___raw'
  | 'lesson___section___parent___id'
  | 'lesson___section___parent___children'
  | 'lesson___section___children'
  | 'lesson___section___children___id'
  | 'lesson___section___children___children'
  | 'lesson___section___internal___content'
  | 'lesson___section___internal___contentDigest'
  | 'lesson___section___internal___description'
  | 'lesson___section___internal___fieldOwners'
  | 'lesson___section___internal___ignoreType'
  | 'lesson___section___internal___mediaType'
  | 'lesson___section___internal___owner'
  | 'lesson___section___internal___type'
  | 'lesson___habit'
  | 'lesson___habit___contentful_id'
  | 'lesson___habit___id'
  | 'lesson___habit___node_locale'
  | 'lesson___habit___title'
  | 'lesson___habit___slug'
  | 'lesson___habit___period'
  | 'lesson___habit___description___raw'
  | 'lesson___habit___description___references'
  | 'lesson___habit___lesson'
  | 'lesson___habit___lesson___contentful_id'
  | 'lesson___habit___lesson___id'
  | 'lesson___habit___lesson___node_locale'
  | 'lesson___habit___lesson___lessonName'
  | 'lesson___habit___lesson___slug'
  | 'lesson___habit___lesson___keywords'
  | 'lesson___habit___lesson___author'
  | 'lesson___habit___lesson___stage'
  | 'lesson___habit___lesson___authorCard'
  | 'lesson___habit___lesson___habit'
  | 'lesson___habit___lesson___week'
  | 'lesson___habit___lesson___spaceId'
  | 'lesson___habit___lesson___createdAt'
  | 'lesson___habit___lesson___updatedAt'
  | 'lesson___habit___lesson___customComplete'
  | 'lesson___habit___lesson___metalesson'
  | 'lesson___habit___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___habit___lesson___children'
  | 'lesson___habit___spaceId'
  | 'lesson___habit___createdAt'
  | 'lesson___habit___updatedAt'
  | 'lesson___habit___sys___type'
  | 'lesson___habit___sys___revision'
  | 'lesson___habit___fields___excerpt'
  | 'lesson___habit___fields___readingTime'
  | 'lesson___habit___fields___language'
  | 'lesson___habit___fields___order'
  | 'lesson___habit___parent___id'
  | 'lesson___habit___parent___children'
  | 'lesson___habit___children'
  | 'lesson___habit___children___id'
  | 'lesson___habit___children___children'
  | 'lesson___habit___internal___content'
  | 'lesson___habit___internal___contentDigest'
  | 'lesson___habit___internal___description'
  | 'lesson___habit___internal___fieldOwners'
  | 'lesson___habit___internal___ignoreType'
  | 'lesson___habit___internal___mediaType'
  | 'lesson___habit___internal___owner'
  | 'lesson___habit___internal___type'
  | 'lesson___week'
  | 'lesson___week___contentful_id'
  | 'lesson___week___id'
  | 'lesson___week___node_locale'
  | 'lesson___week___order'
  | 'lesson___week___weekName'
  | 'lesson___week___slug'
  | 'lesson___week___intro'
  | 'lesson___week___weekDescription___raw'
  | 'lesson___week___taskCount'
  | 'lesson___week___locked'
  | 'lesson___week___duration'
  | 'lesson___week___coverPhoto___contentful_id'
  | 'lesson___week___coverPhoto___id'
  | 'lesson___week___coverPhoto___spaceId'
  | 'lesson___week___coverPhoto___createdAt'
  | 'lesson___week___coverPhoto___updatedAt'
  | 'lesson___week___coverPhoto___title'
  | 'lesson___week___coverPhoto___description'
  | 'lesson___week___coverPhoto___node_locale'
  | 'lesson___week___coverPhoto___gatsbyImageData'
  | 'lesson___week___coverPhoto___children'
  | 'lesson___week___lessons'
  | 'lesson___week___lessons___contentful_id'
  | 'lesson___week___lessons___id'
  | 'lesson___week___lessons___node_locale'
  | 'lesson___week___lessons___lessonName'
  | 'lesson___week___lessons___slug'
  | 'lesson___week___lessons___keywords'
  | 'lesson___week___lessons___author'
  | 'lesson___week___lessons___stage'
  | 'lesson___week___lessons___authorCard'
  | 'lesson___week___lessons___habit'
  | 'lesson___week___lessons___week'
  | 'lesson___week___lessons___spaceId'
  | 'lesson___week___lessons___createdAt'
  | 'lesson___week___lessons___updatedAt'
  | 'lesson___week___lessons___customComplete'
  | 'lesson___week___lessons___metalesson'
  | 'lesson___week___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___week___lessons___children'
  | 'lesson___week___spaceId'
  | 'lesson___week___createdAt'
  | 'lesson___week___updatedAt'
  | 'lesson___week___sys___type'
  | 'lesson___week___sys___revision'
  | 'lesson___week___fields___excerpt'
  | 'lesson___week___fields___readingTime'
  | 'lesson___week___fields___language'
  | 'lesson___week___fields___order'
  | 'lesson___week___parent___id'
  | 'lesson___week___parent___children'
  | 'lesson___week___children'
  | 'lesson___week___children___id'
  | 'lesson___week___children___children'
  | 'lesson___week___internal___content'
  | 'lesson___week___internal___contentDigest'
  | 'lesson___week___internal___description'
  | 'lesson___week___internal___fieldOwners'
  | 'lesson___week___internal___ignoreType'
  | 'lesson___week___internal___mediaType'
  | 'lesson___week___internal___owner'
  | 'lesson___week___internal___type'
  | 'lesson___weights___id'
  | 'lesson___weights___parent___id'
  | 'lesson___weights___parent___children'
  | 'lesson___weights___children'
  | 'lesson___weights___children___id'
  | 'lesson___weights___children___children'
  | 'lesson___weights___internal___content'
  | 'lesson___weights___internal___contentDigest'
  | 'lesson___weights___internal___description'
  | 'lesson___weights___internal___fieldOwners'
  | 'lesson___weights___internal___ignoreType'
  | 'lesson___weights___internal___mediaType'
  | 'lesson___weights___internal___owner'
  | 'lesson___weights___internal___type'
  | 'lesson___weights___jetlag'
  | 'lesson___weights___duration'
  | 'lesson___weights___efficiency'
  | 'lesson___weights___consistency'
  | 'lesson___weights___sys___type'
  | 'lesson___weights___fields___excerpt'
  | 'lesson___weights___fields___readingTime'
  | 'lesson___weights___fields___language'
  | 'lesson___weights___fields___order'
  | 'lesson___spaceId'
  | 'lesson___createdAt'
  | 'lesson___updatedAt'
  | 'lesson___sys___type'
  | 'lesson___sys___revision'
  | 'lesson___fields___excerpt'
  | 'lesson___fields___readingTime'
  | 'lesson___fields___language'
  | 'lesson___fields___order'
  | 'lesson___customComplete'
  | 'lesson___metalesson'
  | 'lesson___metalesson___contentful_id'
  | 'lesson___metalesson___id'
  | 'lesson___metalesson___node_locale'
  | 'lesson___metalesson___title'
  | 'lesson___metalesson___slug'
  | 'lesson___metalesson___keywords'
  | 'lesson___metalesson___lessons'
  | 'lesson___metalesson___lessons___contentful_id'
  | 'lesson___metalesson___lessons___id'
  | 'lesson___metalesson___lessons___node_locale'
  | 'lesson___metalesson___lessons___lessonName'
  | 'lesson___metalesson___lessons___slug'
  | 'lesson___metalesson___lessons___keywords'
  | 'lesson___metalesson___lessons___author'
  | 'lesson___metalesson___lessons___stage'
  | 'lesson___metalesson___lessons___authorCard'
  | 'lesson___metalesson___lessons___habit'
  | 'lesson___metalesson___lessons___week'
  | 'lesson___metalesson___lessons___spaceId'
  | 'lesson___metalesson___lessons___createdAt'
  | 'lesson___metalesson___lessons___updatedAt'
  | 'lesson___metalesson___lessons___customComplete'
  | 'lesson___metalesson___lessons___metalesson'
  | 'lesson___metalesson___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___metalesson___lessons___children'
  | 'lesson___metalesson___relatedContent'
  | 'lesson___metalesson___relatedContent___contentful_id'
  | 'lesson___metalesson___relatedContent___id'
  | 'lesson___metalesson___relatedContent___node_locale'
  | 'lesson___metalesson___relatedContent___lessonName'
  | 'lesson___metalesson___relatedContent___slug'
  | 'lesson___metalesson___relatedContent___keywords'
  | 'lesson___metalesson___relatedContent___author'
  | 'lesson___metalesson___relatedContent___stage'
  | 'lesson___metalesson___relatedContent___authorCard'
  | 'lesson___metalesson___relatedContent___habit'
  | 'lesson___metalesson___relatedContent___week'
  | 'lesson___metalesson___relatedContent___spaceId'
  | 'lesson___metalesson___relatedContent___createdAt'
  | 'lesson___metalesson___relatedContent___updatedAt'
  | 'lesson___metalesson___relatedContent___customComplete'
  | 'lesson___metalesson___relatedContent___metalesson'
  | 'lesson___metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___metalesson___relatedContent___children'
  | 'lesson___metalesson___spaceId'
  | 'lesson___metalesson___createdAt'
  | 'lesson___metalesson___updatedAt'
  | 'lesson___metalesson___sys___type'
  | 'lesson___metalesson___sys___revision'
  | 'lesson___metalesson___fields___excerpt'
  | 'lesson___metalesson___fields___readingTime'
  | 'lesson___metalesson___fields___language'
  | 'lesson___metalesson___fields___order'
  | 'lesson___metalesson___parent___id'
  | 'lesson___metalesson___parent___children'
  | 'lesson___metalesson___children'
  | 'lesson___metalesson___children___id'
  | 'lesson___metalesson___children___children'
  | 'lesson___metalesson___internal___content'
  | 'lesson___metalesson___internal___contentDigest'
  | 'lesson___metalesson___internal___description'
  | 'lesson___metalesson___internal___fieldOwners'
  | 'lesson___metalesson___internal___ignoreType'
  | 'lesson___metalesson___internal___mediaType'
  | 'lesson___metalesson___internal___owner'
  | 'lesson___metalesson___internal___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___sys___type'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___language'
  | 'lesson___childrenContentfulLessonWeightsJsonNode___fields___order'
  | 'lesson___childContentfulLessonWeightsJsonNode___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___id'
  | 'lesson___childContentfulLessonWeightsJsonNode___children___children'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lesson___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lesson___childContentfulLessonWeightsJsonNode___duration'
  | 'lesson___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lesson___childContentfulLessonWeightsJsonNode___consistency'
  | 'lesson___childContentfulLessonWeightsJsonNode___sys___type'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___language'
  | 'lesson___childContentfulLessonWeightsJsonNode___fields___order'
  | 'lesson___parent___id'
  | 'lesson___parent___parent___id'
  | 'lesson___parent___parent___children'
  | 'lesson___parent___children'
  | 'lesson___parent___children___id'
  | 'lesson___parent___children___children'
  | 'lesson___parent___internal___content'
  | 'lesson___parent___internal___contentDigest'
  | 'lesson___parent___internal___description'
  | 'lesson___parent___internal___fieldOwners'
  | 'lesson___parent___internal___ignoreType'
  | 'lesson___parent___internal___mediaType'
  | 'lesson___parent___internal___owner'
  | 'lesson___parent___internal___type'
  | 'lesson___children'
  | 'lesson___children___id'
  | 'lesson___children___parent___id'
  | 'lesson___children___parent___children'
  | 'lesson___children___children'
  | 'lesson___children___children___id'
  | 'lesson___children___children___children'
  | 'lesson___children___internal___content'
  | 'lesson___children___internal___contentDigest'
  | 'lesson___children___internal___description'
  | 'lesson___children___internal___fieldOwners'
  | 'lesson___children___internal___ignoreType'
  | 'lesson___children___internal___mediaType'
  | 'lesson___children___internal___owner'
  | 'lesson___children___internal___type'
  | 'lesson___internal___content'
  | 'lesson___internal___contentDigest'
  | 'lesson___internal___description'
  | 'lesson___internal___fieldOwners'
  | 'lesson___internal___ignoreType'
  | 'lesson___internal___mediaType'
  | 'lesson___internal___owner'
  | 'lesson___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'description___raw'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulSectionFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulSectionFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  fields?: Maybe<ContentfulSectionFieldsFilterInput>;
  description?: Maybe<ContentfulSectionDescriptionFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSectionEdge>;
  nodes: Array<ContentfulSection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSectionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSectionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSectionSysContentType>;
};

export type ContentfulSectionSysContentType = {
  sys?: Maybe<ContentfulSectionSysContentTypeSys>;
};

export type ContentfulSectionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSectionSysContentTypeSysFilterInput>;
};

export type ContentfulSectionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSectionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSectionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSectionSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWeek = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  weekName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  weekDescription?: Maybe<ContentfulWeekWeekDescription>;
  taskCount?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  duration?: Maybe<Scalars['Int']>;
  coverPhoto?: Maybe<ContentfulAsset>;
  lessons?: Maybe<Array<Maybe<ContentfulLesson>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulWeekSys>;
  fields?: Maybe<ContentfulWeekFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulWeekCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWeekUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulWeekConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWeekEdge>;
  nodes: Array<ContentfulWeek>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWeekGroupConnection>;
};


export type ContentfulWeekConnectionDistinctArgs = {
  field: ContentfulWeekFieldsEnum;
};


export type ContentfulWeekConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWeekFieldsEnum;
};

export type ContentfulWeekEdge = {
  next?: Maybe<ContentfulWeek>;
  node: ContentfulWeek;
  previous?: Maybe<ContentfulWeek>;
};

export type ContentfulWeekFields = {
  excerpt?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type ContentfulWeekFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'order'
  | 'weekName'
  | 'slug'
  | 'intro'
  | 'weekDescription___raw'
  | 'taskCount'
  | 'locked'
  | 'duration'
  | 'coverPhoto___contentful_id'
  | 'coverPhoto___id'
  | 'coverPhoto___spaceId'
  | 'coverPhoto___createdAt'
  | 'coverPhoto___updatedAt'
  | 'coverPhoto___file___url'
  | 'coverPhoto___file___details___size'
  | 'coverPhoto___file___fileName'
  | 'coverPhoto___file___contentType'
  | 'coverPhoto___title'
  | 'coverPhoto___description'
  | 'coverPhoto___node_locale'
  | 'coverPhoto___sys___type'
  | 'coverPhoto___sys___revision'
  | 'coverPhoto___fields___excerpt'
  | 'coverPhoto___fields___readingTime'
  | 'coverPhoto___fields___language'
  | 'coverPhoto___fields___order'
  | 'coverPhoto___fixed___base64'
  | 'coverPhoto___fixed___tracedSVG'
  | 'coverPhoto___fixed___aspectRatio'
  | 'coverPhoto___fixed___width'
  | 'coverPhoto___fixed___height'
  | 'coverPhoto___fixed___src'
  | 'coverPhoto___fixed___srcSet'
  | 'coverPhoto___fixed___srcWebp'
  | 'coverPhoto___fixed___srcSetWebp'
  | 'coverPhoto___resolutions___base64'
  | 'coverPhoto___resolutions___tracedSVG'
  | 'coverPhoto___resolutions___aspectRatio'
  | 'coverPhoto___resolutions___width'
  | 'coverPhoto___resolutions___height'
  | 'coverPhoto___resolutions___src'
  | 'coverPhoto___resolutions___srcSet'
  | 'coverPhoto___resolutions___srcWebp'
  | 'coverPhoto___resolutions___srcSetWebp'
  | 'coverPhoto___fluid___base64'
  | 'coverPhoto___fluid___tracedSVG'
  | 'coverPhoto___fluid___aspectRatio'
  | 'coverPhoto___fluid___src'
  | 'coverPhoto___fluid___srcSet'
  | 'coverPhoto___fluid___srcWebp'
  | 'coverPhoto___fluid___srcSetWebp'
  | 'coverPhoto___fluid___sizes'
  | 'coverPhoto___sizes___base64'
  | 'coverPhoto___sizes___tracedSVG'
  | 'coverPhoto___sizes___aspectRatio'
  | 'coverPhoto___sizes___src'
  | 'coverPhoto___sizes___srcSet'
  | 'coverPhoto___sizes___srcWebp'
  | 'coverPhoto___sizes___srcSetWebp'
  | 'coverPhoto___sizes___sizes'
  | 'coverPhoto___gatsbyImageData'
  | 'coverPhoto___resize___base64'
  | 'coverPhoto___resize___tracedSVG'
  | 'coverPhoto___resize___src'
  | 'coverPhoto___resize___width'
  | 'coverPhoto___resize___height'
  | 'coverPhoto___resize___aspectRatio'
  | 'coverPhoto___parent___id'
  | 'coverPhoto___parent___parent___id'
  | 'coverPhoto___parent___parent___children'
  | 'coverPhoto___parent___children'
  | 'coverPhoto___parent___children___id'
  | 'coverPhoto___parent___children___children'
  | 'coverPhoto___parent___internal___content'
  | 'coverPhoto___parent___internal___contentDigest'
  | 'coverPhoto___parent___internal___description'
  | 'coverPhoto___parent___internal___fieldOwners'
  | 'coverPhoto___parent___internal___ignoreType'
  | 'coverPhoto___parent___internal___mediaType'
  | 'coverPhoto___parent___internal___owner'
  | 'coverPhoto___parent___internal___type'
  | 'coverPhoto___children'
  | 'coverPhoto___children___id'
  | 'coverPhoto___children___parent___id'
  | 'coverPhoto___children___parent___children'
  | 'coverPhoto___children___children'
  | 'coverPhoto___children___children___id'
  | 'coverPhoto___children___children___children'
  | 'coverPhoto___children___internal___content'
  | 'coverPhoto___children___internal___contentDigest'
  | 'coverPhoto___children___internal___description'
  | 'coverPhoto___children___internal___fieldOwners'
  | 'coverPhoto___children___internal___ignoreType'
  | 'coverPhoto___children___internal___mediaType'
  | 'coverPhoto___children___internal___owner'
  | 'coverPhoto___children___internal___type'
  | 'coverPhoto___internal___content'
  | 'coverPhoto___internal___contentDigest'
  | 'coverPhoto___internal___description'
  | 'coverPhoto___internal___fieldOwners'
  | 'coverPhoto___internal___ignoreType'
  | 'coverPhoto___internal___mediaType'
  | 'coverPhoto___internal___owner'
  | 'coverPhoto___internal___type'
  | 'lessons'
  | 'lessons___contentful_id'
  | 'lessons___id'
  | 'lessons___node_locale'
  | 'lessons___lessonName'
  | 'lessons___slug'
  | 'lessons___keywords'
  | 'lessons___author'
  | 'lessons___lessonContent___raw'
  | 'lessons___lessonContent___references'
  | 'lessons___lessonContent___references___contentful_id'
  | 'lessons___lessonContent___references___id'
  | 'lessons___lessonContent___references___spaceId'
  | 'lessons___lessonContent___references___createdAt'
  | 'lessons___lessonContent___references___updatedAt'
  | 'lessons___lessonContent___references___title'
  | 'lessons___lessonContent___references___description'
  | 'lessons___lessonContent___references___node_locale'
  | 'lessons___lessonContent___references___gatsbyImageData'
  | 'lessons___lessonContent___references___children'
  | 'lessons___additionalInformation___raw'
  | 'lessons___stage'
  | 'lessons___authorCard'
  | 'lessons___authorCard___contentful_id'
  | 'lessons___authorCard___id'
  | 'lessons___authorCard___node_locale'
  | 'lessons___authorCard___slug'
  | 'lessons___authorCard___name'
  | 'lessons___authorCard___credentials'
  | 'lessons___authorCard___description___raw'
  | 'lessons___authorCard___avatar___contentful_id'
  | 'lessons___authorCard___avatar___id'
  | 'lessons___authorCard___avatar___spaceId'
  | 'lessons___authorCard___avatar___createdAt'
  | 'lessons___authorCard___avatar___updatedAt'
  | 'lessons___authorCard___avatar___title'
  | 'lessons___authorCard___avatar___description'
  | 'lessons___authorCard___avatar___node_locale'
  | 'lessons___authorCard___avatar___gatsbyImageData'
  | 'lessons___authorCard___avatar___children'
  | 'lessons___authorCard___spaceId'
  | 'lessons___authorCard___createdAt'
  | 'lessons___authorCard___updatedAt'
  | 'lessons___authorCard___sys___type'
  | 'lessons___authorCard___sys___revision'
  | 'lessons___authorCard___fields___excerpt'
  | 'lessons___authorCard___fields___readingTime'
  | 'lessons___authorCard___fields___language'
  | 'lessons___authorCard___fields___order'
  | 'lessons___authorCard___lesson'
  | 'lessons___authorCard___lesson___contentful_id'
  | 'lessons___authorCard___lesson___id'
  | 'lessons___authorCard___lesson___node_locale'
  | 'lessons___authorCard___lesson___lessonName'
  | 'lessons___authorCard___lesson___slug'
  | 'lessons___authorCard___lesson___keywords'
  | 'lessons___authorCard___lesson___author'
  | 'lessons___authorCard___lesson___stage'
  | 'lessons___authorCard___lesson___authorCard'
  | 'lessons___authorCard___lesson___habit'
  | 'lessons___authorCard___lesson___week'
  | 'lessons___authorCard___lesson___spaceId'
  | 'lessons___authorCard___lesson___createdAt'
  | 'lessons___authorCard___lesson___updatedAt'
  | 'lessons___authorCard___lesson___customComplete'
  | 'lessons___authorCard___lesson___metalesson'
  | 'lessons___authorCard___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___authorCard___lesson___children'
  | 'lessons___authorCard___parent___id'
  | 'lessons___authorCard___parent___children'
  | 'lessons___authorCard___children'
  | 'lessons___authorCard___children___id'
  | 'lessons___authorCard___children___children'
  | 'lessons___authorCard___internal___content'
  | 'lessons___authorCard___internal___contentDigest'
  | 'lessons___authorCard___internal___description'
  | 'lessons___authorCard___internal___fieldOwners'
  | 'lessons___authorCard___internal___ignoreType'
  | 'lessons___authorCard___internal___mediaType'
  | 'lessons___authorCard___internal___owner'
  | 'lessons___authorCard___internal___type'
  | 'lessons___cover___contentful_id'
  | 'lessons___cover___id'
  | 'lessons___cover___spaceId'
  | 'lessons___cover___createdAt'
  | 'lessons___cover___updatedAt'
  | 'lessons___cover___file___url'
  | 'lessons___cover___file___fileName'
  | 'lessons___cover___file___contentType'
  | 'lessons___cover___title'
  | 'lessons___cover___description'
  | 'lessons___cover___node_locale'
  | 'lessons___cover___sys___type'
  | 'lessons___cover___sys___revision'
  | 'lessons___cover___fields___excerpt'
  | 'lessons___cover___fields___readingTime'
  | 'lessons___cover___fields___language'
  | 'lessons___cover___fields___order'
  | 'lessons___cover___fixed___base64'
  | 'lessons___cover___fixed___tracedSVG'
  | 'lessons___cover___fixed___aspectRatio'
  | 'lessons___cover___fixed___width'
  | 'lessons___cover___fixed___height'
  | 'lessons___cover___fixed___src'
  | 'lessons___cover___fixed___srcSet'
  | 'lessons___cover___fixed___srcWebp'
  | 'lessons___cover___fixed___srcSetWebp'
  | 'lessons___cover___resolutions___base64'
  | 'lessons___cover___resolutions___tracedSVG'
  | 'lessons___cover___resolutions___aspectRatio'
  | 'lessons___cover___resolutions___width'
  | 'lessons___cover___resolutions___height'
  | 'lessons___cover___resolutions___src'
  | 'lessons___cover___resolutions___srcSet'
  | 'lessons___cover___resolutions___srcWebp'
  | 'lessons___cover___resolutions___srcSetWebp'
  | 'lessons___cover___fluid___base64'
  | 'lessons___cover___fluid___tracedSVG'
  | 'lessons___cover___fluid___aspectRatio'
  | 'lessons___cover___fluid___src'
  | 'lessons___cover___fluid___srcSet'
  | 'lessons___cover___fluid___srcWebp'
  | 'lessons___cover___fluid___srcSetWebp'
  | 'lessons___cover___fluid___sizes'
  | 'lessons___cover___sizes___base64'
  | 'lessons___cover___sizes___tracedSVG'
  | 'lessons___cover___sizes___aspectRatio'
  | 'lessons___cover___sizes___src'
  | 'lessons___cover___sizes___srcSet'
  | 'lessons___cover___sizes___srcWebp'
  | 'lessons___cover___sizes___srcSetWebp'
  | 'lessons___cover___sizes___sizes'
  | 'lessons___cover___gatsbyImageData'
  | 'lessons___cover___resize___base64'
  | 'lessons___cover___resize___tracedSVG'
  | 'lessons___cover___resize___src'
  | 'lessons___cover___resize___width'
  | 'lessons___cover___resize___height'
  | 'lessons___cover___resize___aspectRatio'
  | 'lessons___cover___parent___id'
  | 'lessons___cover___parent___children'
  | 'lessons___cover___children'
  | 'lessons___cover___children___id'
  | 'lessons___cover___children___children'
  | 'lessons___cover___internal___content'
  | 'lessons___cover___internal___contentDigest'
  | 'lessons___cover___internal___description'
  | 'lessons___cover___internal___fieldOwners'
  | 'lessons___cover___internal___ignoreType'
  | 'lessons___cover___internal___mediaType'
  | 'lessons___cover___internal___owner'
  | 'lessons___cover___internal___type'
  | 'lessons___section___contentful_id'
  | 'lessons___section___id'
  | 'lessons___section___node_locale'
  | 'lessons___section___order'
  | 'lessons___section___title'
  | 'lessons___section___lesson'
  | 'lessons___section___lesson___contentful_id'
  | 'lessons___section___lesson___id'
  | 'lessons___section___lesson___node_locale'
  | 'lessons___section___lesson___lessonName'
  | 'lessons___section___lesson___slug'
  | 'lessons___section___lesson___keywords'
  | 'lessons___section___lesson___author'
  | 'lessons___section___lesson___stage'
  | 'lessons___section___lesson___authorCard'
  | 'lessons___section___lesson___habit'
  | 'lessons___section___lesson___week'
  | 'lessons___section___lesson___spaceId'
  | 'lessons___section___lesson___createdAt'
  | 'lessons___section___lesson___updatedAt'
  | 'lessons___section___lesson___customComplete'
  | 'lessons___section___lesson___metalesson'
  | 'lessons___section___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___section___lesson___children'
  | 'lessons___section___spaceId'
  | 'lessons___section___createdAt'
  | 'lessons___section___updatedAt'
  | 'lessons___section___sys___type'
  | 'lessons___section___sys___revision'
  | 'lessons___section___fields___excerpt'
  | 'lessons___section___fields___readingTime'
  | 'lessons___section___fields___language'
  | 'lessons___section___fields___order'
  | 'lessons___section___description___raw'
  | 'lessons___section___parent___id'
  | 'lessons___section___parent___children'
  | 'lessons___section___children'
  | 'lessons___section___children___id'
  | 'lessons___section___children___children'
  | 'lessons___section___internal___content'
  | 'lessons___section___internal___contentDigest'
  | 'lessons___section___internal___description'
  | 'lessons___section___internal___fieldOwners'
  | 'lessons___section___internal___ignoreType'
  | 'lessons___section___internal___mediaType'
  | 'lessons___section___internal___owner'
  | 'lessons___section___internal___type'
  | 'lessons___habit'
  | 'lessons___habit___contentful_id'
  | 'lessons___habit___id'
  | 'lessons___habit___node_locale'
  | 'lessons___habit___title'
  | 'lessons___habit___slug'
  | 'lessons___habit___period'
  | 'lessons___habit___description___raw'
  | 'lessons___habit___description___references'
  | 'lessons___habit___lesson'
  | 'lessons___habit___lesson___contentful_id'
  | 'lessons___habit___lesson___id'
  | 'lessons___habit___lesson___node_locale'
  | 'lessons___habit___lesson___lessonName'
  | 'lessons___habit___lesson___slug'
  | 'lessons___habit___lesson___keywords'
  | 'lessons___habit___lesson___author'
  | 'lessons___habit___lesson___stage'
  | 'lessons___habit___lesson___authorCard'
  | 'lessons___habit___lesson___habit'
  | 'lessons___habit___lesson___week'
  | 'lessons___habit___lesson___spaceId'
  | 'lessons___habit___lesson___createdAt'
  | 'lessons___habit___lesson___updatedAt'
  | 'lessons___habit___lesson___customComplete'
  | 'lessons___habit___lesson___metalesson'
  | 'lessons___habit___lesson___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___habit___lesson___children'
  | 'lessons___habit___spaceId'
  | 'lessons___habit___createdAt'
  | 'lessons___habit___updatedAt'
  | 'lessons___habit___sys___type'
  | 'lessons___habit___sys___revision'
  | 'lessons___habit___fields___excerpt'
  | 'lessons___habit___fields___readingTime'
  | 'lessons___habit___fields___language'
  | 'lessons___habit___fields___order'
  | 'lessons___habit___parent___id'
  | 'lessons___habit___parent___children'
  | 'lessons___habit___children'
  | 'lessons___habit___children___id'
  | 'lessons___habit___children___children'
  | 'lessons___habit___internal___content'
  | 'lessons___habit___internal___contentDigest'
  | 'lessons___habit___internal___description'
  | 'lessons___habit___internal___fieldOwners'
  | 'lessons___habit___internal___ignoreType'
  | 'lessons___habit___internal___mediaType'
  | 'lessons___habit___internal___owner'
  | 'lessons___habit___internal___type'
  | 'lessons___week'
  | 'lessons___week___contentful_id'
  | 'lessons___week___id'
  | 'lessons___week___node_locale'
  | 'lessons___week___order'
  | 'lessons___week___weekName'
  | 'lessons___week___slug'
  | 'lessons___week___intro'
  | 'lessons___week___weekDescription___raw'
  | 'lessons___week___taskCount'
  | 'lessons___week___locked'
  | 'lessons___week___duration'
  | 'lessons___week___coverPhoto___contentful_id'
  | 'lessons___week___coverPhoto___id'
  | 'lessons___week___coverPhoto___spaceId'
  | 'lessons___week___coverPhoto___createdAt'
  | 'lessons___week___coverPhoto___updatedAt'
  | 'lessons___week___coverPhoto___title'
  | 'lessons___week___coverPhoto___description'
  | 'lessons___week___coverPhoto___node_locale'
  | 'lessons___week___coverPhoto___gatsbyImageData'
  | 'lessons___week___coverPhoto___children'
  | 'lessons___week___lessons'
  | 'lessons___week___lessons___contentful_id'
  | 'lessons___week___lessons___id'
  | 'lessons___week___lessons___node_locale'
  | 'lessons___week___lessons___lessonName'
  | 'lessons___week___lessons___slug'
  | 'lessons___week___lessons___keywords'
  | 'lessons___week___lessons___author'
  | 'lessons___week___lessons___stage'
  | 'lessons___week___lessons___authorCard'
  | 'lessons___week___lessons___habit'
  | 'lessons___week___lessons___week'
  | 'lessons___week___lessons___spaceId'
  | 'lessons___week___lessons___createdAt'
  | 'lessons___week___lessons___updatedAt'
  | 'lessons___week___lessons___customComplete'
  | 'lessons___week___lessons___metalesson'
  | 'lessons___week___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___week___lessons___children'
  | 'lessons___week___spaceId'
  | 'lessons___week___createdAt'
  | 'lessons___week___updatedAt'
  | 'lessons___week___sys___type'
  | 'lessons___week___sys___revision'
  | 'lessons___week___fields___excerpt'
  | 'lessons___week___fields___readingTime'
  | 'lessons___week___fields___language'
  | 'lessons___week___fields___order'
  | 'lessons___week___parent___id'
  | 'lessons___week___parent___children'
  | 'lessons___week___children'
  | 'lessons___week___children___id'
  | 'lessons___week___children___children'
  | 'lessons___week___internal___content'
  | 'lessons___week___internal___contentDigest'
  | 'lessons___week___internal___description'
  | 'lessons___week___internal___fieldOwners'
  | 'lessons___week___internal___ignoreType'
  | 'lessons___week___internal___mediaType'
  | 'lessons___week___internal___owner'
  | 'lessons___week___internal___type'
  | 'lessons___weights___id'
  | 'lessons___weights___parent___id'
  | 'lessons___weights___parent___children'
  | 'lessons___weights___children'
  | 'lessons___weights___children___id'
  | 'lessons___weights___children___children'
  | 'lessons___weights___internal___content'
  | 'lessons___weights___internal___contentDigest'
  | 'lessons___weights___internal___description'
  | 'lessons___weights___internal___fieldOwners'
  | 'lessons___weights___internal___ignoreType'
  | 'lessons___weights___internal___mediaType'
  | 'lessons___weights___internal___owner'
  | 'lessons___weights___internal___type'
  | 'lessons___weights___jetlag'
  | 'lessons___weights___duration'
  | 'lessons___weights___efficiency'
  | 'lessons___weights___consistency'
  | 'lessons___weights___sys___type'
  | 'lessons___weights___fields___excerpt'
  | 'lessons___weights___fields___readingTime'
  | 'lessons___weights___fields___language'
  | 'lessons___weights___fields___order'
  | 'lessons___spaceId'
  | 'lessons___createdAt'
  | 'lessons___updatedAt'
  | 'lessons___sys___type'
  | 'lessons___sys___revision'
  | 'lessons___fields___excerpt'
  | 'lessons___fields___readingTime'
  | 'lessons___fields___language'
  | 'lessons___fields___order'
  | 'lessons___customComplete'
  | 'lessons___metalesson'
  | 'lessons___metalesson___contentful_id'
  | 'lessons___metalesson___id'
  | 'lessons___metalesson___node_locale'
  | 'lessons___metalesson___title'
  | 'lessons___metalesson___slug'
  | 'lessons___metalesson___keywords'
  | 'lessons___metalesson___lessons'
  | 'lessons___metalesson___lessons___contentful_id'
  | 'lessons___metalesson___lessons___id'
  | 'lessons___metalesson___lessons___node_locale'
  | 'lessons___metalesson___lessons___lessonName'
  | 'lessons___metalesson___lessons___slug'
  | 'lessons___metalesson___lessons___keywords'
  | 'lessons___metalesson___lessons___author'
  | 'lessons___metalesson___lessons___stage'
  | 'lessons___metalesson___lessons___authorCard'
  | 'lessons___metalesson___lessons___habit'
  | 'lessons___metalesson___lessons___week'
  | 'lessons___metalesson___lessons___spaceId'
  | 'lessons___metalesson___lessons___createdAt'
  | 'lessons___metalesson___lessons___updatedAt'
  | 'lessons___metalesson___lessons___customComplete'
  | 'lessons___metalesson___lessons___metalesson'
  | 'lessons___metalesson___lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___metalesson___lessons___children'
  | 'lessons___metalesson___relatedContent'
  | 'lessons___metalesson___relatedContent___contentful_id'
  | 'lessons___metalesson___relatedContent___id'
  | 'lessons___metalesson___relatedContent___node_locale'
  | 'lessons___metalesson___relatedContent___lessonName'
  | 'lessons___metalesson___relatedContent___slug'
  | 'lessons___metalesson___relatedContent___keywords'
  | 'lessons___metalesson___relatedContent___author'
  | 'lessons___metalesson___relatedContent___stage'
  | 'lessons___metalesson___relatedContent___authorCard'
  | 'lessons___metalesson___relatedContent___habit'
  | 'lessons___metalesson___relatedContent___week'
  | 'lessons___metalesson___relatedContent___spaceId'
  | 'lessons___metalesson___relatedContent___createdAt'
  | 'lessons___metalesson___relatedContent___updatedAt'
  | 'lessons___metalesson___relatedContent___customComplete'
  | 'lessons___metalesson___relatedContent___metalesson'
  | 'lessons___metalesson___relatedContent___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___metalesson___relatedContent___children'
  | 'lessons___metalesson___spaceId'
  | 'lessons___metalesson___createdAt'
  | 'lessons___metalesson___updatedAt'
  | 'lessons___metalesson___sys___type'
  | 'lessons___metalesson___sys___revision'
  | 'lessons___metalesson___fields___excerpt'
  | 'lessons___metalesson___fields___readingTime'
  | 'lessons___metalesson___fields___language'
  | 'lessons___metalesson___fields___order'
  | 'lessons___metalesson___parent___id'
  | 'lessons___metalesson___parent___children'
  | 'lessons___metalesson___children'
  | 'lessons___metalesson___children___id'
  | 'lessons___metalesson___children___children'
  | 'lessons___metalesson___internal___content'
  | 'lessons___metalesson___internal___contentDigest'
  | 'lessons___metalesson___internal___description'
  | 'lessons___metalesson___internal___fieldOwners'
  | 'lessons___metalesson___internal___ignoreType'
  | 'lessons___metalesson___internal___mediaType'
  | 'lessons___metalesson___internal___owner'
  | 'lessons___metalesson___internal___type'
  | 'lessons___childrenContentfulLessonWeightsJsonNode'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___id'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___parent___id'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___parent___children'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___children'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___children___id'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___children___children'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___content'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___description'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___owner'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___internal___type'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___jetlag'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___duration'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___efficiency'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___consistency'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___sys___type'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___language'
  | 'lessons___childrenContentfulLessonWeightsJsonNode___fields___order'
  | 'lessons___childContentfulLessonWeightsJsonNode___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___parent___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___id'
  | 'lessons___childContentfulLessonWeightsJsonNode___children___children'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___content'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___contentDigest'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___description'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___fieldOwners'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___ignoreType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___mediaType'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___owner'
  | 'lessons___childContentfulLessonWeightsJsonNode___internal___type'
  | 'lessons___childContentfulLessonWeightsJsonNode___jetlag'
  | 'lessons___childContentfulLessonWeightsJsonNode___duration'
  | 'lessons___childContentfulLessonWeightsJsonNode___efficiency'
  | 'lessons___childContentfulLessonWeightsJsonNode___consistency'
  | 'lessons___childContentfulLessonWeightsJsonNode___sys___type'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___excerpt'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___readingTime'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___language'
  | 'lessons___childContentfulLessonWeightsJsonNode___fields___order'
  | 'lessons___parent___id'
  | 'lessons___parent___parent___id'
  | 'lessons___parent___parent___children'
  | 'lessons___parent___children'
  | 'lessons___parent___children___id'
  | 'lessons___parent___children___children'
  | 'lessons___parent___internal___content'
  | 'lessons___parent___internal___contentDigest'
  | 'lessons___parent___internal___description'
  | 'lessons___parent___internal___fieldOwners'
  | 'lessons___parent___internal___ignoreType'
  | 'lessons___parent___internal___mediaType'
  | 'lessons___parent___internal___owner'
  | 'lessons___parent___internal___type'
  | 'lessons___children'
  | 'lessons___children___id'
  | 'lessons___children___parent___id'
  | 'lessons___children___parent___children'
  | 'lessons___children___children'
  | 'lessons___children___children___id'
  | 'lessons___children___children___children'
  | 'lessons___children___internal___content'
  | 'lessons___children___internal___contentDigest'
  | 'lessons___children___internal___description'
  | 'lessons___children___internal___fieldOwners'
  | 'lessons___children___internal___ignoreType'
  | 'lessons___children___internal___mediaType'
  | 'lessons___children___internal___owner'
  | 'lessons___children___internal___type'
  | 'lessons___internal___content'
  | 'lessons___internal___contentDigest'
  | 'lessons___internal___description'
  | 'lessons___internal___fieldOwners'
  | 'lessons___internal___ignoreType'
  | 'lessons___internal___mediaType'
  | 'lessons___internal___owner'
  | 'lessons___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'fields___excerpt'
  | 'fields___readingTime'
  | 'fields___language'
  | 'fields___order'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulWeekFieldsFilterInput = {
  excerpt?: Maybe<StringQueryOperatorInput>;
  readingTime?: Maybe<IntQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulWeekFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  weekName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  intro?: Maybe<StringQueryOperatorInput>;
  weekDescription?: Maybe<ContentfulWeekWeekDescriptionFilterInput>;
  taskCount?: Maybe<IntQueryOperatorInput>;
  locked?: Maybe<BooleanQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  coverPhoto?: Maybe<ContentfulAssetFilterInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWeekSysFilterInput>;
  fields?: Maybe<ContentfulWeekFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulWeekFilterListInput = {
  elemMatch?: Maybe<ContentfulWeekFilterInput>;
};

export type ContentfulWeekGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWeekEdge>;
  nodes: Array<ContentfulWeek>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWeekSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWeekFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWeekSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulWeekSysContentType>;
};

export type ContentfulWeekSysContentType = {
  sys?: Maybe<ContentfulWeekSysContentTypeSys>;
};

export type ContentfulWeekSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulWeekSysContentTypeSysFilterInput>;
};

export type ContentfulWeekSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulWeekSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWeekSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulWeekSysContentTypeFilterInput>;
};

export type ContentfulWeekWeekDescription = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulWeekWeekDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Locale */
  childrenLocale?: Maybe<Array<Maybe<Locale>>>;
  /** Returns the first child node of type Locale or null if there are no children of given type on this node */
  childLocale?: Maybe<Locale>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___blurHash___base64Image'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___blurHash___base64Image'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenLocale'
  | 'childrenLocale___id'
  | 'childrenLocale___parent___id'
  | 'childrenLocale___parent___parent___id'
  | 'childrenLocale___parent___parent___children'
  | 'childrenLocale___parent___children'
  | 'childrenLocale___parent___children___id'
  | 'childrenLocale___parent___children___children'
  | 'childrenLocale___parent___internal___content'
  | 'childrenLocale___parent___internal___contentDigest'
  | 'childrenLocale___parent___internal___description'
  | 'childrenLocale___parent___internal___fieldOwners'
  | 'childrenLocale___parent___internal___ignoreType'
  | 'childrenLocale___parent___internal___mediaType'
  | 'childrenLocale___parent___internal___owner'
  | 'childrenLocale___parent___internal___type'
  | 'childrenLocale___children'
  | 'childrenLocale___children___id'
  | 'childrenLocale___children___parent___id'
  | 'childrenLocale___children___parent___children'
  | 'childrenLocale___children___children'
  | 'childrenLocale___children___children___id'
  | 'childrenLocale___children___children___children'
  | 'childrenLocale___children___internal___content'
  | 'childrenLocale___children___internal___contentDigest'
  | 'childrenLocale___children___internal___description'
  | 'childrenLocale___children___internal___fieldOwners'
  | 'childrenLocale___children___internal___ignoreType'
  | 'childrenLocale___children___internal___mediaType'
  | 'childrenLocale___children___internal___owner'
  | 'childrenLocale___children___internal___type'
  | 'childrenLocale___internal___content'
  | 'childrenLocale___internal___contentDigest'
  | 'childrenLocale___internal___description'
  | 'childrenLocale___internal___fieldOwners'
  | 'childrenLocale___internal___ignoreType'
  | 'childrenLocale___internal___mediaType'
  | 'childrenLocale___internal___owner'
  | 'childrenLocale___internal___type'
  | 'childrenLocale___language'
  | 'childrenLocale___ns'
  | 'childrenLocale___data'
  | 'childrenLocale___fileAbsolutePath'
  | 'childLocale___id'
  | 'childLocale___parent___id'
  | 'childLocale___parent___parent___id'
  | 'childLocale___parent___parent___children'
  | 'childLocale___parent___children'
  | 'childLocale___parent___children___id'
  | 'childLocale___parent___children___children'
  | 'childLocale___parent___internal___content'
  | 'childLocale___parent___internal___contentDigest'
  | 'childLocale___parent___internal___description'
  | 'childLocale___parent___internal___fieldOwners'
  | 'childLocale___parent___internal___ignoreType'
  | 'childLocale___parent___internal___mediaType'
  | 'childLocale___parent___internal___owner'
  | 'childLocale___parent___internal___type'
  | 'childLocale___children'
  | 'childLocale___children___id'
  | 'childLocale___children___parent___id'
  | 'childLocale___children___parent___children'
  | 'childLocale___children___children'
  | 'childLocale___children___children___id'
  | 'childLocale___children___children___children'
  | 'childLocale___children___internal___content'
  | 'childLocale___children___internal___contentDigest'
  | 'childLocale___children___internal___description'
  | 'childLocale___children___internal___fieldOwners'
  | 'childLocale___children___internal___ignoreType'
  | 'childLocale___children___internal___mediaType'
  | 'childLocale___children___internal___owner'
  | 'childLocale___children___internal___type'
  | 'childLocale___internal___content'
  | 'childLocale___internal___contentDigest'
  | 'childLocale___internal___description'
  | 'childLocale___internal___fieldOwners'
  | 'childLocale___internal___ignoreType'
  | 'childLocale___internal___mediaType'
  | 'childLocale___internal___owner'
  | 'childLocale___internal___type'
  | 'childLocale___language'
  | 'childLocale___ns'
  | 'childLocale___data'
  | 'childLocale___fileAbsolutePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenLocale?: Maybe<LocaleFilterListInput>;
  childLocale?: Maybe<LocaleFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  blurHash?: Maybe<BlurhashSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpBlurHashArgs = {
  componentX?: Scalars['Int'];
  componentY?: Scalars['Int'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  cropFocus?: Maybe<ImageCropFocus>;
  rotate?: Maybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'blurHash___base64Image'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  blurHash?: Maybe<BlurhashSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Locale = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  language?: Maybe<Scalars['String']>;
  ns?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
};

export type LocaleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<LocaleGroupConnection>;
};


export type LocaleConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: LocaleFieldsEnum;
};

export type LocaleEdge = {
  next?: Maybe<Locale>;
  node: Locale;
  previous?: Maybe<Locale>;
};

export type LocaleFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'language'
  | 'ns'
  | 'data'
  | 'fileAbsolutePath';

export type LocaleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  ns?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
};

export type LocaleFilterListInput = {
  elemMatch?: Maybe<LocaleFilterInput>;
};

export type LocaleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocaleEdge>;
  nodes: Array<Locale>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type LocaleSortInput = {
  fields?: Maybe<Array<Maybe<LocaleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PageViews = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageViewsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PageViewsEdge>;
  nodes: Array<PageViews>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PageViewsGroupConnection>;
};


export type PageViewsConnectionDistinctArgs = {
  field: PageViewsFieldsEnum;
};


export type PageViewsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PageViewsFieldsEnum;
};

export type PageViewsEdge = {
  next?: Maybe<PageViews>;
  node: PageViews;
  previous?: Maybe<PageViews>;
};

export type PageViewsFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'path'
  | 'totalCount';

export type PageViewsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  totalCount?: Maybe<IntQueryOperatorInput>;
};

export type PageViewsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PageViewsEdge>;
  nodes: Array<PageViews>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PageViewsSortInput = {
  fields?: Maybe<Array<Maybe<PageViewsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulWeek?: Maybe<ContentfulWeek>;
  allContentfulWeek: ContentfulWeekConnection;
  contentfulLesson?: Maybe<ContentfulLesson>;
  allContentfulLesson: ContentfulLessonConnection;
  contentfulChallenge?: Maybe<ContentfulChallenge>;
  allContentfulChallenge: ContentfulChallengeConnection;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  allContentfulAuthor: ContentfulAuthorConnection;
  contentfulHabit?: Maybe<ContentfulHabit>;
  allContentfulHabit: ContentfulHabitConnection;
  contentfulSection?: Maybe<ContentfulSection>;
  allContentfulSection: ContentfulSectionConnection;
  contentfulQuestion?: Maybe<ContentfulQuestion>;
  allContentfulQuestion: ContentfulQuestionConnection;
  contentfulQuestionnaire?: Maybe<ContentfulQuestionnaire>;
  allContentfulQuestionnaire: ContentfulQuestionnaireConnection;
  contentfulAnswer?: Maybe<ContentfulAnswer>;
  allContentfulAnswer: ContentfulAnswerConnection;
  contentfulAnswerSlider?: Maybe<ContentfulAnswerSlider>;
  allContentfulAnswerSlider: ContentfulAnswerSliderConnection;
  contentfulResult?: Maybe<ContentfulResult>;
  allContentfulResult: ContentfulResultConnection;
  contentfulAnswerTimePicker?: Maybe<ContentfulAnswerTimePicker>;
  allContentfulAnswerTimePicker: ContentfulAnswerTimePickerConnection;
  contentfulMetalesson?: Maybe<ContentfulMetalesson>;
  allContentfulMetalesson: ContentfulMetalessonConnection;
  pageViews?: Maybe<PageViews>;
  allPageViews: PageViewsConnection;
  contentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNode>;
  allContentfulResultScoreRangeJsonNode: ContentfulResultScoreRangeJsonNodeConnection;
  contentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNode>;
  allContentfulQuestionQuestionTextNode: ContentfulQuestionQuestionTextNodeConnection;
  contentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNode>;
  allContentfulLessonWeightsJsonNode: ContentfulLessonWeightsJsonNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  locale?: Maybe<Locale>;
  allLocale: LocaleConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenLocale?: Maybe<LocaleFilterListInput>;
  childLocale?: Maybe<LocaleFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  blurHash?: Maybe<BlurhashSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fields?: Maybe<ContentfulAssetFieldsFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWeekArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  weekName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  intro?: Maybe<StringQueryOperatorInput>;
  weekDescription?: Maybe<ContentfulWeekWeekDescriptionFilterInput>;
  taskCount?: Maybe<IntQueryOperatorInput>;
  locked?: Maybe<BooleanQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  coverPhoto?: Maybe<ContentfulAssetFilterInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWeekSysFilterInput>;
  fields?: Maybe<ContentfulWeekFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulWeekArgs = {
  filter?: Maybe<ContentfulWeekFilterInput>;
  sort?: Maybe<ContentfulWeekSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLessonArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  lessonName?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  lessonContent?: Maybe<ContentfulLessonLessonContentFilterInput>;
  additionalInformation?: Maybe<ContentfulLessonAdditionalInformationFilterInput>;
  stage?: Maybe<IntQueryOperatorInput>;
  authorCard?: Maybe<ContentfulAuthorFilterListInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  section?: Maybe<ContentfulSectionFilterInput>;
  habit?: Maybe<ContentfulHabitFilterListInput>;
  week?: Maybe<ContentfulWeekFilterListInput>;
  weights?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulLessonSysFilterInput>;
  fields?: Maybe<ContentfulLessonFieldsFilterInput>;
  customComplete?: Maybe<StringQueryOperatorInput>;
  metalesson?: Maybe<ContentfulMetalessonFilterListInput>;
  childrenContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNodeFilterListInput>;
  childContentfulLessonWeightsJsonNode?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulLessonArgs = {
  filter?: Maybe<ContentfulLessonFilterInput>;
  sort?: Maybe<ContentfulLessonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulChallengeArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulChallengeArgs = {
  filter?: Maybe<ContentfulChallengeFilterInput>;
  sort?: Maybe<ContentfulChallengeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  credentials?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulAuthorDescriptionFilterInput>;
  avatar?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  fields?: Maybe<ContentfulAuthorFieldsFilterInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAuthorArgs = {
  filter?: Maybe<ContentfulAuthorFilterInput>;
  sort?: Maybe<ContentfulAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHabitArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  period?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulHabitDescriptionFilterInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHabitSysFilterInput>;
  fields?: Maybe<ContentfulHabitFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulHabitArgs = {
  filter?: Maybe<ContentfulHabitFilterInput>;
  sort?: Maybe<ContentfulHabitSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSectionArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  lesson?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSectionSysFilterInput>;
  fields?: Maybe<ContentfulSectionFieldsFilterInput>;
  description?: Maybe<ContentfulSectionDescriptionFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSectionArgs = {
  filter?: Maybe<ContentfulSectionFilterInput>;
  sort?: Maybe<ContentfulSectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuestionArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  answers?: Maybe<ContentfulAnswerFilterListInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  question?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionSysFilterInput>;
  fields?: Maybe<ContentfulQuestionFieldsFilterInput>;
  childrenContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNodeFilterListInput>;
  childContentfulQuestionQuestionTextNode?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulQuestionArgs = {
  filter?: Maybe<ContentfulQuestionFilterInput>;
  sort?: Maybe<ContentfulQuestionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuestionnaireArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulQuestionnaireDescriptionFilterInput>;
  questions?: Maybe<ContentfulQuestionFilterListInput>;
  results?: Maybe<ContentfulResultFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionnaireSysFilterInput>;
  fields?: Maybe<ContentfulQuestionnaireFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulQuestionnaireArgs = {
  filter?: Maybe<ContentfulQuestionnaireFilterInput>;
  sort?: Maybe<ContentfulQuestionnaireSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnswerArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  score?: Maybe<IntQueryOperatorInput>;
  question?: Maybe<ContentfulQuestionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSysFilterInput>;
  fields?: Maybe<ContentfulAnswerFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAnswerArgs = {
  filter?: Maybe<ContentfulAnswerFilterInput>;
  sort?: Maybe<ContentfulAnswerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnswerSliderArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  isSlider?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerSliderSysFilterInput>;
  fields?: Maybe<ContentfulAnswerSliderFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAnswerSliderArgs = {
  filter?: Maybe<ContentfulAnswerSliderFilterInput>;
  sort?: Maybe<ContentfulAnswerSliderSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulResultArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulResultDescriptionFilterInput>;
  details?: Maybe<ContentfulResultDetailsFilterInput>;
  questionnaire?: Maybe<ContentfulQuestionnaireFilterListInput>;
  scoreRange?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulResultSysFilterInput>;
  fields?: Maybe<ContentfulResultFieldsFilterInput>;
  childrenContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNodeFilterListInput>;
  childContentfulResultScoreRangeJsonNode?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulResultArgs = {
  filter?: Maybe<ContentfulResultFilterInput>;
  sort?: Maybe<ContentfulResultSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAnswerTimePickerArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  isTimePicker?: Maybe<BooleanQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAnswerTimePickerSysFilterInput>;
  fields?: Maybe<ContentfulAnswerTimePickerFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAnswerTimePickerArgs = {
  filter?: Maybe<ContentfulAnswerTimePickerFilterInput>;
  sort?: Maybe<ContentfulAnswerTimePickerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMetalessonArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  lessons?: Maybe<ContentfulLessonFilterListInput>;
  relatedContent?: Maybe<ContentfulLessonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMetalessonSysFilterInput>;
  fields?: Maybe<ContentfulMetalessonFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulMetalessonArgs = {
  filter?: Maybe<ContentfulMetalessonFilterInput>;
  sort?: Maybe<ContentfulMetalessonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPageViewsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  totalCount?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllPageViewsArgs = {
  filter?: Maybe<PageViewsFilterInput>;
  sort?: Maybe<PageViewsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulResultScoreRangeJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  lowEnd?: Maybe<IntQueryOperatorInput>;
  highEnd?: Maybe<IntQueryOperatorInput>;
  sys?: Maybe<ContentfulResultScoreRangeJsonNodeSysFilterInput>;
  fields?: Maybe<ContentfulResultScoreRangeJsonNodeFieldsFilterInput>;
};


export type QueryAllContentfulResultScoreRangeJsonNodeArgs = {
  filter?: Maybe<ContentfulResultScoreRangeJsonNodeFilterInput>;
  sort?: Maybe<ContentfulResultScoreRangeJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuestionQuestionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  question?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulQuestionQuestionTextNodeSysFilterInput>;
  fields?: Maybe<ContentfulQuestionQuestionTextNodeFieldsFilterInput>;
};


export type QueryAllContentfulQuestionQuestionTextNodeArgs = {
  filter?: Maybe<ContentfulQuestionQuestionTextNodeFilterInput>;
  sort?: Maybe<ContentfulQuestionQuestionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLessonWeightsJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  jetlag?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  efficiency?: Maybe<IntQueryOperatorInput>;
  consistency?: Maybe<IntQueryOperatorInput>;
  sys?: Maybe<ContentfulLessonWeightsJsonNodeSysFilterInput>;
  fields?: Maybe<ContentfulLessonWeightsJsonNodeFieldsFilterInput>;
};


export type QueryAllContentfulLessonWeightsJsonNodeArgs = {
  filter?: Maybe<ContentfulLessonWeightsJsonNodeFilterInput>;
  sort?: Maybe<ContentfulLessonWeightsJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
  fields?: Maybe<ContentfulContentTypeFieldsFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryLocaleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  language?: Maybe<StringQueryOperatorInput>;
  ns?: Maybe<StringQueryOperatorInput>;
  data?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllLocaleArgs = {
  filter?: Maybe<LocaleFilterInput>;
  sort?: Maybe<LocaleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___company'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___social___twitter'
  | 'siteMetadata___social___linkedIn'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  locale?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  i18n?: Maybe<SitePageContextI18n>;
  slug?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  pathRegex?: Maybe<Scalars['String']>;
  scholar?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  i18n?: Maybe<SitePageContextI18nFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  next?: Maybe<StringQueryOperatorInput>;
  previous?: Maybe<StringQueryOperatorInput>;
  pathRegex?: Maybe<StringQueryOperatorInput>;
  scholar?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextI18n = {
  language?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  generateDefaultLanguagePage?: Maybe<Scalars['Boolean']>;
  routed?: Maybe<Scalars['Boolean']>;
  originalPath?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextI18nFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  generateDefaultLanguagePage?: Maybe<BooleanQueryOperatorInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___locale'
  | 'context___tag'
  | 'context___language'
  | 'context___i18n___language'
  | 'context___i18n___languages'
  | 'context___i18n___defaultLanguage'
  | 'context___i18n___generateDefaultLanguagePage'
  | 'context___i18n___routed'
  | 'context___i18n___originalPath'
  | 'context___i18n___path'
  | 'context___slug'
  | 'context___next'
  | 'context___previous'
  | 'context___pathRegex'
  | 'context___scholar'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___forceFullSync'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___fonts___google'
  | 'pluginCreator___pluginOptions___formats'
  | 'pluginCreator___pluginOptions___useMinify'
  | 'pluginCreator___pluginOptions___usePreload'
  | 'pluginCreator___pluginOptions___usePreconnect'
  | 'pluginCreator___pluginOptions___prefixes'
  | 'pluginCreator___pluginOptions___fields'
  | 'pluginCreator___pluginOptions___fields___name'
  | 'pluginCreator___pluginOptions___fields___store'
  | 'pluginCreator___pluginOptions___filename'
  | 'pluginCreator___pluginOptions___fetchOptions___credentials'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___anonymize'
  | 'pluginCreator___pluginOptions___respectDNT'
  | 'pluginCreator___pluginOptions___defer'
  | 'pluginCreator___pluginOptions___pageTransitionDelay'
  | 'pluginCreator___pluginOptions___email'
  | 'pluginCreator___pluginOptions___key'
  | 'pluginCreator___pluginOptions___viewId'
  | 'pluginCreator___pluginOptions___startDate'
  | 'pluginCreator___pluginOptions___defaultLanguage'
  | 'pluginCreator___pluginOptions___localeJsonSourceName'
  | 'pluginCreator___pluginOptions___redirect'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___i18nextOptions___lowerCaseLng'
  | 'pluginCreator___pluginOptions___i18nextOptions___saveMissing'
  | 'pluginCreator___pluginOptions___i18nextOptions___keySeparator'
  | 'pluginCreator___pluginOptions___i18nextOptions___nsSeparator'
  | 'pluginCreator___pluginOptions___pages'
  | 'pluginCreator___pluginOptions___pages___matchPath'
  | 'pluginCreator___pluginOptions___pages___getLanguageFromPath'
  | 'pluginCreator___pluginOptions___pages___excludeLanguages'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___displayName'
  | 'pluginOptions___fileName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___forceFullSync'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___fonts___google'
  | 'pluginOptions___fonts___google___family'
  | 'pluginOptions___fonts___google___variants'
  | 'pluginOptions___fonts___google___fontDisplay'
  | 'pluginOptions___formats'
  | 'pluginOptions___useMinify'
  | 'pluginOptions___usePreload'
  | 'pluginOptions___usePreconnect'
  | 'pluginOptions___prefixes'
  | 'pluginOptions___fields'
  | 'pluginOptions___fields___name'
  | 'pluginOptions___fields___store'
  | 'pluginOptions___fields___attributes___boost'
  | 'pluginOptions___filename'
  | 'pluginOptions___fetchOptions___credentials'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___head'
  | 'pluginOptions___anonymize'
  | 'pluginOptions___respectDNT'
  | 'pluginOptions___defer'
  | 'pluginOptions___pageTransitionDelay'
  | 'pluginOptions___email'
  | 'pluginOptions___key'
  | 'pluginOptions___viewId'
  | 'pluginOptions___startDate'
  | 'pluginOptions___defaultLanguage'
  | 'pluginOptions___localeJsonSourceName'
  | 'pluginOptions___redirect'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___i18nextOptions___lowerCaseLng'
  | 'pluginOptions___i18nextOptions___saveMissing'
  | 'pluginOptions___i18nextOptions___interpolation___escapeValue'
  | 'pluginOptions___i18nextOptions___keySeparator'
  | 'pluginOptions___i18nextOptions___nsSeparator'
  | 'pluginOptions___pages'
  | 'pluginOptions___pages___matchPath'
  | 'pluginOptions___pages___getLanguageFromPath'
  | 'pluginOptions___pages___excludeLanguages'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  displayName?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  fonts?: Maybe<SitePluginPluginOptionsFonts>;
  formats?: Maybe<Array<Maybe<Scalars['String']>>>;
  useMinify?: Maybe<Scalars['Boolean']>;
  usePreload?: Maybe<Scalars['Boolean']>;
  usePreconnect?: Maybe<Scalars['Boolean']>;
  prefixes?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<SitePluginPluginOptionsFields>>>;
  filename?: Maybe<Scalars['String']>;
  fetchOptions?: Maybe<SitePluginPluginOptionsFetchOptions>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  defer?: Maybe<Scalars['Boolean']>;
  pageTransitionDelay?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  viewId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  defaultLanguage?: Maybe<Scalars['String']>;
  localeJsonSourceName?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  siteUrl?: Maybe<Scalars['String']>;
  i18nextOptions?: Maybe<SitePluginPluginOptionsI18nextOptions>;
  pages?: Maybe<Array<Maybe<SitePluginPluginOptionsPages>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};


export type SitePluginPluginOptionsStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFetchOptions = {
  credentials?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFetchOptionsFilterInput = {
  credentials?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFields = {
  name?: Maybe<Scalars['String']>;
  store?: Maybe<Scalars['Boolean']>;
  attributes?: Maybe<SitePluginPluginOptionsFieldsAttributes>;
};

export type SitePluginPluginOptionsFieldsAttributes = {
  boost?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsFieldsAttributesFilterInput = {
  boost?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsFieldsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<BooleanQueryOperatorInput>;
  attributes?: Maybe<SitePluginPluginOptionsFieldsAttributesFilterInput>;
};

export type SitePluginPluginOptionsFieldsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFieldsFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  formats?: Maybe<StringQueryOperatorInput>;
  useMinify?: Maybe<BooleanQueryOperatorInput>;
  usePreload?: Maybe<BooleanQueryOperatorInput>;
  usePreconnect?: Maybe<BooleanQueryOperatorInput>;
  prefixes?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SitePluginPluginOptionsFieldsFilterListInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  fetchOptions?: Maybe<SitePluginPluginOptionsFetchOptionsFilterInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  defer?: Maybe<BooleanQueryOperatorInput>;
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  viewId?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  localeJsonSourceName?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  i18nextOptions?: Maybe<SitePluginPluginOptionsI18nextOptionsFilterInput>;
  pages?: Maybe<SitePluginPluginOptionsPagesFilterListInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  google?: Maybe<Array<Maybe<SitePluginPluginOptionsFontsGoogle>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  google?: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>;
};

export type SitePluginPluginOptionsFontsGoogle = {
  family?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<Scalars['String']>>>;
  fontDisplay?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFontsGoogleFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
  fontDisplay?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>;
};

export type SitePluginPluginOptionsI18nextOptions = {
  lowerCaseLng?: Maybe<Scalars['Boolean']>;
  saveMissing?: Maybe<Scalars['Boolean']>;
  interpolation?: Maybe<SitePluginPluginOptionsI18nextOptionsInterpolation>;
  keySeparator?: Maybe<Scalars['String']>;
  nsSeparator?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsI18nextOptionsFilterInput = {
  lowerCaseLng?: Maybe<BooleanQueryOperatorInput>;
  saveMissing?: Maybe<BooleanQueryOperatorInput>;
  interpolation?: Maybe<SitePluginPluginOptionsI18nextOptionsInterpolationFilterInput>;
  keySeparator?: Maybe<StringQueryOperatorInput>;
  nsSeparator?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsI18nextOptionsInterpolation = {
  escapeValue?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsI18nextOptionsInterpolationFilterInput = {
  escapeValue?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPages = {
  matchPath?: Maybe<Scalars['String']>;
  getLanguageFromPath?: Maybe<Scalars['Boolean']>;
  excludeLanguages?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsPagesFilterInput = {
  matchPath?: Maybe<StringQueryOperatorInput>;
  getLanguageFromPath?: Maybe<BooleanQueryOperatorInput>;
  excludeLanguages?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPagesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPagesFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<SiteSiteMetadataSocial>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
};

export type SiteSiteMetadataSocial = {
  twitter?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
  linkedIn?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};
