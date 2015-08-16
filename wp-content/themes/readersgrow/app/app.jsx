import React from 'react';

export class Main extends React.Component {
    render() {
      return (<p>hello, world</p>);
    }
}

React.render(React.createElement(Main), document.querySelector('.rg-app'));
