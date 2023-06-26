import supabase from "@/utils/supabaseClient";

export default async function handler(req, res) {
     const { data, error } = await supabase.from('courses').select()
        res.status(200).json({ data, error })
  }
  