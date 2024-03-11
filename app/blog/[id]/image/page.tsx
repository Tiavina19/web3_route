import BlogList from '@/components/BlogList'
import blogsList from '@/utils/data/blogList';
import { notFound } from 'next/navigation';
import React from 'react'

export default function Image({ params }: { params: { id: number} }) {
  const blog = blogsList.find((val) => params.id == val.id ? val : null);
  
  if (!blog) {
    return notFound();
  }
  
  return (
    <section className="container grid justify-items-center grid-cols-2 gap-4 content-start">
      <div className="w-full pt-40 pl-10">
        <BlogList />
      </div>
      <div className='w-full pt-40'>
        <h4>Blog with id : {blog?.id}</h4>
        <div className='w-40 h-40'>
          <img src={blog?.link} alt="no image" />
        </div>
      </div>
    </section>
  )
}
