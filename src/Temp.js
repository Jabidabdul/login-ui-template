
// import React, {useReducer, useRef} from 'react'
// import moment from 'moment'

// const reducer = (state, action)=>{
//   switch (action.type) {
//     case "add":
//       return {
//         balance: state.balance + action.details,
//           lists: [...state.lists,{
//             list:`${moment().format().toString()} - ${action.details} - Add`,
//             status: 'success'
//           }],
          
//       }
//     case "remove":{
//       if(state.balance < action.details) {
//         alert('Insufficient Balance')
//         return {
//             balance: state.balance,
//             lists: [...state.lists,{
//                 list:`${moment().format().toString()} - ${action.details} - Remove`,
//                 status: 'failed'
//               }],
//         }
//       }
//       return {
//         balance: state.balance - action.details,
//         lists: [...state.lists,{
//             list:`${moment().format().toString()} - ${action.details} - Remove`,
//             status: 'success'
//           }],
//       }
//     } 
//     default:
//       return state;
//   }
// }

// export default function App() {
//     const inputRef = useRef(null);
//     const [items, dispatch] = useReducer(reducer, {lists:[], balance: 0});

//     const handleAmount=(value)=>{
//         if(!inputRef.current.value){
//             inputRef.current.value = null;
//             inputRef.current.focus();
//             return
//         } 
//         if(value==='add'){
//             dispatch({
//                 type: "add",
//                 details: parseInt(inputRef.current.value)
//             });
//         }else{
//             dispatch({
//                 type: "remove",
//                 details: parseInt(inputRef.current.value)
//             });
//         }
//         inputRef.current.value = null;
//         inputRef.current.focus();
//     }

//   return (
//     <div style={{
//       height:'100vh', width:'100%', display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center',
//     }}>
//         <div style={{ display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center',
//         border:'2px solid black', width:'600px'
//         }}>
//             <h1>Expense Tracker-Basic</h1>
//             <div style={{ display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center',
//                 border:'1px solid black', height:'100px', width:'550px'
//             }}>
//                 <p style={{margin:'0'}}>Balanace:{items.balance}</p>
//                 <input placeholder="Enter Amount" ref={inputRef}
//                 type="number"style={{display:"block"}}/>
//                 <div>
//                     <button style={{width:'70px', margin:'5px'}} onClick={()=>handleAmount('add')}>Add</button>
//                     <button style={{width:'70px',margin:'5px'}} onClick={()=>handleAmount('remove')}>Remove</button>
//                 </div>
//             </div>
//             <div style={{ marginTop:'20px', marginBottom:'20px',
//                 border:'1px solid black', minHeight:'200px', width:'550px'
//             }}>
//             <table style={{margin:'5px', width:'100%'}}>
//                 <thead>
//                     <tr>Transactions:</tr>
//                     <tr>
//                         <td>Details</td>
//                         <td>Status</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {items.lists.map((item, index) => {
//                     return (
//                     <tr style={{width:'100%'}} key={index}>
//                         <td>{item.list}</td>
//                         <td state={{textAlign:'right'}}>{item.status}</td>
//                     </tr>
//                     )
//                 })}
//                 </tbody>
//             </table>
//             </div>
//         </div>
//     </div>
//   );
// }
