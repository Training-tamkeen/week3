import React from "react";

function Table() {
  return (
    <div className="div2">
      <h2>Technologies Examples</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Libraries</td>
            <td>Popularity</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React JS</td>
            <td>
              <ol>
                <li>React</li>
                <li>Ant Design</li>
                <li>Redux</li>
                <li>Router</li>
              </ol>
            </td>
            <td>100%</td>
          </tr>
          <tr>
            <td>PHP</td>
            <td>
              <ol>
                <li>PChart</li>
                <li>PHP CAPTCHA</li>
                <li>Dispatch</li>
              </ol>
            </td>
            <td>90%</td>
          </tr>
          <tr>
            <td>Node JS</td>
            <td>
              <ol>
                <li>Request</li>
                <li>Morgan</li>
                <li>Async.js</li>
              </ol>
            </td>
            <td>95%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
