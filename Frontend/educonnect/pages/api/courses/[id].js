import supabase from "@/utils/supabaseClient"

export default async function handler(req, res) {
    const modules = await supabase.from('modules').select('id, module_name, module_no, topics, links, notes').eq('courses', req.query.id )
    //res.status(200).json({ moduleList, moduleError })
    const courseDetails = await supabase.from('courses').select('id, course_code, course_name').eq('id', req.query.id)
    
    if(modules.error || courseDetails.error) {
        res.status(500).json({ error: modules.error || courseDetails.error })
    }
    else{
        let resp = courseDetails.data[0]
        // resp = {
        //     ...resp,
        //     modules: modules.data
        // }
        resp.modules = modules.data
        res.status(200).json(resp)
    }
    
  }
  