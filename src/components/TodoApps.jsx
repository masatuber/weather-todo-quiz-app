//TodoApps.js
import './todoApps.css'; //タスク管理CSS
import TodoList from "./TodoList"; //コンポーネント
import Title from "./Title"; //コンポーネント
import DigitalDateTime from './DigitalDateTime'; //コンポーネント
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import * as XLSX from "xlsx"; // xlsxライブラリ
import { saveAs } from "file-saver"; // file-saverライブラリ
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material"; //MUI
import TaskAltTwoToneIcon from "@mui/icons-material/TaskAltTwoTone"; //タスクチェックアイコン導入

function TodoApps() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const todoNameRef = useRef();

  // ダークモードのテーマを定義
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#333333" : "#ffffff", // 背景色の設定
        paper: darkMode ? "#333333" : "#f5f5f5", // Paperコンポーネントの背景色
      },
      text: {
        primary: darkMode ? "#ffffff" : "#292929", // テキストの色
      },
    },
  });

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name, completed: false },
    ]);
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleExport = () => {
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    const taskData = [
      ["ID", "タスク名", "完了状態"],
      ...incompleteTodos.map((todo) => [todo.id, todo.name, "未完了"]),
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(taskData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "未完了タスク一覧");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "Tasks.xlsx");
  };

  return (
    <>
      <div className="todoContainer">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Title />
          <DigitalDateTime />
          <Container
            component={Paper}
            style={{ padding: "0px", marginTop: "1%", marginLeft: "1%", width: "100%" }}
          >
            <Box textAlign="center">
              <Typography gutterBottom>
                <Button
                  variant="contained"
                  onClick={() => setDarkMode((prevMode) => !prevMode)}
                  style={{ marginBottom: "8px" }}
                >
                  {darkMode
                    ? "ライトモードに切り替え"
                    : "ダークモードに切り替え"}
                </Button>
                <br />
                <div className="todoText">
                  Todoリスト管理画面
                  <br />
                </div>
                <div className="todoDescription">
                  機能：サーバーレス 未完了タスクをExcelに転記可能
                  ダークモード切替可能。
                </div>
                <TaskAltTwoToneIcon sx={{ fontSize: 15 }} />
              </Typography>
              <Box marginBottom={5}>
                <TodoList todos={todos} toggleTodo={toggleTodo} />
              </Box>
              <TextField
                inputRef={todoNameRef}
                variant="outlined"
                helperText="タスクを入力"
                fullWidth
                style={{ marginBottom: "20px" }}
              />
              <Box marginBottom={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddTodo}
                  style={{
                    marginLeft: "-20px",
                    marginTop: "-15%",
                    fontSize: "12px",
                  }}
                >
                  タスクを追加する
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClear}
                  style={{
                    marginLeft: "-20%",
                    marginTop: "10%",
                    padding: "5px",
                    fontSize: "10px",
                  }}
                >
                  完了したタスクを削除する
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    marginRight: "50px",
                    marginTop: "30%",
                    fontSize: "8px",
                  }}
                  onClick={handleExport}
                >
                  未完了タスクを<br/>
                  Excelにエクスポート
                </Button>
              </Box>
              <Typography variant="body2" marginTop={1}>
                未完了のタスク: {todos.filter((todo) => !todo.completed).length}
              </Typography>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

export default TodoApps;
