import { action } from "easy-peasy";

import notesModel from "./models/notes";
import tagsModel from "./models/tags";

const storeModel = {
  modals: {
    newTag: false
  },
  notes: notesModel,
  tags: tagsModel,
  search: "",
  setSearch: action((state, payload) => {
    state.search = payload;
  }),
  isMobileMenuOpen: false,
  toggleMobileMenu: action((state, payload) => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  })
};

export default storeModel;
