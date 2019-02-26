import React from 'react';




class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ['ivy', 'steve', 'jen','serge'],
            input: '',

        }
    }

    onNameChange=(e)=>{
        console.log(e.target.value)
        this.setState({input:e.target.value}) 
    }

    addNewUser=(e)=>{
        console.log('keystroke',e)
        e.preventDefault();
      if(this.state.users.includes(this.state.input)){
          return alert(`Username Unavailable ${this.state.input}`)   
      }
        //   let newUser = this.state.users.push(this.state.input)

        let copiedUsers = [...this.state.users]

        copiedUsers.push(this.state.input)

        
        this.setState({users: copiedUsers})
     
    }



    render() {
        console.log(this.state)
        return (
            <>
                <div className='row'>
                    <div className='col-6'>
                        <input type='text' placeholder='name' onChange={this.onNameChange}/><button onClick={this.addNewUser}>add</button>

                    </div>
                    <div className='col-6'>
                        <ul class="list-group">
                            {
                                this.state.users.map((name, i) => {
                                    return <li key={i} className="list-group-item">{name} </li>;
                                })
                            }

                        </ul>
                    </div>
                </div>


            </>
        )
    }

}
export default User;