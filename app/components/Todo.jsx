const React = require('react')
const moment = require('moment')


const Todo = React.createClass ({
  render: function () {
    console.log(this.props.id);
    var {id, text, completed, createdAt, completedAt} = this.props
    var renderDate = () => {
      let message = 'Created '
      let timestamp = createdAt

      if (completed) {
        message = 'Completed '
        timestamp = completedAt
      }
      return  message + moment.unix(timestamp).format(' Do MMMM YYYY @ h:mm a')
    }

    return (
      <div onClick={ () => {
          this.props.onToggle(id)
        }}>
        <input type='checkbox' checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
})

module.exports = Todo
