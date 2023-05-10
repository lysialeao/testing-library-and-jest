[{"content":"import { screen, render, within } from '@testing-library/react';\r\n\r\nfunction FormData() {\r\n  return (\r\n    <div>\r\n      <button>Go back</button>\r\n      <form aria-label=\"form\">\r\n        <button>Save</button>\r\n        <button>Cancel</button>\r\n      </form>\r\n    </div>\r\n  )\r\n}\r\n\r\nrender(<FormData />);","type":"code","id":"hudo4"},{"content":"function toContainRole(container, role, quantity) {\r\n\r\n  const success = {\r\n    pass: true\r\n  }\r\n\r\n  const fail = {\r\n    pass: false,\r\n    message: () => `Expect to find ${quantity} ${role} elements. Found ${elements.length} instead.`\r\n  }\r\n\r\n  const elements = within(container).queryAllByRole(role)\r\n\r\n  if( elements.length === quantity ) {\r\n    return success\r\n  }\r\n\r\n  return fail\r\n}\r\n\r\nexpect.extend({ toContainRole })","type":"code","id":"1t5w9"},{"content":"test('the form display two buttons', () => {\r\n  render(<FormData/>);\r\n\r\n  const form = screen.getByRole('form')\r\n  // const buttons = within(form).getAllByRole('button');\r\n\r\n  // expect(buttons).toHaveLength(2);\r\n\r\n  expect(form).toContainRole('button', 2);\r\n})","type":"code","id":"icgkr"}]