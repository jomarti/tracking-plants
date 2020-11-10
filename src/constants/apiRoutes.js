const PLANTS_API_BASE_ROUTE = 'https://trefle.io/api/v1/';
const PLANTS_TOKEN = `?token=${process.env.VUE_APP_PLANTS_API_TOKEN}`;

export const API_ROUTES = {
  ALL_PLANTS: `${PLANTS_API_BASE_ROUTE}plants/search${PLANTS_TOKEN}`
};
