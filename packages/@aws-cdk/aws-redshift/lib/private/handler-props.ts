import { Column } from '../table';

export enum HandlerName {
  User = 'user',
  Table = 'table',
  UserTablePrivileges = 'user-table-privileges',
}

export interface DatabaseQueryHandlerProps {
  readonly handler: string;
  readonly clusterName: string;
  readonly adminUserArn: string;
  readonly databaseName: string;
}

export interface UserHandlerProps {
  readonly username: string;
  readonly passwordSecretArn: string;
}

export interface TableHandlerProps {
  readonly tableName: string;
  readonly tableColumns: Column[];
}

export interface TablePrivilege {
  readonly tableName: string;
  readonly actions: string[];
}

export interface UserTablePrivilegesHandlerProps {
  readonly username: string;
  readonly tablePrivileges: TablePrivilege[];
}
