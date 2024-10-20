import {createStore} from "redux";


const addtask="task/add";
const deletetask="task/delete";



const initialState={
    task:[],
    // isLoading:false,

};
const taskreducer=(state=initialState,action)=>{
    switch (action.type) {
        case addtask:
            return{
                ...state,
                task: [...state.task,action.payload],
            };
        case deletetask:
            const updatedtask=state.task.filter((currtask,index)=>{
                return  index!=action.payload;

            });
                return{
                    ...state,
                    task: updatedtask,
                }
    
        default:
            return state;
    }

};

export const store=createStore(taskreducer)

console.log("inital state",store.getState());
export const addTask=(data)=>{
    return {
          type:addtask,
    payload:data,
    };
};

export const deleteTask=(id)=>{
   return {
     type:deletetask, 
     payload:id 
    };
};

store.dispatch(addTask("color trading"))

console.log("updated state",store.getState());


store.dispatch(deleteTask(1))
console.log("deleted state",store.getState());


