import React from 'react'
import axios from './store/configure/axios'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    axios.get('/users')
    .then((response)=>{
      const user = response.data
      this.setState(()=>{
        return {user}
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render(){
    return (
      <div>
        <h1>Succefully loged {this.state.user.length}</h1>
        
         <table>
           
           <tbody>
         {
                this.state.user.length == 0 ? (<p>loading</p>) : (
                  <div>
                     
                    {this.state.user.map((ele)=>{
                      return <tr key={ele.id}> <td> name - {ele.username} <br></br>
                      phoneNumber -  {ele.PhoneNumber} </td></tr>
                    })}
                  
                  </div>
                )
  }
  </tbody>
  </table>
      </div>
    )
  }
}
export default Home