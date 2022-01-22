
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

import React from 'react'
import './App.css'
const reducer=(state, action)=>{

    switch(action.type){
      case '1' : return {
        type : '1',
        email_or_mobile : '1',
        otp_or_password : '1'
      }
      case '2' : return {
        type : '2',
        email_or_mobile : '1',
        otp_or_password : '0'
      }
      case '3' : return {
        type : '3',
        email_or_mobile : '0',
        otp_or_password : '1'
      }
      case '4' : return {
        type : '4',
        email_or_mobile : '0',
        otp_or_password : '0'
      }
      default : return
    }
}
export default function App() {
  
  const [data, dispatch] = React.useReducer(reducer, {type : '', email_or_mobile : '', otp_or_password:''})
  
  const Inputdata = ({type,email_mob, pass_otp}) =>{

    const input_email_mobile = React.useRef();
    const input_otp_password = React.useRef();
    const [isOtpSent, setIsOtpSent] = React.useState(false);

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(type === '1'){
        if(!input_email_mobile.current.value){
          input_email_mobile.current.focus();
          return
        }
        if(!input_otp_password.current.value){
          input_otp_password.current.focus();
          return 
        }
        console.log('Email is:',input_email_mobile.current.value)
        console.log('Passwod is:',input_otp_password.current.value)
      }

      if(type === '2'){
        if(!input_email_mobile.current.value){
          input_email_mobile.current.focus();
          return
        }
        console.log('Email is:',input_email_mobile.current.value)
        setIsOtpSent(true)
      }
      if(type === '3'){
        if(!input_email_mobile.current.value || input_email_mobile.current.value.length !== 10){
          input_email_mobile.current.focus();
          return
        }
        if(!input_otp_password.current.value){
          input_otp_password.current.focus();
          return 
        }
        console.log('Mobile is:',input_email_mobile.current.value)
        console.log('Passwod is:',input_otp_password.current.value)
      }
      if(type === '4'){
        if(!input_email_mobile.current.value || input_email_mobile.current.value.length !== 10){
          input_email_mobile.current.focus();
          return
        }
        console.log('Mobile is:',input_email_mobile.current.value)
        setIsOtpSent(true)
      }
    }

    React.useEffect(()=>{
    },[type])

    return (
    <div style={{marginTop:"20px", width:'100%'}}>
          {type && 
          <form className="d-flex" 
            style={{alignItems:'center', justifyContent:'center', width:'100%',
            flexDirection:'column', alignItems:'center'}}>
                <input className="form-control" type={email_mob === '1' ? 'text' : 'number'}
                style={{width:'100%', margin:'3px'}} 
                placeholder={email_mob === '1' ? 'Email'  : 'Mobile'} 
                ref = {input_email_mobile}/>

                {isOtpSent && (email_mob === '1' ? <p>OTP is sent to your email</p> : <p>OTP is sent to your phone</p>)}
                
                <input className="form-control" type={pass_otp === '1' ? 'password' : 'number'}
                style={{width:'100%', margin:'3px'}} 
                placeholder={pass_otp === '1' ? 'Password' : 'Enter OTP'}
                ref={input_otp_password}/>

                <button className="btn btn-danger"
                style={{width:'100%', margin:'3px'}} 
                onClick={handleSubmit} >Submit</button>
          </form>}
    </div>
      
    )
  }

  const handleInputs=(type)=>{
    if(type === '1'){
      dispatch({
        type : '1',
      })
    }
    if(type === '2'){
      dispatch({
        type : '2',
      })
    }
    if(type === '3'){
      dispatch({
        type : '3',
      })
    }
    if(type === '4'){
      dispatch({
        type : '4',
      })
    }
  }

  return (
    <div className="App" style={{width:'100%',display:'flex',height:'100vh',
    alignItems:'center', flexDirection:'column'}}>
     <div className="card" style={{display:'flex',minHeight:'300px',maxWidth:'550px', marginTop:'100px',
     justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
       <div style={{display:'flex',maxWidth:'', justifyContent:'center', flexWrap:'wrap'}}>
          <button className="btn btn-primary" style={{width:'200px', margin:'5px'}} onClick={()=>handleInputs('1')}>Email and Password</button>
          <button className="btn btn-success" style={{width:'200px', margin:'5px'}}  onClick={()=>handleInputs('2')}>Email and OTP</button>
          <button className="btn btn-warning" style={{width:'200px', margin:'5px'}}  onClick={()=>handleInputs('3')}>Mobile and Password</button>
          <button className="btn btn-info" style={{width:'200px', margin:'5px'}}  onClick={()=>handleInputs('4')}>Mobile and OTP</button>
       </div>
       <div className="d-flex" id='inputs'style={{alignItems:'center', justifyContent:'center', width:'410px',
            flexDirection:'column', alignItems:'center'}}>
            <Inputdata type={data.type} email_mob={data.email_or_mobile} pass_otp={data.otp_or_password}/>
       </div>
     </div>
    </div>
  );
}
