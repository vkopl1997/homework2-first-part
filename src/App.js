import './App.css';
const arrOfObj = [
  {name: 'Rezo', lastName: 'Katamadze',age: 37,id: 134833},
  {name: 'Kote', lastName: 'Meskhi',age: 56,id: 136833},
  {},
  {name: 'Ucha', lastName: 'Zeragia',age: 54,id: 174483},
  {name: 'Givi', lastName: 'Intskirveli',age: 62,id: 131481},
  {}
];
let isUserLoggedIn = true;


const Parent = (props)=>{
  return <Child
  users = {props.users}
  status = {props.status}
  />
  
  
};
const Child = (props) =>{
  // console.log('props',props.users);
 if(props.status){
  
  return  props.users.map((user) => {
    // console.log('fffffff',user);
    // console.log(Object.keys(user).length);
    return Object.keys(user).length?( <p> {user.name} {user.lastName}, age: {user.age}</p>):(<p>no users in the system</p>);
    
  })
    
     
 }else{
     return 'you are not authorized to see user list'
   };
 }
 const Navbar =() => {
   return <div className='header'>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Learn more</h2>
      <h2>Contact us</h2>
      <h2>Click here</h2>
   </div>
 }
 const Footer = () => {
   return <footer>
    <div className='contactheader'>contact info</div>
    <div className='footerbar'>
      <h4>Contact us</h4>
      <h4>Learn more</h4>
    </div>
   </footer>
 }
 const Wrapper = () => {
   return <>
     <Navbar />
     <Parent 
      users = {arrOfObj}
      status = {isUserLoggedIn}
      />
     <Footer/>
   </>
 }

function App() {  
  return (
    <div className="App">
      <Wrapper/>
    </div>
  );
}


export default App;
