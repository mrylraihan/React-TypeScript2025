import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)


export async function getAll() {
    try {
        let { data: todos, error } = await supabase.from("todos").select();
        return todos;
    } catch (error) {
        throw new Error("error");
    }
}

export async function createTodo(todo){
    todo.completed = true
    console.log(todo)
    try {
        let { data: todo, error } = await supabase.from("todos").insert(todo);
        return todo;
    } catch (error) {
        throw new Error("error");
    }

}