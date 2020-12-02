import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        is World Wide Web
      </header>
    );
  }
}

class Nav extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li>1.HTML</li>
          <li>2.CSS</li>
          <li>3.JavaScript</li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <content>
        Hey, i am inwoo
      </content>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header></Header>
        <Nav></Nav>
        <Content></Content>
      </div>
    );
  }
}

export default App;
