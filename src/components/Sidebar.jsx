import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(){
        super()
        this.state={
            query:''
          
        }
       
    }

    componentDidMount() {
        const query="Abs"
        fetch(`https://wger.de/api/v2/exerciseinfo/?exercise=${query}&en-US`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ data: data})
            console.log(this.state.data.count)
            console.log(this.state.data.results[0])
        })
        .catch(console.log)
    }
    
    handleChange = (event) =>{
        console.log(event.target.value)
        this.setState=({value : this.state.query})
      
    }
handleSubmit = (e) =>{
    console.log("submitting")
    e.preventDefault()
    this.setState({query: this.state.userInput})
}
    
    render() {
        return (
           
            <div className='sidebar'>
                 <h3>Type a muscle group to workout! Go hard!</h3>
                 <h3>Categories to Choose from <span></span>(type with a capital letter):
                     <ul> <li>Abs</li> 
                     <li>Arms</li> 
                     <li>Legs</li>
                     <li>Chest</li> 
                     <li>Back</li> 
                     <li>Shoulders</li> 
                     <li>Calves</li>  
                     </ul></h3>
               <form>
                   <input type="text" value={this.state.userInput} onChange={this.handleChange}></input>
               </form>
                <button type ="submit" value="submit" onSubmit={this.handleSubmit}>Submit</button>

            </div>
        );
    }
}

export default Sidebar;