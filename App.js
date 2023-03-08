import ChatBot from 'react-simple-chatbot';
import React from 'react';
import {Segment} from "semantic-ui-react";
//import './App.css';

function App() {
  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Ask Name"

    },

    {

      id: "Ask Name",

      message: "Please enter your name!",

      trigger: "waiting1"

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name"

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues"

    },

    {

      id: "issues",

      options: [

        {value: "React",label: "React",trigger: "React"},

        { value: "Angular", label: "Angular", trigger: "Angular" },

      ],

    },

    {

      id: "React",

      message:

        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,

    },

    {

      id: "Angular",

      message:

        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,

    },

  ]; 
  return (
  <>
  <Segment floated="right">
<ChatBot steps={steps}/>
  </Segment>
  </>
  );
}

export default App;
