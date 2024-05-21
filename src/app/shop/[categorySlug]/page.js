import React from 'react';
import ProductPageClient from './ProductPageClient';

const ProductPage = ({ params }) => {
  const { categorySlug } = params;

  return <ProductPageClient categorySlug={categorySlug} />;
};

export default ProductPage;
