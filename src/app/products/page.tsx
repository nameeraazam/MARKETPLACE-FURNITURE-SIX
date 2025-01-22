import React from 'react';
import { client } from "../../sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage:number;
  tags: string[];
  productImage: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  isNew: boolean;
}

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] {
    _id,
    title,
    price,
    discountPercentage,
    tags,
    productImage {
      asset {
        _ref
      }
    },
    description,
    isNew
  }`;
  return client.fetch(query);
}

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1 className='text-6xl font-extrabold mx-auto flex justify-center text-[#413c3e]'>Our Products</h1>
      <div className='grid grid-cols-4 mx-auto py-4 px-2 gap-4'>
        {products.map((product) => (
          <div
            key={product._id}
            style={{ border: '1px solid #ccc', padding: '20px', width: '200px', }}
          >
            <h2 className='text-3xl font-semibold'>{product.title}</h2>
            {product.productImage && product.productImage.asset ? (
              <Image
                src={urlFor(product.productImage).url()}  // Ensure this generates a valid URL
                alt={product.title}
                className='w-full h-48 object-cover rounded-md'
                width={400}
                height={300}
                style={{
                  borderRadius: '8px',
                  marginBottom: '10px',
                }}
              />
            ) : (
              <Image
                src="/path/to/default/image.jpg" // Fallback if no image
                alt={product.title}
                className='w-full h-48 object-cover rounded-md'
                width={400}
                height={300}
                style={{
                  borderRadius: '8px',
                  marginBottom: '10px',
                }}
              />
            )}
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p> {product.isNew ? "isNew":"isOld"} </p>


          
            {product.price && product.price !== product.price && (
              <p className="line-through text-gray-500">Price: ${product.price}</p>
            )}

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;