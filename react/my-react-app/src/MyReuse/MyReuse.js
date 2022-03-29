import React    from "react";
import template from "./MyReuse.jsx";

class MyReuse extends React.Component {
  constructor(){
    super();
    this.players=['Sachin','Dhoni','Kohli']
    this.students=['Std1','Std2','Std3','Std4']
    this.questions=[
      {
         que:'Who is the PM of India ?',
         options:['Babu','Rahul','Modi','None']
      },
      {
       que:'Who is the captian of Indian Cricket team ?',
        options:['sachin','dhoni','kohli','Rohit']
      }
   
   ]
   this.reactQuestions=[
    {
       que:'ReactDOM.render take how many arguments',
       options:['2','3','1','None']
    },
    {
     que:'How to share the data from child to parent component ?',
      options:['props','refs','callback','context']
    }
 
 ]
  this.playersData=[
    {
      name:'Sachin',
      runs:20000,
      loc:'Mumbai'
    },
    {
      name:'Dhoni',
      runs:10000,
      loc:'Ramchi'
    }
  ]
  this.studentsData=[
    {
      name:'s1',
      marks:100
    },
    {
      name:'s2',
      marks:90
    },
    {
      name:'s3',
      marks:80
    }
  ]
  }
  render() {
    return template.call(this);
  }
}

export default MyReuse;
