const React = require('react');
const Day = require('./day');

const MONTHS = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}
const DAYSWEEK = ["Sun", "Mon", "Tu", "Wed", "Thu", "Fri", "Sat"];

const Month = React.createClass({
  handlePrev(){
    this.props.changeMonth("prev");
  },

  handleNext(){
    this.props.changeMonth("next");
  },

  render(){
    const numWeeks = Math.ceil(this.props.lastday.getDate() / 7);
    const days = [];
    for (var i = 1; i <= this.props.lastday.getDate(); i++) {
      days.push(i);
    }
    const offset = this.props.firstday.getDay();
    for (let i = 0; i < offset; i++) {
      days.unshift("");
    }
    const weeks = [];
    for (let i = 0; i < numWeeks; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (days.length !== 0) {
          week.push(days.shift());
        } else {
          week.push("");
        }
      }
      weeks.push(week);
    }

    return (
      <table>
        <thead>
          <tr>
            <th className="change" onClick={this.handlePrev}>Prev</th>
            <th colSpan="5">{MONTHS[this.props.month]}, {this.props.year}</th>
            <th className="change" onClick={this.handleNext}>Next</th>
          </tr>
          <tr>
          {
            DAYSWEEK.map((dayweek, i)=>{
              return <th key={"dayweek" + i}>{dayweek}</th>
            })
          }
          </tr>
        </thead>
        <tbody>
          {
            weeks.map((week, i) => {
              return (<tr key={"week" + i}>
                {
                  week.map((day, j) => {
                    return <Day className="day" day={day} openForm={this.props.openForm} key={"day" + i+j}/>
                  })
                }
              </tr>)
            })
          }
        </tbody>
      </table>
    );
  }
})

module.exports = Month;
