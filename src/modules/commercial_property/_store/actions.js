import api from '../_api';

const getFields = context => {
  api.fetchFields
    .then(response => {
      context.commit('FIELDS_UPDATED', response);
    })
    .catch(error => {
      // eslint-disable-next-line
      console.error(error);
    });
};

export default {
  getFields
};
