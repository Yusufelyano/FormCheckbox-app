import Todo from "./Todo.js";
const Todos = (props) => {
   return (
      <>
         <ul className="list-group">
            {props.students.map((student, index) => {
               return (
                 <Todo 
                 student={student}
                 index={index}
                 deleteStudent={props.deleteStudent}
                 />
               );
            })}
         </ul>
      </>
   )
}

export default Todos