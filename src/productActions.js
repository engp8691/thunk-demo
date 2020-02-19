function fakeGetProducts() {
  return new Promise(resolve => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          products: [
            {
              id: 0,
              name: "Apple"
            },
            {
              id: 1,
              name: "Bananas"
            },
            {
              id: 2,
              name: "Strawberries"
            }
          ]
        }),
      1000
    );
  });
}

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fakeGetProducts()
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
      })
      .catch(error =>
        dispatch(fetchProductsFailure(error))
      );
  };
}

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS =
  "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE =
  "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
