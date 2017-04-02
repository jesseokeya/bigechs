import React from 'react';

import Header from './header';
import Intro from './intro';
import Body from './body';
import Footer from './footer';

class Layout extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <Intro/>
        <Body/>
        <Footer/>
      </div>
    );
  }
};

export default Layout;
