import React from 'react'
import './App.css'
import Movie from './components/Movie'
import { Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  // CONSTRUCTOR
  // RENDER
  // COMPONENTDIDMOUNT
  // COMPONENTDIDUPDATE
  // COMPONENTWILLUNMOUNT

  state = {
    movieTitle: 'Batman Forever',
    showMovie: true,
  }

  // every render method invocation is bound to a change in props or state
  componentDidMount = () => {
    console.log('App component is fully mounted')
  }

  render() {
    console.log('App.js has re-rendered!')
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form>
                  <Form.Group>
                    <Form.Label
                      htmlFor="movieSelect"
                      onClick={() => this.setState({ showMovie: !this.state.showMovie })}
                    >
                      Choose a movie
                    </Form.Label>
                    <Form.Control
                      name="movieSelect"
                      as="select"
                      onChange={(e) => this.setState({ movieTitle: e.currentTarget.value })}
                    >
                      <option>Batman Forever</option>
                      <option>Man of Steel</option>
                      <option>Wonder Woman</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
                {this.state.showMovie && <Movie movieTitle={this.state.movieTitle} />}
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
