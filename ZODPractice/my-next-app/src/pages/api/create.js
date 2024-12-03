// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createTodo } from "@/supabase"

export default async function handler(req, res) {
    console.log(req.body)
    const data = await createTodo(req.body)
    return res.json(data)
}
