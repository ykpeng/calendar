const React = require('react');
const Month = require('./month');
const EventForm = require('./eventform');

const App = React.createClass({
  getInitialState(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const firstday = new Date(year, month - 1, 1);
    const lastday = new Date(year, month, 0);

    return {
      adding: false,
      today: today,
      curr: today,
      year: year,
      month: month,
      firstday: firstday,
      lastday: lastday
    }
  },

  changeMonth(dir){
    let newDate = new Date();
    let change = 1;
    if (dir === "prev") {
      change = -1;
    }
    newDate = new Date(this.state.curr.setMonth(this.state.curr.getMonth() + change));
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const firstday = new Date(year, month - 1, 1);
    const lastday = new Date(year, month, 0);
    this.setState({
      curr: newDate,
      year: year,
      month: month,
      firstday: firstday,
      lastday: lastday
    })
  },

  openForm() {
    this.setState({ adding: true });
  },

  render(){
    return (
      <div>
        <h1>My Calendar</h1>
        <Month year={this.state.year}
               month={this.state.month}
               firstday={this.state.firstday}
               lastday={this.state.lastday}
               changeMonth={this.changeMonth}
               openForm={this.openForm}/>
        {
          this.state.adding ? <EventForm/> : <div></div>
        }
      </div>
    );
  }
})

module.exports = App;
