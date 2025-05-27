import React from 'react';
import { fetchProducts, Product } from '@/utils/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const data = await fetchProducts();
  const prods = data.products.filter(
    (product) => product.category === category
  );
  const products: Product[] = prods;

  if (!products.length) return <div>No products found in {category}.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        Category: {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">
                  ${product.price}
                </span>
                <div>{product.category}</div>
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
                <span className="text-sm text-gray-500">
                  ({product.rating})
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
