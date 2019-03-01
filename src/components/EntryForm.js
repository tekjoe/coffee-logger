import React, { Component } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class EntryForm extends Component {
  // if entry, display previous data for editing, else leave blank for new submition
  state = {
    description: this.props.entry ? this.props.entry.description : "",
    note: this.props.entry ? this.props.entry.note : "",
    temperature: this.props.entry
      ? this.props.entry.temperature.toString()
      : "",
    createdAt: this.props.entry ? moment(this.props.entry.createdAt) : moment(),
    calendarFocused: false,
    error: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({
      description: description
    });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState({
      note
    });
  };

  onTempChange = e => {
    const temperature = e.target.value;
    if (!temperature || temperature.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        temperature
      });
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({
        createdAt
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.temperature) {
      // Set error state equal to 'Please provide description and temperature'
      this.setState(() => ({
        error: "Please provide description and temperature"
      }));
    } else {
      // clear the error
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        temperature: this.state.temperature,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  render() {
    return (
      <div>
        {this.state.error ? <p>{this.state.error}</p> : null}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Temperature"
            value={this.state.temperature}
            onChange={this.onTempChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your brew (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button onSubmit={this.handleSubmit}>Add Entry</button>
        </form>
      </div>
    );
  }
}
