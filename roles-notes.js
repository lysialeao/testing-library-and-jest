[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import { render, screen } from '@testing-library/react';\r\n\r\nconst RoleExample = () => {\r\n  return (\r\n    <div> \r\n      <a href=''>Link</a>\r\n      <button>Button</button>\r\n      <footer>Content Info</footer>\r\n      <h1>Heading</h1>\r\n      <header>Banner</header>\r\n      <img alt=\"Description\" /> Img \r\n      <input type=\"checkbox\" /> Checkbox\r\n      <input type=\"number\" /> SpinButton\r\n      <input type=\"radio\" /> Radio \r\n      <input type=\"text\" /> Textbox\r\n      <li>ListItem</li>\r\n      <ul>ListGroup</ul> \r\n    </div>\r\n  )\r\n}\r\n\r\nrender(<RoleExample />)","type":"code","id":"ifel7"},{"content":"import React, { useState } from 'react';\nimport { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount((c) => c + 1)}>\n    Count: {count}\n  </button>\n};\nrender(<Counter />);","type":"code","id":"az9bh"},{"content":"test('it shows a button', () => {\n  render(<Counter />);\n\n  const button = screen.getByRole('button');\n\n  expect(\n    button\n  ).toBeInTheDocument();\n});\n","type":"code","id":"ngyzj"},{"content":"test('it doesnt show an input', () => {\n  render(<Counter />);\n\n  const input = screen.queryByRole('textbox');\n  \n  expect(\n    input\n  ).not.toBeInTheDocument();\n});\n","type":"code","id":"hgs1s"}]