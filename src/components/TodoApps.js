import React from 'react';
import TodoList from "./TodoList"; 
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from 'react';
import * as XLSX from 'xlsx'; // xlsxライブラリ
import { saveAs } from 'file-saver'; // file-saverライブラリ

function TodoApps() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // タスクを追加するイベント
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  // タスクの完了状態をトグル
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  // 完了したタスクを削除
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // Excelエクスポート処理（未完了タスクのみ）
  const handleExport = () => {
    // 未完了タスクのみをフィルタリング
    const incompleteTodos = todos.filter((todo) => !todo.completed);

    // タスクをExcel用データ形式に変換
    const taskData = [
      ["ID", "タスク名", "完了状態"], // ヘッダー行
      ...incompleteTodos.map((todo) => [todo.id, todo.name, "未完了"])
    ];

    // データをワークシートに変換
    const worksheet = XLSX.utils.aoa_to_sheet(taskData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "未完了タスク一覧");

    // ファイルを保存
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "IncompleteTasks.xlsx");
  };

  return (
    <>
      <div className="todo">
        <font color="white">
          <h3>・Todoリスト管理画面</h3>
        </font>
        <div className="todo">
          <font color="white">
              <TodoList todos={todos} toggleTodo={toggleTodo} /> 
          </font>
          <input type="text" ref={todoNameRef} />
            <button onClick={handleAddTodo} className='btnTodo'>タスクを追加する</button>
            <button onClick={handleClear} className='btnTodo'>完了したタスクを削除する</button>
            <button onClick={handleExport}className='btnTodoExcel'>未完了タスクをExcelにエクスポート</button> {/* エクスポートボタン */}
          <font color="white">
            未完了のタスク ： {todos.filter((todo) => !todo.completed).length} <br />
            機能：サーバーレスのためリロードでタスクがリセットされます。<br />
            未完了タスクはExcelファイルにエクスポートし、ダウンロード出来ます。
            </font>
          </div>
      </div>
    </>
  );
};

export default TodoApps;