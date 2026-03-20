"use client"

import { useEffect,useState } from "react"
import { db } from "@/lib/firebase"
import { collection,getDocs } from "firebase/firestore"
import Link from "next/link"

export default function Blog(){

const [blogs,setBlogs] = useState<any[]>([])

useEffect(()=>{

async function fetchBlogs(){

const query = await getDocs(collection(db,"blogs"))

const data = query.docs.map(doc=>({
id:doc.id,
...doc.data()
}))

setBlogs(data)

}

fetchBlogs()

},[])

return(

<div className="max-w-6xl mx-auto py-20">

<h1 className="text-4xl font-bold">
Legal Blog
</h1>

<div className="grid md:grid-cols-3 gap-8 mt-10">

{blogs.map(blog=>(

<Link
key={blog.id}
href={`/blog/${blog.slug}`}
className="border p-6 rounded-lg">

<h2 className="text-xl font-bold">
{blog.title}
</h2>

<p className="mt-3 text-gray-600">
{blog.metaDescription}
</p>

</Link>

))}

</div>

</div>

)

}