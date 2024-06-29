// import { useEffect, useState } from "react";

// export default function One() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const addTodos = () => {
//     setTodos([...todos, newTodo]);
//   };
//   const editTodos = (oldvalue, newvalue) => {
//     const newIndex = todos.filter((item) => {
//       return item === oldvalue;
//     });
//     if (newIndex.length > 0) {
//       // const nIndex = indexOf(newIndex.pop());
//       // setTodos([...todos, newvalue]);
//     } else {
//       setTodos([...todos, newvalue]);
//     }
//   };

//   useEffect(() => {}, [todos]);
//   const TodoItem = (props) => {
//     console.log(props);
//     const [isEdit, setEdit] = useState(false);
//     const [editedTodo, setEditTodo] = useState(props.items);
//     return (
//       <div>
//         {isEdit ? (
//           <>
//             <input
//               type="text"
//               value={editedTodo}
//               onChange={(e) => setEditTodo(e.target.value)}
//             ></input>
//             <button
//               type="button"
//               onClick={() => editTodos(props.items, editedTodo)}
//             >
//               Update
//             </button>
//           </>
//         ) : (
//           <button onClick={() => setEdit(true)}>Edit</button>
//         )}
//         {props.items}
//       </div>
//     );
//   };
//   return (
//     <div>
//       <div>
//         1. Implement a Todo List: Create a simple todo list application where
//         users can add, edit, and delete tasks.
//       </div>
//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         ></input>
//         <button onClick={() => addTodos()}>Add Todo</button>
//       </div>
//       <div>
//         {todos &&
//           todos.map((item, index) => {
//             return (
//               <TodoItem
//                 items={item}
//                 editTodos={() => editTodos()}
//                 key={index}
//               />
//             );
//           })}
//       </div>
//     </div>
//   );
// }
