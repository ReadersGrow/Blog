import React from 'react';
import ReactDOM from 'react-dom';

export class Main extends React.Component {
    render() {
      return (<p>hello, world</p>);
    }
}

ReactDOM.render(React.createElement(Main), document.querySelector('.rg-app'));
