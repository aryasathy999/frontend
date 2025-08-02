import React, { useState } from 'react';
import './App.css';

function App() {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 50.0;
  const taxRate = 0.06;

  const subtotal = quantity * unitPrice;
  const taxDue = subtotal * taxRate;
  const total = subtotal + taxDue;

  return (
    <div className="invoice">
      <header className="header">
        <div className="company">
          <h1><i>Company Name</i></h1>
          <p>Street Address<br />
          City, State, Zip Code<br />
          Phone: (123) 456-7890<br />
          Fax: (123) 456-7890<br />
          Website: www.myaccountingcourse.com</p>
        </div>
        <div className="invoice-details">
          <p>Date: ____________</p>
          <p>Invoice #: ____________</p>
          <p>Customer ID: ____________</p>
          <p>Due Date: ____________</p>
        </div>
      </header>

      <section className="bill-to">
        <h4>Bill To:</h4>
        <p>Customer Name<br />
        Street Address<br />
        City, State, Zip Code<br />
        Phone</p>
      </section>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </td>
            <td>${subtotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="footer">
        <div className="other-info">
          <h4>Other Information</h4>
          <p>Enter Payment terms here</p>
        </div>

        <div className="totals">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax Rate: 6%</p>
          <p>Tax Due: ${taxDue.toFixed(2)}</p>
          <p><strong>TOTAL: ${total.toFixed(2)}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;
