import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./productActions";

const ProductList = props => {
  console.log(props);

  React.useEffect(() => {
    props.dispatch(fetchProducts());
    // fetchProducts()(props.dispatch);
  }, []);

  const { error, loading, products } = props;

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

// const mapDispatchToProps = dispatch => dispatch;

export default connect(mapStateToProps)(ProductList);
