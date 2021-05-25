const Todo = (props) => {
   return (
      <>
         <li className="list-group-item d-flex justify-content-between aline-items-center">
            {props.student.surname}
            {' '}
            {props.student.name[0]}.
            {' '}
            {props.student.fathername[0]}.
                     <div>
            {props.student.paid ? "Оплатил" : "Не оплатил"}
            </div>
            <button onClick={() => props.handleDeleteStudent(props.index)}>❌</button>
         </li>
      </>
   )
}
  

export default Todo