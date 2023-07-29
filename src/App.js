import './sass/main.css';
import React from 'react';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <main>      
        <header>
          <h1>Frequently Asked Questions</h1>
          <p>Answers to common questions about our frontend challenges website</p>
        </header>
        <div className='accordion-wrapper'>
          <Accordion
            title="Can I use FrontendPro to prepare for an job interview?"
            accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea commodi sint alias sapiente id obcaecati voluptatum, doloribus molestias natus."
          />
          <Accordion
            title="Do I need to have experience in frontend dev to use FrontendPro?"
            accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea omnis laudantium ipsa iure delectus similique nostrum quaerat architecto velit! Eos, suscipit! Rem sunt magni consequuntur nam ipsum ducimus sit?"
          />
          <Accordion
            title="How often are new challenges added to FrontendPro?"
            accordionContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, officia, eos consequuntur illo magnam ut in quidem, non qui vitae ex optio numquam quo harum!"
          />
          <Accordion
            title="What kind of frontend challenges can I expect to find on FrontendPro?"
            accordionContent=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta reprehenderit eaque cum similique earum, sunt dicta omnis dolore sequi ex architecto, eius id incidunt obcaecati facilis, debitis tenetur! Minus ducimus pariatur hic quae deserunt ut cupiditate laboriosam architecto odio!"
          />
          <Accordion
            title="Can I use libraries/frameworks on these projects?"
            accordionContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusamus aliquam. Consequatur dolor quas impedit."
          />
        </div>
      </main>

    </div>
  );
}

export default App;
