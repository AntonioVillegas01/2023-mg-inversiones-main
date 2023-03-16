export interface DirectionsResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  titulo: string;
  descripcion: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Meta {
}


export class DesarrolloModel {

  constructor(
    public titulo: string,
    public descripcion: string,
    public createdAt: Date,
    public updatedAt: Date,
    public publishedAt: Date,
  ) {
  }
}
