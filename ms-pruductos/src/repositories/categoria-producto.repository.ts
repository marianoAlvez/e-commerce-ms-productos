import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {CategoriaProducto, CategoriaProductoRelations} from '../models';

export class CategoriaProductoRepository extends DefaultCrudRepository<
  CategoriaProducto,
  typeof CategoriaProducto.prototype.id,
  CategoriaProductoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CategoriaProducto, dataSource);
  }
}
