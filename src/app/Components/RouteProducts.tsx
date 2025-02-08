import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: string;
  price: number;
  tags: string[];
  discountPercentage?: number;
  isNew?: boolean;
  tag?: {
    type: string;
    value: string;
  };
}

const RouteProducts = () => {
  const products: Product[] = [
    {
      _id: '1',
      title: 'Slytherine',
      description: 'A stylish cafe chair.',
      productImage: '/images/f1.png',
      price: 2500000,
      tags: ['chair', 'cafe'],
      discountPercentage: 30,
      isNew: false,
      tag: { type: 'discount', value: '-30%' }
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="relative w-full h-[300px]">
              <Image 
                src={product.productImage} 
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-medium mt-2">Price: ${product.price.toLocaleString()}</p>
            {product.tag && (
              <span className="discount-tag bg-[#B88E2F] text-white px-2 py-1 rounded-sm text-sm mt-2 inline-block">
                {product.tag.value}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/product">
          <button className="rounded-sm border border-[#B88E2F] px-8 py-4 text-sm font-medium text-[#B88E2F] hover:border-green-500">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RouteProducts;