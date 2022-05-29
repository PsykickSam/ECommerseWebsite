export interface ICRUD {
  list: (limit: number, page: number) => Promise<any>;
  create: (resources: any) => Promise<any>;
  putById: (id: string, resources: any) => Promise<any>
  readById: (id: string) => Promise<any>;
  patchById: (id: string, resources: any) => Promise<any>;
  deleteById: (id: string) => Promise<any>;
}
