import "./MyReuse.css";
import React from "react";
import {ListReuse} from '../ListReuse'
import {SelectReuse} from '../SelectReuse';
import {QuestionReuse} from '../QuestionReuse'
import {TableReuse} from '../TableReuse'
function template() {
  return (
    <div className="my-reuse">
      <h1>MyReuse</h1>
      <TableReuse keys={['name','runs','loc']} heading="Players" data={this.playersData} ths={['Name','Runs','Loc']} />
      <TableReuse keys={['name','marks']} heading="Students" data={this.studentsData}  ths={['Student Name','Marks']} />

      <QuestionReuse heading='React' data={this.reactQuestions} />
      <QuestionReuse heading='GK' data={this.questions} />
    
    
      <ListReuse data={this.players} />
      <ListReuse data={this.students} />
     

      <SelectReuse data={this.players} heading="Players" />
      <SelectReuse data={this.students} heading="Students" />

    </div>
  );
};

export default template;
