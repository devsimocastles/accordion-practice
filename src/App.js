import './sass/main.css';
import React from 'react';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Frequently Asked Questions</h1>
        <p>Answers to common questions about our frontend challenges website</p>
      </header>
      <Accordion 
        title="Can I use FrontendPro to prepare for an job interview?"
        accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea commodi sint alias sapiente id obcaecati voluptatum, doloribus molestias natus."
      />
    </div>
  );
}

export default App;
