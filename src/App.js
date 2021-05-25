import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./Forms.js";
import Todos from "./Todos.js"

const App = () => {
   const [students, setStudents] = useState(
      [
         {
            surname: "Дахиев",
            name: "Юсуф",
            fathername: "Юнусович",
            paid: false,
         },
         {
            surname: "Хутиев",
            name: "Апти",
            fathername: "Алиевич",
            paid: false,
         },
      ]
   )
   const [text, setText] = useState('')
   const typeText = (e) => {
      setText(e.target.value)
   }
   const addStudent = () => {
      const fio = text.split(' ');


      setStudents(
         [
            ...students,
            {
               surname: fio[0],
               name: fio[1],
               fathername: fio[2],
               paid: checked,
            }
         ]
      )
   }
   const handleDeleteStudent = (i) => {
      const newDel = students.filter((item, index) => {
         if (index === i) {
            return false
         }
         return true
      })
      setStudents(newDel)
   }
   const [checked, setChecked] = useState(false)
   const handlePaid = () => {
      
      setChecked(!checked)

   }


   return (
      <div className="container w-50 mt-3">
         <Forms
            addStudent={addStudent}
            typeText={typeText}
            text={text}
            checked={checked}
            handlePaid={handlePaid}

         />
         <Todos
            students={students}
            handleDeleteStudent={handleDeleteStudent}
         />
      </div>
   )
}

export default App