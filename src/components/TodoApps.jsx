//TodoApps.js
import TodoList from "./TodoList"; //コンポーネント
import Title from "./Title";
import Digit from "./DigitalDateTime";
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
        default: darkMode ? "#121212" : "#ffffff", // 背景色の設定
        paper: darkMode ? "#1d1d1d" : "#ffffff", // Paperコンポーネントの背景色
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000", // テキストの色
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Title />
      <Digit />
      <Container component={Paper} style={{ padding: "10px", marginTop: "1%" }}>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            <Button
              variant="contained"
              onClick={() => setDarkMode((prevMode) => !prevMode)}
              style={{ marginBottom: "10px" }}
            >
              {darkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
            </Button>
            <br />
            Todoリスト管理画面
            <br />
            <font size="2">
              機能：サーバーレス 未完了タスクをExcelに転記可能
              ダークモード切替可能。
            </font>
            <TaskAltTwoToneIcon sx={{ fontSize: 20 }} />
          </Typography>
          <Box marginBottom={10}>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </Box>
          <TextField
            inputRef={todoNameRef}
            label="タスクを入力"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "10px" }}
          />
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddTodo}
              style={{ marginRight: "80%", marginTop: "5%" }}
            >
              タスクを追加する
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              style={{ marginRight: "15%" }}
            >
              完了したタスクを削除する
            </Button>
            <Button variant="contained" color="success" onClick={handleExport}>
              未完了タスクをExcelにエクスポート
            </Button>
          </Box>
          <Typography variant="body1" marginTop={1}>
            未完了のタスク: {todos.filter((todo) => !todo.completed).length}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default TodoApps;
