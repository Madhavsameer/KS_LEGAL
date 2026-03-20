"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Dashboard(){

const router = useRouter()

useEffect(()=>{

const admin = localStorage.getItem("admin")

if(!admin){
router.push("/admin-login")
}

},[])

return(

<div className="p-10">

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>

<div className="flex flex-col gap-4 mt-8">

<Link href="/admin/add-blog">
Add Blog
</Link>

<Link href="/admin/manage-blogs">
Manage Blogs
</Link>

</div>

</div>

)

}