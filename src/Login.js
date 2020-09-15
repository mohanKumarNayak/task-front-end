import React from 'react'
import {connect} from 'react-redux'
import {MDBCol,MDBContainer,MDBCardBody,MDBCard,MDBBtn,MDBRow,MDBInput} from 'mdbreact'
import {StartLoginUser} from './store/Action/userAction'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:'',
            phoneNumber:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
      
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            password:this.state.password,
            phoneNumber:this.state.phoneNumber
        }
        const redirect = (address)=>{
          return this.props.histroy.push(address)
      }
      this.props.dispatch(StartLoginUser({formData,redirect}))
  }
    render(){
        return (
            <div>
                
                <MDBContainer>
                     
                     <MDBRow center>
                       <MDBCol md="6" align="center" >
                         <MDBCard>
                           <div className="header pt-3 grey lighten-2">
                             <MDBRow  center className="d-flex justify-content-start">
                               <h2 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                 Login
                               </h2>
                             </MDBRow>
                           </div>
                           <form onSubmit={this.handleSubmit}>
                           <MDBCardBody className="mx-4 mt-4">
                           
                             <MDBInput label="Password" value={this.state.password} onChange={this.handleChange} name="password"
                               
                               type="password"
                             />
                              <MDBInput label="PhoneNumber" group type="text" value={this.state.phoneNumber} onChange={this.handleChange} name='phoneNumber' />
                            
                             <div className="text-center mb-4 mt-5">
                               <MDBBtn
                                 color="cyan"
                                 type="submit"
                                 className="btn-block z-depth-2"
               
                               >
                                 Submit
                               </MDBBtn>
                             </div>
                            
                           </MDBCardBody>
                           
                           </form>
                         </MDBCard>
                       </MDBCol>
                     </MDBRow>
                   </MDBContainer>

            </div>
        )
    }
}

export default connect() (Login)