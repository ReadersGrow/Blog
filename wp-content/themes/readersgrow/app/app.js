import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'app.css!';
export class Main extends React.Component {
    render() {
      return (<header className={styles.home}><h1>hello, world</h1></header>);
    }
}

ReactDOM.render(React.createElement(Main), document.querySelector('.rg-app'));
