import React,{useState,useEffect} from 'react'
import { Button,Container} from "semantic-ui-react";
import {Radio} from 'react-bootstrap';
import { toast } from "react-toastify";
import { isWaitingAnswers} from '../../utils/Api';
import { map } from "lodash";
// import axios from 'axios';
import Qs from "qs";
import firebase from "../../utils/Firebase";
import logo from '../../logo.svg';
import './FinalTest.scss';

const db = firebase.firestore(firebase);


const answertres = "https://docs.google.com/spreadsheets/d/1-C-fDg8La-1wwp4JvNvqQ_TXFn_NSL0WVzHc3rZxLzs/edit?resourcekey#gid=875060259";

const skilltres= "Test";

function U1Test(props) {

  const{user,setReloadApp,idclass,classname,teachername}=props; 
  //console.log(idclass);
  //console.log(user.uid); 
  const [formData, setformData] = useState("");
  const [waitingtres, setWaitingtres] = useState(false);
  const [userDetailstres, setUserDetailstres] = useState('');
  const [isLoading, setIsLoading] = useState(false);
//  const [teacheridtres, setTeacheridtres] = useState(null);
  //console.log(userDetailstres);
 //console.log(teachername);
//console.log(idclass);
//console.log(classname);
  

////////////////course details user
useEffect(() => {
    db.collection('waiting')
    .doc(user.uid).get()
    .then(snapshot => setUserDetailstres(snapshot.data()))
       //   setMyclass(arrayofClasses);

}, [])
////////////////

    ////////////set is waiting answers  
useEffect(() => {
    isWaitingAnswers(user.uid).then(response => {
        setWaitingtres(response);
       // console.log(response);
       });     
  }, [user])
/////////formdata state  
  
  const onChange = e =>{
    // console.log("Key:" +e.target.name);
    // console.log("Value:" +e.target.value);

    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  /////////////send response record
const respuesta =()=>{

    db.collection("answers")
    .add({
   
      user:user.uid,
      useremail:user.email,
      username:user.displayName,
      userwork:"U1Test",
      usercourse:userDetailstres.course,
      userlevel:userDetailstres.level,
      userclassid:idclass,
      userclassname:classname,
      avatarUser: user.photoURL,
      createAt: new Date(),
      Teacher: teachername,
      answerlink:answertres,
      studentskill: skilltres,
    
      })
      .then(() => {
        toast.success("The responses are already sent.");
        // resetForm();
        setIsLoading(false);
       // setShowModal(false);
      })
      .catch(() => {
        toast.warning("Error recording the responses.");
        setIsLoading(false);
      }); 
   }
   ///////reset fields
   const resetFields = () => { 
       document.getElementById("u1-course-form").reset();
     }
  /////////////  

 ///////////delete function
 const borrar =()=>{
    //console.log(cartid);
    db.collection('waiting')
    .doc(user.uid)
    .delete()
    .then(() => {
     // console.log("unit exercises completed!");
      toast.success("You already completed the unit exercises.");
      setReloadApp(prevState => !prevState);
      //this.props.history.push("/")
      //window.location.reload();
    }).catch((error) => {
      toast.error("Error completing the unit exercises.");
     // console.error("Error removing document: ", error);
    });
}
 
 ////////// on submit function
  const onSubmit =(e)=> {

  //  console.log(formData);

var str = Qs.stringify(formData)


 e.preventDefault();
  fetch('https://docs.google.com/forms/d/e/1FAIpQLScy78H1YjAYAeDMDfdO3nVF7BgCnZd-k34mEzB-Qr4-1zdeWw/formResponse', {
   method: 'post',
   mode: 'no-cors',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: str,
   redirect: 'follow'
  }).then(() => {
   respuesta();
   resetFields();
   borrar();
   setReloadApp(prevState => !prevState);
  })
 

}  
////////
    return (
        <>
            {!waitingtres ? (
                <div className="App">
                    <header className="App-header">

                    </header>
                </div>
            ) : (
                <div style={{backgroundColor: '#101010', height:'260vh'}}>
                    <Container>
                        <p className="not-assigned-tres">
                            You already sent your answers!
                            <br></br>
                            or
                            <br></br>
                            You don't have a class assigned yet.
                        </p>
                    </Container>
                </div>
            )}
        </>
    )
}
export default  U1Test;