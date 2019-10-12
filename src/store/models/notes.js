import { action } from "easy-peasy";
import nanoid from "nanoid";

const notesModel = {
  notes: [],
  reset: action((state, payload) => {
    state.notes = generateDummyNotes(payload || 15);
  }),
  remove: action((state, payload) => {
    state.notes.forEach(note => {
      if (note.id === payload) note.isDeleted = true;
    });
  }),
  toggleTag: action((state, payload) => {
    console.log("toggleTag", payload);
    const { id, tag } = payload;
    state.notes.forEach(note => {
      if (note.id === id) {
        if (note.tags.find(el => el.id === tag.id)) {
          // remove it
          const index = note.tags.findIndex(el => el.id === tag.id);
          note.tags.splice(index, 1);
        } else {
          // add it
          note.tags.push(tag);
        }
      }
    });
  }),
  setColor: action((state, payload) => {
    const { colorValue, id } = payload;
    state.notes.forEach(note => {
      if (note.id === id) note.color = colorValue;
    });
  }),
  copyNote: action((state, payload) => {
    const original = state.notes.find(note => note.id === payload);
    const copy = { ...original, id: nanoid() };
    state.notes.unshift(copy);
  }),
  createNewNote: action((state, payload) => {
    const newNote = {
      id: nanoid(),
      title: "",
      content: "",
      tags: [],
      color: "#ffffff",
      isDeleted: false
    };
    state.notes.unshift(newNote);
  }),
  editNote: action((state, payload) => {
    const { id, field, value } = payload;
    state.notes.forEach(note => {
      if (note.id === id) note[field] = value;
    });
  }),
  restoreNote: action((state, payload) => {
    state.notes.forEach(note => {
      if (note.id === payload) note.isDeleted = false;
    });
  }),
  deletePermanently: action((state, payload) => {
    for (var i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === payload) {
        state.notes.splice(i, 1);
        i--;
      }
    }
  }),
  emptyTrash: action((state, _payload) => {
    for (var i = 0; i < state.notes.length; i++) {
      if (state.notes[i].isDeleted === true) {
        state.notes.splice(i, 1);
        i--;
      }
    }
  })
};

function generateDummyNotes(num) {
  const lorem =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea accusantium enim tempore molestiae atque ipsam blanditiis quis sequi illo, incidunt alias doloremque consequatur minus labore nam similique odit amet dolore nihil ipsa corrupti distinctio. Vero nobis, sunt, sit eveniet fugiat accusantium labore itaque est ut omnis harum nesciunt adipisci.";

  const notes = [];
  for (let i = 0; i < num; i++) {
    const newNote = {
      id: nanoid(),
      title: lorem.slice(randNumBetween(0, 20), randNumBetween(21, 50)),
      content: lorem.slice(0, randNumBetween(10, lorem.length - 1)),
      tags: [],
      color: "#ffffff",
      isDeleted: i % 5 === 0 ? true : false
    };
    notes.push(newNote);
  }

  return notes;
}

function randNumBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default notesModel;
