const React = require('react');

const Day = React.createClass({
  handleClick() {
    this.props.openForm();
  },

  render(){
    return (
      <td onClick={this.handleClick}>
        <h2>{this.props.day}</h2>
      </td>
    );
  }
})

module.exports = Day;
