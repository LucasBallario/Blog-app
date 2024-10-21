import React from 'react'
import { useState } from 'react';

const posts = [
  {
    title: 'Benefits of meditation',
    image: '/public/images.jpg',
    category: 'self improvement'
  },
  {
    title: 'How to grow muscle',
    image: '/public/faisal.avif',
    category: 'health'
  },
  {
    title: 'Optimal nutrition',
    image: '/public/GettyImages-854725402-1.jpg',
    category: 'health'
  },
  {
    title: 'Discover Italy',
    image: '/public/pexels-ricardo-oliveira-317251078-27219297.jpg',
    category: 'travel'
  },
  {
    title: 'Why football is so puplular',
    image: '/public/pexels-pixabay-46798.jpg',
    category: 'sports'
  },
  {
    title: 'Grecce',
    image: '/public/pexels-nati-87264186-19959456.jpg',
    category: 'travel'

  },
  {
    title: 'Benefits of swimming',
    image: '/public/pexels-ajaybhargavguduru-863988.jpg',
    category: 'sports'

  }
];


const categories = ['All', 'self improvement', 'health', 'travel', 'sports'];

export default function Post() {
  const [selectedCategory, setSelectedCategory] = useState('')

  function HandleClick(category) {
    setSelectedCategory(category === 'All' ? '' : category)
  }

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-center mb-10 space-x-2 space-y-2 sm:space-y-0'>
        <button
          onClick={() => HandleClick('All')}
          className='bg-slate-400 text-white px-3 py-1 rounded btn'
        >
          All
        </button>
        <div className='grid grid-cols-2 gap-2'>
          {categories.slice(1).map((category, index) => (
            <button
              key={index}
              onClick={() => HandleClick(category)}
              className='bg-slate-400 text-white px-3 py-1 rounded btn'
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10'>
        {posts
          .filter(post => selectedCategory === '' || post.category === selectedCategory)
          .map((post, index) => (
            <div key={index} className='flex justify-center text-center m-10 gap-5'>
              <img className='h-20 rounded' src={post.image} alt={post.title} />
              <div className="flex flex-col justify-center">
                <p className="font-bold">{post.title}</p>
                <button className="mt-2 bg-slate-400 text-white px-4 py-2 rounded btn">
                  Read now
                  <i className="fa-brands fa-readme ml-2"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}