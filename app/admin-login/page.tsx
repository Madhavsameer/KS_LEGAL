"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "@/lib/admin"

export default function AdminLogin() {

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const router = useRouter()

function login(e:any){

e.preventDefault()

if(username===ADMIN_USERNAME && password===ADMIN_PASSWORD){

localStorage.setItem("admin","true")

router.push("/admin-dashboard")

}else{

alert("Invalid credentials")

}

}

return(

<div className="h-screen flex items-center justify-center">

<form onSubmit={login} className="flex flex-col gap-4 w-80">

<h1 className="text-2xl font-bold">
Admin Login
</h1>

<input
placeholder="Username"
className="border p-2"
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-2"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="bg-black text-white p-2">
Login
</button>

</form>

</div>

)

}