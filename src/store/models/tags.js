import { action } from "easy-peasy";
import nanoid from "nanoid";

const sampleTagLabels = ["Recipes", "Todo", "Ideas", "Important"];
const sampleTags = sampleTagLabels.map(el => ({ id: nanoid(), label: el }));

const tagModel = {
  tags: sampleTags,
  createTag: action((state, payload) => {
    state.tags.unshift({ id: nanoid(), label: payload });
  }),
  editTag: action((state, payload) => {
    const { id, value } = payload;
    state.tags.forEach(tag => {
      if (tag.id === id) tag.label = value;
    });
  }),
  deleteTag: action((state, payload) => {
    state.tags.forEach((tag, index) => {
      if (tag.id === payload) {
        state.tags.splice(index, 1);
      }
    });
  })
};

export default tagModel;
