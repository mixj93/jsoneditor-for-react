# reeact-json-editor

React wrapper for [jsoneditor](https://github.com/josdejong/jsoneditor/)
Also you can check the angular version: [angular-jsoneditor](https://github.com/isonet/angular-jsoneditor)

## Installation

```
npm install react-json-editor --save
```

## Usage

```
import React, { Component } from 'react';
import ReactJsonEditor from 'react-json-editor';

class App extends Component {
  ...

  editorChangeHandler = (values) => {
    console.log('new values', values)
    this.setState({values: values})
  }
  
  render() {
    return (
      <div className="App">
        <ReactJsonEditor values={this.state.values} onChange={(values) => {this.editorChangeHandler(values)}}/>
      </div>
    );
  }
}

export default App;
```

## TODO

- support jsoneditor options
- support ace and ajv
- examples and demos
