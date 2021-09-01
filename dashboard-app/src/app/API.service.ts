/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateInvite: OnCreateInviteSubscription;
  onUpdateInvite: OnUpdateInviteSubscription;
  onDeleteInvite: OnDeleteInviteSubscription;
};

export type CreateInviteInput = {
  id?: string | null;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
};

export type ModelInviteConditionInput = {
  uid?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  middleName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  email?: ModelStringInput | null;
  role?: ModelStringInput | null;
  odsCode?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelInviteConditionInput | null> | null;
  or?: Array<ModelInviteConditionInput | null> | null;
  not?: ModelInviteConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Invite = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInviteInput = {
  id: string;
  uid?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  dob?: string | null;
  email?: string | null;
  role?: string | null;
  odsCode?: string | null;
  status?: string | null;
};

export type DeleteInviteInput = {
  id: string;
};

export type ModelInviteFilterInput = {
  id?: ModelIDInput | null;
  uid?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  middleName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  email?: ModelStringInput | null;
  role?: ModelStringInput | null;
  odsCode?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelInviteFilterInput | null> | null;
  or?: Array<ModelInviteFilterInput | null> | null;
  not?: ModelInviteFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelInviteConnection = {
  __typename: "ModelInviteConnection";
  items?: Array<Invite | null> | null;
  nextToken?: string | null;
};

export type CreateInviteMutation = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInviteMutation = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteInviteMutation = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type GetInviteQuery = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type ListInvitesQuery = {
  __typename: "ModelInviteConnection";
  items?: Array<{
    __typename: "Invite";
    id: string;
    uid: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    email: string;
    role: string;
    odsCode: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateInviteSubscription = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateInviteSubscription = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteInviteSubscription = {
  __typename: "Invite";
  id: string;
  uid: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
  odsCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateInvite(
    input: CreateInviteInput,
    condition?: ModelInviteConditionInput
  ): Promise<CreateInviteMutation> {
    const statement = `mutation CreateInvite($input: CreateInviteInput!, $condition: ModelInviteConditionInput) {
        createInvite(input: $input, condition: $condition) {
          __typename
          id
          uid
          firstName
          middleName
          lastName
          dob
          email
          role
          odsCode
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInviteMutation>response.data.createInvite;
  }
  async UpdateInvite(
    input: UpdateInviteInput,
    condition?: ModelInviteConditionInput
  ): Promise<UpdateInviteMutation> {
    const statement = `mutation UpdateInvite($input: UpdateInviteInput!, $condition: ModelInviteConditionInput) {
        updateInvite(input: $input, condition: $condition) {
          __typename
          id
          uid
          firstName
          middleName
          lastName
          dob
          email
          role
          odsCode
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInviteMutation>response.data.updateInvite;
  }
  async DeleteInvite(
    input: DeleteInviteInput,
    condition?: ModelInviteConditionInput
  ): Promise<DeleteInviteMutation> {
    const statement = `mutation DeleteInvite($input: DeleteInviteInput!, $condition: ModelInviteConditionInput) {
        deleteInvite(input: $input, condition: $condition) {
          __typename
          id
          uid
          firstName
          middleName
          lastName
          dob
          email
          role
          odsCode
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInviteMutation>response.data.deleteInvite;
  }
  async GetInvite(id: string): Promise<GetInviteQuery> {
    const statement = `query GetInvite($id: ID!) {
        getInvite(id: $id) {
          __typename
          id
          uid
          firstName
          middleName
          lastName
          dob
          email
          role
          odsCode
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInviteQuery>response.data.getInvite;
  }
  async ListInvites(
    filter?: ModelInviteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInvitesQuery> {
    const statement = `query ListInvites($filter: ModelInviteFilterInput, $limit: Int, $nextToken: String) {
        listInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            uid
            firstName
            middleName
            lastName
            dob
            email
            role
            odsCode
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInvitesQuery>response.data.listInvites;
  }
  OnCreateInviteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateInvite">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInvite {
        onCreateInvite {
          __typename
          id
          uid
          firstName
          middleName
          lastName
          dob
          email
          role
          odsCode
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateInvite">>
  >;

  OnUpdateInviteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateInvite">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInvite {
        onUpdateInvite {
          __typename
          id
          uid
          firstName
          middleName
          lastName
          dob
          email
          role
          odsCode
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateInvite">>
  >;

  OnDeleteInviteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteInvite">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInvite {
        onDeleteInvite {
          __typename
          id
          uid
          firstName
          middleName
          lastName
          dob
          email
          role
          odsCode
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteInvite">>
  >;
}
