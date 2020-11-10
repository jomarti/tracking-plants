import { BaseTransformer } from './Base';

export default class PlantsTransformer extends BaseTransformer {
  static fetch(plant) {
    return {
      name: plant.common_name,
      iamgeUrl: plant.image_url,
      id: plant.id,
      link: plant.links.plant,
      scientificName: plant.scientific_name,
      slug: plant.slug
    };
  }
}
