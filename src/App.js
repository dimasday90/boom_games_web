import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import JokeList from './JokeList'
import './App.css'

const categoryOptions = ['Any', 'Programming', 'Miscellaneous', 'Dark']
const typeOptions = [{
  value: 'single',
  label: 'Single'
}, {
  value: 'twopart',
  label: 'Two Part'
}]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'Any',
      type: 'single',
      count: 1,
      showJokeList: false,
      jokeList: [],
      loading: false
    }
    this.inputHandleChange = this.inputHandleChange.bind(this)
    this.submitJoke = this.submitJoke.bind(this)
  }

  inputHandleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount () {
    document.title = 'JokeReactJS'
  }

  submitJoke (event) {
    event.preventDefault()
    this.setState({
      loading: true
    }, () => {
      let jokes = []
      for(let i = 0; i < this.state.count; i++) {
        jokes.push(axios.get(`https://sv443.net/jokeapi/v2/joke/${this.state.category}?type=${this.state.type}`))
      }
      Promise.all(jokes) 
        .then(result => {
          this.setState({
            showJokeList: true,
            jokeList: result,
            loading: false
          })
        })
        .catch(err => {
          this.setState({
            loading: false
          })
        })
    })
  }

  render () {
    return (
      <>
        <header>
          <h1>Welcome to JokeReactJS</h1>
        </header>
        <div id="container">
          <form id="joke-form" onSubmit={this.submitJoke}>
            <TextField
              className="input-field"
              name="category"
              select
              label="Select Category"
              value={this.state.category}
              onChange={this.inputHandleChange}
            >
              {categoryOptions.map(options => (
                <MenuItem key={options} value={options}>{options}</MenuItem>
              ))}
            </TextField>
            <TextField
              className="input-field"
              name="type"
              select
              label="Select Joke Type"
              value={this.state.type}
              onChange={this.inputHandleChange}
            >
              {typeOptions.map(options => (
                <MenuItem key={options.value} value={options.value}>{options.label}</MenuItem>
              ))}
            </TextField>
            <TextField
              error={this.state.count > 10 || this.state.count < 1}
              className="input-field"
              name="count"
              type="number"
              label="Count Number"
              min="1"
              max="10"
              scale="1"
              value={this.state.count}
              onChange={this.inputHandleChange}
              helperText="Input count number between 1 to 10"
            />
            <div className="wrapper">
              <Button 
                type="submit" 
                className="submit-btn" 
                variant="outlined" 
                color="primary"
                disabled={this.state.loading}
              >Find Your Joke
              </Button>
              {this.state.loading && <CircularProgress size={24} className="buttonProgress" />}
            </div>
          </form>
        </div>
        <JokeList show={this.state.showJokeList} category={this.state.category} type={this.state.type} jokes={this.state.jokeList} />
      </>
    )
  }
}