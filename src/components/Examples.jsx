import { useState } from 'react';

import TabButton from '../components/TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

import { EXAMPLES } from '../data.js';

export default function Examples (){
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton){
    //selectedButton =>'components', 'jsx', 'props' or state
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic)
}

let tabContent = <p>Please click a button.</p>

if( selectedTopic ) {
  tabContent = <div id='tab-content'>
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>
    {EXAMPLES[selectedTopic].code}
    </code>
  </pre>
</div>
}
  
  return(
    <Section id="examples" title={"Examples"}>
      <Tabs 
      
        buttons={      
          <>
            <TabButton isSelected={selectedTopic === 'components'} 
            onClick={() =>handleSelect("components")}>Components</TabButton>

            <TabButton isSelected={selectedTopic === 'jsx'} 
            onClick={() =>handleSelect("jsx")}>JSX</TabButton>

            <TabButton isSelected={selectedTopic === 'props'} 
            onClick={() =>handleSelect("props")}>Props</TabButton>

            <TabButton isSelected={selectedTopic === 'state'} 
            onClick={() =>handleSelect("state")}>State</TabButton>
          </>
    }>
      { tabContent }
      </Tabs>
  </Section>
  )
}