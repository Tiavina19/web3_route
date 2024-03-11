'use client'

import BlogList from '@/components/BlogList'
import blogsList from '@/utils/data/blogList'
import { notFound, useRouter } from 'next/navigation';
import React from 'react'

export default function Blog({ params }: { params: { id: number} }) {
  const router = useRouter()
  const blog = blogsList.find((val) => params.id == val.id ? val : null);
  const link = `/blog/${blog?.id}/image`;
  
  if (!blog) {
    return notFound();
  }

  return (
    <section className="container grid justify-items-center grid-cols-2 gap-4 content-start">
      <div className="w-full pt-40 pl-10">
        <BlogList />
      </div>
      <div className='w-full pt-40'>
        <h4>Blog with id : {blog.id}</h4>
        <button
          className='border border-white rounded-xl p-1 m-1'
          onClick={() => router.push(link)}>
          View image
        </button>
      </div>
    </section>
  )
}
