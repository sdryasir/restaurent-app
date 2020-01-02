import React from 'react';
import './App.css';
import Home from './components/Home';
import RestaurentCreate from './components/RestaurentCreate';
import RestaurentList from './components/RestaurentList';
import RestaurentSearch from './components/RestaurentSearch';
import RestaurentUpdate from './components/RestaurentUpdate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='#home'>Restaurent App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#'>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link href='#'>
                <Link to='/RestaurentCreate'>Create Restaurent</Link>
              </Nav.Link>
              <Nav.Link href='#'>
                <Link to='/RestaurentList'>Restaurent List</Link>
              </Nav.Link>
              <Nav.Link href='#'>
                <Link to='/RestaurentSearch'>Search Restaurent</Link>
              </Nav.Link>
              <Nav.Link href='#'>
                <Link to='/RestaurentUpdate'>Update Restaurent</Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/RestaurentList'>
          <RestaurentList />
        </Route>
        <Route path='/RestaurentCreate'>
          <RestaurentCreate />
        </Route>
        <Route path='/RestaurentSearch'>
          <RestaurentSearch />
        </Route>
        <Route
          path='/RestaurentUpdate/:id'
          render={props => <RestaurentUpdate {...props} />}></Route>
      </Router>
    </div>
  );
}

export default App;
