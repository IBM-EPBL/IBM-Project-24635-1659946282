import React from 'react';
import { Causes, Treatment, Prevention, FAQS, Header } from '../containers';

function HomePage() {
  return (
    <>
      <Header />
      <Causes />
      <Treatment />
      <Prevention />
      <FAQS />
    </>
  );
}

export default HomePage;
