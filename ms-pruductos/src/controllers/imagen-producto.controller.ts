import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Imagen,
  Producto,
} from '../models';
import {ImagenRepository} from '../repositories';

export class ImagenProductoController {
  constructor(
    @repository(ImagenRepository)
    public imagenRepository: ImagenRepository,
  ) { }

  @get('/imagens/{id}/producto', {
    responses: {
      '200': {
        description: 'Producto belonging to Imagen',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Producto)},
          },
        },
      },
    },
  })
  async getProducto(
    @param.path.number('id') id: typeof Imagen.prototype.id,
  ): Promise<Producto> {
    return this.imagenRepository.pertenece_a_producto(id);
  }
}
