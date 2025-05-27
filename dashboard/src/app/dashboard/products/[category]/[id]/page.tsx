import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { fetchProduct, Product } from '@/utils/api';

const ProductDetailPage = async ({
  params,
}: {
  params: { id: number; category: string };
}) => {
  const { id, category } = params;
  const data = await fetchProduct(Number(id));
  const product: Product = data;

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-600 mt-2">Category: {category}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-2 mt-4">
            {product.images?.slice(0, 4).map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className="w-full h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-green-600">
                  ${product.price}
                </span>
                <div>{product.category}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
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
                </div>
                <span className="text-sm text-gray-600">
                  ({product.rating})
                </span>
              </div>
              <p className="text-gray-700">{product.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Brand:</span> {product.brand}
                </div>
                <div>
                  <span className="font-medium">Stock:</span> {product.stock}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
