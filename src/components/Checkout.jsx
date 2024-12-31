import React from 'react';

const Checkout = () => {
  return (
    <>
      {/* <!-- Start Hero Section --> */}
      <div className='hero'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-5'>
              <div className='intro-excerpt'>
                <h1>Checkout</h1>
              </div>
            </div>
            <div className='col-lg-7'></div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <div className='untree_co-section'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-md-12'>
              <div
                className='border p-4 rounded'
                role='alert'
              >
                Returning customer? <a href='#'>Click here</a> to login
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-5'>
              <h2 className='h3 mb-3'>Billing Details</h2>
              <div className='p-3 p-lg-5 border bg-white'>
                <div className='mb-3'>
                  <label
                    htmlFor='c_country'
                    className='form-label'
                  >
                    Country <span className='text-danger'>*</span>
                  </label>
                  <select
                    id='c_country'
                    className='form-select'
                  >
                    <option value='1'>Select a country</option>
                    <option value='2'>Bangladesh</option>
                    <option value='3'>Algeria</option>
                    <option value='4'>Afghanistan</option>
                    <option value='5'>Ghana</option>
                    <option value='6'>Albania</option>
                    <option value='7'>Bahrain</option>
                    <option value='8'>Colombia</option>
                    <option value='9'>Dominican Republic</option>
                  </select>
                </div>

                <div className='row g-3'>
                  <div className='col-md-6'>
                    <label
                      htmlFor='c_fname'
                      className='form-label'
                    >
                      First Name <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='c_fname'
                      name='c_fname'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label
                      htmlFor='c_lname'
                      className='form-label'
                    >
                      Last Name <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='c_lname'
                      name='c_lname'
                    />
                  </div>
                </div>

                <div className='mb-3'>
                  <label
                    htmlFor='c_companyname'
                    className='form-label'
                  >
                    Company Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='c_companyname'
                    name='c_companyname'
                  />
                </div>

                <div className='mb-3'>
                  <label
                    htmlFor='c_address'
                    className='form-label'
                  >
                    Address <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='c_address'
                    name='c_address'
                    placeholder='Street address'
                  />
                </div>

                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Apartment, suite, unit etc. (optional)'
                  />
                </div>

                <div className='row g-3'>
                  <div className='col-md-6'>
                    <label
                      htmlFor='c_state_country'
                      className='form-label'
                    >
                      State / Country <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='c_state_country'
                      name='c_state_country'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label
                      htmlFor='c_postal_zip'
                      className='form-label'
                    >
                      Postal / Zip <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='c_postal_zip'
                      name='c_postal_zip'
                    />
                  </div>
                </div>

                <div className='row g-3 mt-3'>
                  <div className='col-md-6'>
                    <label
                      htmlFor='c_email_address'
                      className='form-label'
                    >
                      Email Address <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='c_email_address'
                      name='c_email_address'
                    />
                  </div>
                  <div className='col-md-6'>
                    <label
                      htmlFor='c_phone'
                      className='form-label'
                    >
                      Phone <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='c_phone'
                      name='c_phone'
                      placeholder='Phone Number'
                    />
                  </div>
                </div>

                <div className='form-check mt-3'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='c_create_account'
                  />
                  <label
                    htmlFor='c_create_account'
                    className='form-check-label'
                    data-bs-toggle='collapse'
                    href='#create_an_account'
                  >
                    Create an account?
                  </label>
                </div>
                <div
                  className='collapse'
                  id='create_an_account'
                >
                  <div className='mt-3'>
                    <label
                      htmlFor='c_account_password'
                      className='form-label'
                    >
                      Account Password
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='c_account_password'
                      name='c_account_password'
                    />
                  </div>
                </div>

                <div className='form-check mt-3'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='c_ship_different_address'
                  />
                  <label
                    htmlFor='c_ship_different_address'
                    className='form-check-label'
                    data-bs-toggle='collapse'
                    href='#ship_different_address'
                  >
                    Ship To A Different Address?
                  </label>
                </div>
                <div
                  className='collapse'
                  id='ship_different_address'
                >
                  <div className='row g-3 mt-3'>
                    <div className='col-md-6'>
                      <label
                        htmlFor='c_diff_fname'
                        className='form-label'
                      >
                        First Name <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='c_diff_fname'
                        name='c_diff_fname'
                      />
                    </div>
                    <div className='col-md-6'>
                      <label
                        htmlFor='c_diff_lname'
                        className='form-label'
                      >
                        Last Name <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='c_diff_lname'
                        name='c_diff_lname'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-3 mt-3'>
                  <label
                    htmlFor='c_order_notes'
                    className='form-label'
                  >
                    Order Notes
                  </label>
                  <textarea
                    id='c_order_notes'
                    name='c_order_notes'
                    className='form-control'
                    rows='4'
                    placeholder='Write your notes here...'
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='row mb-5'>
                <div className='col-md-12'>
                  <h2 className='h3 mb-3 text-black'>Coupon Code</h2>
                  <div className='p-3 p-lg-5 border bg-white'>
                    <label
                      htmlFor='c_code'
                      className='text-black mb-3'
                    >
                      Enter your coupon code if you have one
                    </label>
                    <div className='input-group w-75 couponcode-wrap'>
                      <input
                        type='text'
                        className='form-control me-2'
                        id='c_code'
                        placeholder='Coupon Code'
                        aria-label='Coupon Code'
                        aria-describedby='button-addon2'
                      />
                      <div className='input-group-append'>
                        <button
                          className='btn btn-black btn-sm'
                          type='button'
                          id='button-addon2'
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-5'>
                <div className='col-12'>
                  <h2 className='h3 mb-3 text-black'>Your Order</h2>
                  <div className='p-3 p-lg-5 border bg-white'>
                    <table className='table mb-5'>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Top Up T-Shirt <strong className='mx-2'>x</strong> 1
                          </td>
                          <td>$250.00</td>
                        </tr>
                        <tr>
                          <td>
                            Polo Shirt <strong className='mx-2'>x</strong> 1
                          </td>
                          <td>$100.00</td>
                        </tr>
                        <tr>
                          <td className='fw-bold text-black'>Cart Subtotal</td>
                          <td className='fw-bold text-black'>$350.00</td>
                        </tr>
                        <tr>
                          <td className='fw-bold text-black'>Order Total</td>
                          <td className='fw-bold text-black'>$350.00</td>
                        </tr>
                      </tbody>
                    </table>

                    {['Direct Bank Transfer', 'Cheque Payment', 'Paypal'].map(
                      (paymentMethod, index) => (
                        <div
                          className='border p-3 mb-3'
                          key={index}
                        >
                          <h3 className='h6 mb-0'>
                            <a
                              className='d-block'
                              data-bs-toggle='collapse'
                              href={`#collapse${paymentMethod
                                .replace(/\s+/g, '')
                                .toLowerCase()}`}
                              role='button'
                              aria-expanded='false'
                              aria-controls={`collapse${paymentMethod
                                .replace(/\s+/g, '')
                                .toLowerCase()}`}
                            >
                              {paymentMethod}
                            </a>
                          </h3>
                          <div
                            className='collapse'
                            id={`collapse${paymentMethod
                              .replace(/\s+/g, '')
                              .toLowerCase()}`}
                          >
                            <div className='py-2'>
                              <p className='mb-0'>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order won’t be shipped until the
                                funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}

                    <div className='text-center'>
                      <button
                        className='btn btn-dark btn-lg py-3 w-100'
                        onClick={() => (window.location = 'thankyou.html')}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- </form> --> */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
