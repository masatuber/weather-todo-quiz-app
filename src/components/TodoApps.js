import React from 'react';
import { Route, Routes, Link,  } from 'react-router-dom';
import TodoList from "./TodoList"; 
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from 'react';

function TodoApps()  {
const [todos, setTodos] = useState([]);
//インポート済のuseRef変数
const todoNameRef = useRef();
//タスクを追加するイベント変数
const handleAddTodo = () =>{
// inputの値（テキストのみ）取得する変数
const name = todoNameRef.current.value;
//空のタスクを除く処理
if(name === "") return;
//タスクの追加と更新する処理（スプレッド構文でオブジェクト更新idとnameとcompleted）
setTodos((prevTodos)=>{
  return [...prevTodos, {id: uuidv4(), name: name, completed: false }]; //uuidでユニークな値生成
  });
  todoNameRef.current.value = null;
};

const toggleTodo = (id) =>{
//todosの状態コピー変数
const newTodos = [...todos]; 
//toggleTodos変数の引数（id）が一致している場合にtodo変数に格納する（find関数）
const todo = newTodos.find((todo) => todo.id === id );
//todo変数が一致したならばcompletedで反転させる処理
  todo.completed = !todo.completed;
//setTodosを更新する処理
  setTodos(newTodos);
};
const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
  
};



         return (
        <>
         <div className="todo">
            <h3>・Todoリスト管理画面</h3> 
            <div className="todo">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo} >タスクを追加する</button>
      <button onClick={handleClear} >完了したタスクを削除削除する</button>
      <div><p>未完了のタスク ： {todos.filter((todo) => !todo.completed).length}</p></div>
      <p>サーバーレスのためリロードしましたらタスクがリセットされます。 </p>
      {/*フィルター関数でfalseの時カウント*/}
     
            <li><Link to="/">天気アプリホームはこちら</Link></li>
            <li>
              <Routes>
                <Route path='/' element="Homeはこちら" /> 
            </Routes>
            </li>
            </div>
          </div>
        </>
        );
};

export default  TodoApps;