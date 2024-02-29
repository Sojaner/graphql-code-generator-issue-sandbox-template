export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createRegion?: Maybe<Region>;
};


export type MutationCreateRegionArgs = {
  regionDescription: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type Region = {
  __typename?: 'Region';
  regionDescription: Scalars['String']['output'];
  regionId: Scalars['Int']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onRegionCreated: Region;
};

export type OnRegionCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnRegionCreatedSubscription = { __typename?: 'Subscription', onRegionCreated: { __typename: 'Region', regionId: number, regionDescription: string } };
