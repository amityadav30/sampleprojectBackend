import {deleteTodoService,updateTodoService,findallTodosService, checkLogin, addNewUser} from '../Services/service.js'


export const  alltodos= async(req,res)=>{
    const todos=await findallTodosService();

  try {
    res.send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
}



export const signup= async(req, res)=>{
    const todos=await addNewUser(req)
    
try {
    
    res.send(todos);
    console.log(todos)
  } catch (error) {
    res.status(500).send(error);
  }

}

export const login= async(req, res)=>{
  const todos=await checkLogin(req)
  console.log("TOOOOODDOOD"+todos)
  
try {
  if(todos.loginstatus=="Sucessful"){
    res.status(200).send(todos);

  }
  else if(todos.loginstatus=="Failed"){
    res.status(401).send(todos)
  }
  else{
    res.status(404).send(todos)
  }
} catch (error) {
  res.status(500).send(error);
}

}


export const update= async(req, res)=>{
    await updateTodoService(req, res)    
    }



 export const deletetodo= async(req, res)=>{
    deleteTodoService(req,res)
}
        
    

//Remove the red text on change
//if daata not found on ,login throws error
//fields empty