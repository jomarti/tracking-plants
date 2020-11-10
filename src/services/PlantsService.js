import { API_ROUTES } from '@/constants';
import PlantsTransformers from '@/transformers/Plants';
import axios from 'axios';

class PlantsService {
  async findPlant(name) {
    const params = {
      q: name,
      complete_data: true,
      page: 1
    };
    const response = await axios.get(API_ROUTES.ALL_PLANTS, { params });
    return PlantsTransformers.fetchCollection(response.data.data);
  }
}

export default new PlantsService();
