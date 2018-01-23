import api from '../_api';

const getFieldTypes = context =>
  api.fetchFieldTypes
    .then(response => {
      context.commit('FIELD_TYPES_UPDATED', response);
    })
    .catch(error => {
      /* eslint-disable-next-line */
      console.error(error);
    });

export default {
  getFieldTypes
};
