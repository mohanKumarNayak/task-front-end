import React from 'react'
import {MDBRow,MDBContainer,MDBCard,MDBInput,MDBCol,MDBCardBody,MDBBtn} from 'mdbreact'
import {StartUserRegister} from './store/Action/userAction'
import {connect} from 'react-redux'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            PhoneNumber:''
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
            username:this.state.username,
            password:this.state.password,
            PhoneNumber:this.state.PhoneNumber
        }

        const redirect =(address)=>{
          return this.props.history.push(address)
      }
      this.props.dispatch(StartUserRegister({formData,redirect}))
     
  }
    render(){
        return(
            <div>

                 <MDBContainer>
                     
      <MDBRow center>
        <MDBCol md="6" align="center" >
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow  center className="d-flex justify-content-start">
                <h2 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Register
                </h2>
              </MDBRow>
            </div>
            <form onSubmit={this.handleSubmit}>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Username" type="text"   value={this.state.username} onChange={this.handleChange} name='username'/>
              <MDBInput label="Password" value={this.state.password} onChange={this.handleChange} name="password"
                
                type="password"
              />
               <MDBInput label="PhoneNumber" group type="text" value={this.state.PhoneNumber} onChange={this.handleChange} name='PhoneNumber' />
             
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="cyan"
                  type="submit"
                  className="btn-block z-depth-2"

                >
                  Submit
                </MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a
                  href="/register"
                  className="dark-grey-text font-weight-bold ml-1"
                >
                  Sign up
                </a>
              </p>
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
export default connect() (Register)