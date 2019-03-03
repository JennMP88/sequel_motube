import React from 'react';




class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            input: '',
            currentUser: ''
        }
    }

    //does it exist in local storage?, if yes then set it to state
    componentWillMount() {
        localStorage.getItem('users') && this.setState({
            users: JSON.parse(localStorage.getItem('users')),
            input: ''
        })
    }

   // loads data into state
   //checks if data exist
   //if not then it fetches the data 
    // componentDidMount() {
    //     if (localStorage.getItem('users')) {
    //         this.addNewUser();
    //     }
    //     else {
    //         console.log('using data from local storage')
    //     }
    // } 


    clickingUser = (e, index) => {
        // console.dir(e.target)
        console.log(e.target.innerHTML)
        const currentUser = this.state.users[index]

        this.setState({
            currentUser,
        })
        // if(this.state.user==e.target.innerHTML){
        //    style{{color:"blue"}}
        // }
        //if not selected add to the current
        // this.setState({user:e.target.innerHTML, bgColor:'blue'})  
        
    }

    onNameChange = (e) => {
        console.log(e.target.value)
        this.setState({ input: e.target.value })
    }

    addNewUser = (e) => {
        console.log('keystroke', e)
        e.preventDefault();
        if (this.state.users.includes(this.state.input)) {
            return alert(`Username ${this.state.input} already exist`)
        }
        //   let newUser = this.state.users.push(this.state.input)

        let copiedUsers = [...this.state.users]

        copiedUsers.push(this.state.input)

        this.setState({ users: copiedUsers })

    }
    //before rendering and after the function
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('users',JSON.stringify(nextState.users))
    }


    render() {
        console.log(this.state)
        return (
            <>
                <div className='row'>
                    <div className='col-6'>
                    <div><h3>Create a New User</h3></div>
                        <input type='text' placeholder='name' onChange={this.onNameChange} /><button onClick={this.addNewUser}>add</button>

                    </div>
                    <div className='col-6'>
                    <div><h3>User list</h3></div>
                        <ul className="list-group">
                            {
                                this.state.users.map((name, i) => {
                                    let activeClass = "";
                                    if (name === this.state.currentUser) activeClass = "active"
                                    return <li key={i} className={"list-group-item " + activeClass} onClick={(e) => this.clickingUser(e, i)} style={{backgroundColor:this.state.bgColor}}>{name} </li>;
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