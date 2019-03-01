import database from "../firebase/firebase";

// Actions are plain JS objects that send data from the app to the store. Action Creators are functions that create actions.

// ADD_ENTRY
export const addEntry = entry => ({
  type: "ADD_ENTRY",
  entry
});

export const startAddEntry = (entryData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      temperature = 0,
      createdAt = 0
    } = entryData;
    const entry = { description, note, temperature, createdAt };
    database
      .ref("entries")
      .push(entry)
      .then(ref => {
        dispatch(addEntry({ id: ref.key, ...entry }));
      });
  };
};
