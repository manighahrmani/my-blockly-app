import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';

const BlocklyComponent = ({ initialXml, children, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const workspace = Blockly.inject(ref.current, {
      toolbox: children,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), workspace);
    }

    return () => {
      workspace.dispose();
    };
  }, [children, initialXml, rest]);

  return <div ref={ref} id="blocklyDiv" style={{ height: '480px', width: '600px' }} />;
};

export default BlocklyComponent;
