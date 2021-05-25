const Forms = (props) =>{
   return(
      <>
         <div className="d-flex justify-content-between mb-3">
            <div>
               <input 
               type="text"
               value={props.text}
               onChange={props.typeText}
               />
            </div>
            <div>
               <input type="checkbox"
               checked={props.checked}
               onChange={props.handlePaid}
               />
            </div>
            <button className="btn btn-success" onClick={props.addStudent}>Добавить</button>
         </div>
      </>
   )
}

export default Forms