// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // Extra #1
  const inputRef = React.useRef()

  // Extra #2
  const [error, setError] = React.useState(null)

  // Extra #3
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // const username = event.target.elements.username.value

    // Extra #1
    const username = inputRef.current.value

    onSubmitUsername(username)
  }

  // Extra #2 and #3
  const handleChange = event => {
    // const isValid = event.target.value === event.target.value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')

    // Extra #3
    setUsername(event.target.value.toLowerCase())
  }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit" disabled={error !== null}>
        Submit
      </button>
      {error === null ? null : <div role="alert">{error}</div>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
