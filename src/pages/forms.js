import React, { useState } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Header from "../components/header"
import { Button, Box, Container, TextField } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px",
  },
}))
export default function About() {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function handleSubmit(event) {
    //    alert('A name was submitted: ' + this.state.value);
    console.log("Email:", email, "Password: ", password)
    event.preventDefault()
  }

  return (
    <Container maxWidth="sm">
      <Box>
        Stuff
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            label="Standard"
            value={email}
            onInput={e => setEmail(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Filled"
            value={password}
            onInput={e => setPassword(e.target.value)}
          />
          <TextField id="outlined-basic" label="Outlined" />
          <Button color="primary" type="submit">
            Hello World
          </Button>
        </form>
      </Box>
    </Container>
  )
}
