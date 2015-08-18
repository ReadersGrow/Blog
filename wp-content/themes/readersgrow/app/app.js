import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/app.css!';
console.log(styles);

export class Main extends React.Component {
    render() {
      return (<p style={styles.colorRed}>hello, world</p>);
    }
}

ReactDOM.render(React.createElement(Main), document.querySelector('.rg-app'));
