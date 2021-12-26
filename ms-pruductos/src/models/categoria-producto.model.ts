import {Entity, model, property} from '@loopback/repository';

@model()
export class CategoriaProducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_producto?: number;

  @property({
    type: 'number',
  })
  id_categoria?: number;

  constructor(data?: Partial<CategoriaProducto>) {
    super(data);
  }
}

export interface CategoriaProductoRelations {
  // describe navigational properties here
}

export type CategoriaProductoWithRelations = CategoriaProducto & CategoriaProductoRelations;
