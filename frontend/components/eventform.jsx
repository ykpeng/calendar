const React = require('react');

const EventForm = React.createClass({
  render(){
    return(
      <form>
        <label>Event Title</label>
        <input type="text"/>
        <textarea/>
      </form>
    );
  }
})

module.exports = EventForm;
