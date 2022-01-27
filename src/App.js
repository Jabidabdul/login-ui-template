
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
  
  const [data, dispatch] = React.useReducer(reducer, {type : '1', email_or_mobile : '1', otp_or_password:'1'})

  const Inputdata = ({type, email_mob, pass_otp}) =>{

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
    },[])

    return (
    <div style={{marginTop:"30px", width:'100%'}}>
          {type && 
          <form className="d-flex" 
            style={{minHeight :'150px', width:'100%',
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

                <button className="btn" id="login_btn"
                style={{width:'100%', margin:'3px', background:'#7061d1'}} 
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
     <div className="card" style={{display:'flex',minHeight:'220px',maxWidth:'300px', marginTop:'100px',
     justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
       <h3 style={{marginTop:'20px',fontSize:'20px'}}>Login with:</h3>

       <div style={{display:'flex',maxWidth:'', justifyContent:'center', flexWrap:'wrap'}}>

          <div style={{width:'70%'}}>
            <div class="form-check" style={{width:''}}>
              <input class="form-check-input"
              type="radio" name="radio_button"
              id="email_password" value="1"
              onChange={()=>handleInputs('1')} defaultChecked
              />
              <label class="form-check-label" for="email_password">
              Email and Password
              </label>
            </div>
          </div>
          
          <div style={{width:'70%'}}>
            <div class="form-check" style={{width:''}}>
              <input class="form-check-input" 
              type="radio" name="radio_button" 
              id="email_otp" value="2" 
              onChange={()=>handleInputs('2')}
              />
              <label class="form-check-label" for="email_otp">
              Email and OTP{" "}
              </label>
            </div>
          </div>
          
          <div style={{width:'70%'}}>
            <div class="form-check" style={{width:''}}>
              <input class="form-check-input" 
              type="radio" name="radio_button" 
              id="mobile_password" value="3" 
              onChange={()=>handleInputs('3')}
              />
              <label class="form-check-label" for="mobile_password">
              Mobile and Password        
              </label>
            </div>
          </div>
          
          <div style={{width:'70%'}}>
            <div class="form-check" >
              <input class="form-check-input" 
              type="radio" name="radio_button" 
              id="mobile_otp" value="4" 
              onChange={()=>handleInputs('4')}
              />
              <label class="form-check-label" for="mobile_otp">
              Mobile and OTP
              </label>
            </div>
          </div>
          
       </div>
       <div className="d-flex" id='inputs'style={{width:'80%',
            flexDirection:'column', alignItems:'center'}}>
            <Inputdata type={data.type} email_mob={data.email_or_mobile} pass_otp={data.otp_or_password}/>
       </div>
     </div>
    </div>
  );
}
