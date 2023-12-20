import './App.css';
import profile from './imgs/profile.jpg';


function AboutMe() {

  return (
    <>
      <h1>Hi, my name's Michael</h1>
      <img alt = "25" style = {{height: 'auto',width:'400px'}} src = {profile}></img>
    </>
  )

}

// make this component available to be imported into any other file
export default AboutMe
