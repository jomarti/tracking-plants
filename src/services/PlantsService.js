import { API_ROUTES } from '@/constants';
import axios from '@/http';
import PlantsTransformers from '@/transformers/Plants';

class PlantsService {
  async findPlant(name) {
    const params = {
      q: name,
      complete_data: true,
      page: 1
    };
    try {
      const response = await axios.get(API_ROUTES.ALL_PLANTS, { params });
      return PlantsTransformers.fetchCollection(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new PlantsService();
