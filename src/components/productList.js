import React, { Component } from "react";
import { products } from "./seed";
import Product from "./product";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: products,
    });
  }

  handleProductUpVote = (productID) => {
    const newproducts = this.state.products.map((product) => {
      if (product.id === productID) {
        return Object.assign({}, product, { votes: (product.votes += 1) });
      } else {
        return product;
      }
    });
    this.setState({
      products: newproducts,
    });
  };

  render() {
    const productComponents = this.state.products
      .sort((a, b) => b.votes - a.votes)
      .map(
        ({
          id,
          title,
          description,
          url,
          votes,
          submitterAvatarUrl,
          productImageUrl,
        }) => (
          <Product
            id={id}
            title={title}
            description={description}
            url={url}
            votes={votes}
            submitterAvatarUrl={submitterAvatarUrl}
            productImageUrl={productImageUrl}
            onVote={this.handleProductUpVote}
          />
        )
      );
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

export default ProductList;
