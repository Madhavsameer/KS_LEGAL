"use client"

import { useParams } from "next/navigation"
import { useEffect,useState } from "react"
import { db } from "@/lib/firebase"
import { collection,getDocs } from "firebase/firestore"

export default function BlogDetail(){

const {slug} = useParams()

const [blog,setBlog] = useState<any>(null)
const [suggested,setSuggested] = useState<any[]>([])

useEffect(()=>{

async function fetchBlog(){

const query = await getDocs(collection(db,"blogs"))

const data = query.docs.map(doc=>doc.data())

const current = data.find((b:any)=>b.slug===slug)

setBlog(current)

setSuggested(data.slice(0,3))

}

fetchBlog()

},[slug])

if(!blog) return <p>Loading...</p>

return(

<div className="max-w-4xl mx-auto py-20">

<h1 className="text-4xl font-bold">
{blog.title}
</h1>

<p className="mt-4 text-gray-500">
{blog.keywords}
</p>

<div className="mt-8 leading-relaxed">
{blog.content}
</div>

<h2 className="text-2xl font-bold mt-16">
Suggested Blogs
</h2>

<div className="grid md:grid-cols-3 gap-6 mt-6">

{suggested.map((b,i)=>(

<div key={i} className="border p-4">
{b.title}
</div>

))}

</div>

</div>

)

}