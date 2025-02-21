import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  function handleClick(selected) {
    setSelectedTab(selected);
  }
  let content = <p>Click a button</p>;

  if (selectedTab) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }

  const misBotones = Object.keys(EXAMPLES).map((example) => (
    <TabButton
      onClick={() => handleClick(example)}
      isActive={selectedTab === example}
      key={example}
    >
      {example}
    </TabButton>
  ));

  return (
    <Section id="examples" titulo="Examples">
      <Tabs botones={misBotones}>{content}</Tabs>
    </Section>
  );
}
