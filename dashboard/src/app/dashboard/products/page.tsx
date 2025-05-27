import React from 'react';
import { fetchProducts, Product } from '@/utils/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Link from 'next/link';

const ProductPage = async () => {
  let products: Product[] = [];
  const data = await fetchProducts();
  products = data.products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Card className="shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <CardHeader>
            <CardTitle className="text-lg">{product.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-bold">${product.price}</span>

              <Link href={`/dashboard/products/${product.category}`}>
                {product.category}
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500">({product.rating})</span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductPage;
