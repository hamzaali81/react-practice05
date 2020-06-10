import React, { Component } from 'react';
import "./App.css";
// import PropTypes from 'prop-types';
//install as separate module prop-types
//built in type checking to validate props
//array,bool,func,number,object,string,symbol



//props not passed at all ????
// isRequired default

//object with particular shape

// const Person=({info,img,name,age})=>{
//   const Person=({person:{img,name,age,info}})=>{
// //  const {img,name,age,info}=props.person;
// console.log(info)
// return(
//     <article>
//       <img src={img} alt="person"/>
//       <h4>name : {name}</h4>
//       <h4>age: {age}</h4>
//       <h4>info: {info || 'default info about the person'}</h4>
//     </article>
//   )
// }


// Person.propTypes={
// person:PropTypes.shape({

//   img: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// age: PropTypes.number.isRequired,
// info:PropTypes.string.isRequired
// })
// };



// Person.defaultProps={
//   // img:"https://randomuser.me/api/portraits/thumb/men/71.jpg",
//   // name:'doe',
//   // age:35,
//   // info:'default info about person'
// Person:{
//   info: "default info about the person"
// }

// }

// class PersonList extends Component{
//  state={
//    people:[
//      {
//        id: 1,
//        img:"https://randomuser.me/api/portraits/thumb/men/75.jpg",
//        name: "john",
//        age:34
//     },
//     {
//       id: 2,
//       img: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
//       name: "mark",
//       age:23,
//       info:"Some info about mark"
//    }
//    ]
//  }
//   render(){
//    return(
//      <section>
//      {this.state.people.map(person=>(
//        <Person 
//      key={person.id} 
//     //  img={person.img} 
//     //  name={person.name} 
//     //  age={person.age}
//     person={person} />
//      ))}
//      </section>
//    )
//  }


// }








//controlled uncontrolled inputs
//JS
//const input =document.getElementById('myText');
//const inputVslue =input.value
//React
//value, onChange


class Form extends Component{
  state={
    firstName:'',
    lastName:'',
    people:[]
  };
   handleChange=event=>{
    //  console.log(event.target.name);
    //  console.log(event.target.value);

    //  if(event.target.name ==='firstName'){

    //    const textValue=event.target.value;
    //    this.setState({
    //      firstName: textValue
    //    }) 
    //  }
   
  this.setState({
    [event.target.name]:[event.target.value]
  })
} 
  handleSubmit = e =>{
    e.preventDefault();
  const firstName=this.state.firstName;
  const lastName=this.state.lastName;
  console.log(firstName,lastName);
  if(firstName.length>0 && lastName.length>0){
    const person =`${firstName} ${lastName}`;
    this.setState({
      people:[...this.state.people,person],
      firstName: '',
      lastName:''
    })
  }
  }
  
  
  
  
  
  
render(){
  return(
    <section>

    <article>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
         <input type="text" name="lastName" value={this.state.lastName}  onChange={this.handleChange}/>
      <button type="submit">Submit</button>
      </form>
    </article>
    <article>
    <h1>people</h1>
      <div>{this.state.people}</div>
    </article>
    </section>
    
  )
}
}


class App extends Component {
  render() {
    return (
      <h1><Form /></h1>
    )

  }
}

export default App;