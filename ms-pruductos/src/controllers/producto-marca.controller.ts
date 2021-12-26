import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Producto,
  Marca,
} from '../models';
import {ProductoRepository} from '../repositories';

export class ProductoMarcaController {
  constructor(
    @repository(ProductoRepository)
    public productoRepository: ProductoRepository,
  ) { }

  @get('/productos/{id}/marca', {
    responses: {
      '200': {
        description: 'Marca belonging to Producto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Marca)},
          },
        },
      },
    },
  })
  async getMarca(
    @param.path.number('id') id: typeof Producto.prototype.id,
  ): Promise<Marca> {
    return this.productoRepository.tiene_marca(id);
  }
}
