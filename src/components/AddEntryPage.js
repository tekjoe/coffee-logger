import React from "react";
import EntryForm from "./EntryForm.js";
import { connect } from "react-redux";
import { startAddEntry } from "../actions/entries";

const AddEntryPage = props => {
  return (
    <div>
      <h1>Add Entry</h1>
      <EntryForm
        onSubmit={entry => {
          props.startAddEntry(entry);
          props.history.push("/");
        }}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startAddEntry: entry => dispatch(startAddEntry(entry))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddEntryPage);
