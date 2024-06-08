import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const App = () => {
  const defaultText = `
# Welcome to my React Markdown Previewer
## This is a sub-heading
### Additional things

Some code, \`<div></div>\`, between 2 brackets

\`\`\`javascript
// This is multiline code
const myExample = (firstLine, lastLine) => {
  if (firstLine === '' || lastLine === '') {
    return 'you are not initialized';
  }
}
\`\`\`

You can also make text **bold**... wow!  
Or you can make it _italic_ like this.  
Or bold and italic **_both!_**

There is also a link to [freeCodeCamp](https://www.freecodecamp.org).

> Block Quotes

![React Logo with Text](https://brandslogos.com/wp-content/uploads/images/react-logo-1.png)

- And last but not least, there's a list:
  - I am a list item
    - With different indentation
      - That looks like this
`;

  const [writtenText, setWrittenText] = useState(defaultText);

  const changeHandler = (event) => {
    setWrittenText(event.target.value);
  };

  return (
    <div className='container'>
      {/* EDITOR */}
      <div className="editor">
        <div className="title">Editor</div>
        <textarea
          id="editor"
          value={writtenText}
          onChange={changeHandler}
        />
      </div>

      {/* PREVIEWER */}
      <div className="previewer">
        <div className="title">Previewer</div>
        <div id='preview'>
        <ReactMarkdown>{writtenText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default App;