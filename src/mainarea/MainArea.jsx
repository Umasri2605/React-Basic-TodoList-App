import React from "react";
function TodoList(){
    // state
    var[todo,settodo]=React.useState(["Uma","Pravallika","Raji","Mounika","Ramya"]);

    //action
    function add(){
    var newtodo=document.getElementById("ntd").value;
    // settodo([...todo,newtodo])
    settodo((currenttodo)=>{
        return([...currenttodo,newtodo]);
    })
}
    function del(index){
    //  var temp=[...todo];
    //  temp.splice(index,1)
    // settodo([...temp]);

    // settodo((currenttodo)=>{
    //     currenttodo.splice(index,1);
    //     return([...currenttodo])
    // })

    settodo((currenttodo)=>{
      return currenttodo.filter((todo,i)=>{
            if(index!==i){
                return true;
            }
        });
    });
    }  
    
    //ui
    return(
        <div>
            <input type="text" id="ntd"/>
            <button onClick={()=>add()} className="btn btn-success bg-success-subtle text-dark">Add Task</button>
            <ul>
                <br></br>
                {
                  todo.map((todos,i)=>{
                    return<li className="list-unstyled">
                        {todos}
                        <button onClick={()=>{del(i)}} className="btn btn-danger-subtle m-2 bg-danger-subtle">Delete</button>
                    </li>
                  })
                }
                   
                </ul>
            
        </div>
    )
}
export default TodoList;