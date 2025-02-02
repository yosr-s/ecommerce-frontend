import React from 'react'

const Order = () => {
    return (
        <>
         <main className="main order">
  {/* Start of Breadcrumb */}
  <nav className="breadcrumb-nav">
    <div className="container">
      <ul className="breadcrumb shop-breadcrumb bb-no">
        <li className="passed"><a href="cart.html">Shopping Cart</a></li>
        <li className="passed"><a href="checkout.html">Checkout</a></li>
        <li className="active"><a href="order.html">Order Complete</a></li>
      </ul>
    </div>
  </nav>x
  {/* End of Breadcrumb */}
  {/* Start of PageContent */}
  <div className="page-content mb-10 pb-2">
    <div className="container">
      <div className="order-success text-center font-weight-bolder text-dark">
        <i className="fas fa-check" />
        Thank you. Your order has been received.
      </div>
      {/* End of Order Success */}
      <ul className="order-view list-style-none">
        <li>
          <label>Order number</label>
          <strong>945</strong>
        </li>
        <li>
          <label>Status</label>
          <strong>On hold</strong>
        </li>
        <li>
          <label>Date</label>
          <strong>April 27, 2021</strong>
        </li>
        <li>
          <label>Total</label>
          <strong>$1,646.36</strong>
        </li>
        <li>
          <label>Payment method</label>
          <strong>Direct bank transfor</strong>
        </li>
      </ul>
      {/* End of Order View */}
      <div className="order-details-wrapper mb-5">
        <h4 className="title text-uppercase ls-25 mb-5">Order Details</h4>
        <table className="order-table">
          <thead>
            <tr>
              <th className="text-dark">Product</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">Palm Print Jacket</a>&nbsp;<strong>x 1</strong><br />
                Vendor : <a href="#">Vendor 1</a>
              </td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td>
                <a href="#">Brown Backpack</a>&nbsp;<strong>x 1</strong><br />
                Vendor : <a href="#">Vendor 1</a>
              </td>
              <td>$60.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Subtotal:</th>
              <td>$100.00</td>
            </tr>
            <tr>
              <th>Shipping:</th>
              <td>Flat rate</td>
            </tr>
            <tr>
              <th>Payment method:</th>
              <td>Direct bank transfor</td>
            </tr>
            <tr className="total">
              <th className="border-no">Total:</th>
              <td className="border-no">$100.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* End of Order Details */}
      <div className="sub-orders mb-10">
        <h4 className="title mb-5 font-weight-bold ls-25">Sub Orders</h4>
        <div className="alert alert-icon alert-inline mb-5">
          <i className="w-icon-exclamation-triangle" />
          <strong>Note: </strong>This order has products from multiple vendors. So we divided this order into multiple vendor orders.
          Each order will be handled by their respective vendor independently.
        </div>
        <table className="order-subtable">
          <thead>
            <tr>
              <th className="order">Order</th>
              <th className="date">Date</th>
              <th className="status">Status</th>
              <th className="total">Total</th>
              <th className="action" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="order">950</td>
              <td className="date">April 23, 2021</td>
              <td className="status">On hold</td>
              <td className="total">$40.00 for 1 items</td>
              <td className="action"><a href="order-view.html" className="btn btn-rounded">View</a></td>
            </tr>
            <tr>
              <td className="order">951</td>
              <td className="date">April 25, 2021</td>
              <td className="status">On hold</td>
              <td className="total">$60.00 for 1 items</td>
              <td className="action"><a href="order-view.html" className="btn btn-rounded">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* End of Sub Orders*/}
      <div id="account-addresses">
        <div className="row">
          <div className="col-sm-6 mb-8">
            <div className="ecommerce-address billing-address">
              <h4 className="title title-underline ls-25 font-weight-bold">Billing Address</h4>
              <address className="mb-4">
                <table className="address-table">
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                    </tr>
                    <tr>
                      <td>Conia</td>
                    </tr>
                    <tr>
                      <td>Wall Street</td>
                    </tr>
                    <tr>
                      <td>California</td>
                    </tr>
                    <tr>
                      <td>United States (US)</td>
                    </tr>
                    <tr>
                      <td>92020</td>
                    </tr>
                    <tr>
                      <td>1112223334</td>
                    </tr>
                    <tr className="email">
                      <td>nicework125@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </address>
            </div>
          </div>
          <div className="col-sm-6 mb-8">
            <div className="ecommerce-address shipping-address">
              <h4 className="title title-underline ls-25 font-weight-bold">Shipping Address</h4>
              <address className="mb-4">
                <table className="address-table">
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                    </tr>
                    <tr>
                      <td>Conia</td>
                    </tr>
                    <tr>
                      <td>Wall Street</td>
                    </tr>
                    <tr>
                      <td>California</td>
                    </tr>
                    <tr>
                      <td>United States (US)</td>
                    </tr>
                    <tr>
                      <td>92020</td>
                    </tr>
                  </tbody>
                </table>
              </address>
            </div>
          </div>
        </div>
      </div>
      {/* End of Account Address */}
      <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6"><i className="w-icon-long-arrow-left" />Back To List</a>
    </div>
  </div>
  {/* End of PageContent */}
</main>

            
        </>
    )
}

export default Order
