import React from 'react';
import {render} from 'react-dom';
import Layout from './components/layout'

class App extends React.Component {
    render() {
        return (
          <div>
            <Layout />
          </div>
        );
    }
};

const app = document.getElementById('app');
render(<App />, app);
