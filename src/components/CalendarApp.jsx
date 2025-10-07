//CalendarApp.js
import "../Calendar.css";
import DigitalDateTime from "./DigitalDateTime";
import  { useState, useEffect } from "react";
import Modal from "react-modal";
import localforage from "localforage";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";


Modal.setAppElement("#root");

const CalendarApp = () => {
  // グローバル変数で曜日を配列に格納する
  const dayOfTheWeekArray = ["日", "月", "火", "水", "木", "金", "土"];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    // 初期化時にローカルストレージからイベントを読み込む
    localforage.getItem("calendarEvents").then((storedEvents) => {
      if (storedEvents) {
        setEvents(storedEvents);
      }
    });
  }, []);

  useEffect(() => {
    // イベントが更新されたらローカルストレージに保存
    localforage.setItem("calendarEvents", events).catch((err) => {
      console.error("Error saving events:", err);
    });
  }, [events]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const generateCalendar = () => {
    const calendar = [];
    let row = [];

    for (let i = 0; i < firstDay; i++) {
      row.push(<td key={`empty-${i}`}></td>);
    }

    for (let oneDay = 1; oneDay <= daysInMonth; oneDay++) {
      const dateKey = `${year}-${month + 1}-${oneDay}`;
      row.push(
        <td
          key={oneDay}
          onClick={() => openModal(dateKey)}
          className={events[dateKey] ? "event-day" : ""}
        >
          <div>
            {oneDay}
            {events[dateKey] && <div className="event">{events[dateKey]}</div>}
          </div>
        </td>
      );

      // 条件の中で使用するため変数のスコープを適用する
      const oneWeek = 7;
      if ((firstDay + oneDay) % oneWeek === 0 || oneDay === daysInMonth) {
        calendar.push(<tr key={`row-${oneDay}`}>{row}</tr>);
        row = [];
      }
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const openModal = (date) => {
    setSelectedDate(date);
    setEventText(events[date] || "");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEventText("");
  };

  const saveEvent = () => {
    if (eventText.trim()) {
      setEvents({ ...events, [selectedDate]: eventText });
    } else {
      // イベント内容が空の場合、削除
      const updatedEvents = { ...events };
      delete updatedEvents[selectedDate];
      setEvents(updatedEvents);
    }
    closeModal();
  };

  return (
    <div id="calendar">
      <div className="CalendarBody">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container
            component={Paper}
            elevation={1}
            style={{ minHeight: "100vh", maxWidth: "200vh", padding: "2px" }}
          >
            イベント追加が出来るカレンダー(ダークモード対応)
            <DigitalDateTime />
            <div className="cld">
              <DarkModeIcon
                onClick={() => setDarkMode((prevMode) => !prevMode)}
              />
              <button onClick={handlePrevMonth}>＜</button>
              <h2>{`${year}年 ${month + 1}月`}</h2>
              <button onClick={handleNextMonth}>＞</button>
            </div>
            <table>
              <thead>
                <tr>
                  {dayOfTheWeekArray.map((weekItem) => {
                    return <th key={weekItem}>{weekItem}</th>;
                  })}
                </tr>
              </thead>
              <tbody>{generateCalendar()}</tbody>
            </table>
            <span className="textDescription">
              カレンダーアプリ
              <CalendarMonthIcon color="secondary" sx={{ fontSize: 25 }} />
              <br />
              予定の保存を行いましたら、予定削除は空欄で保存をしてください。
              <br />
              （ローカルストレージに保存されます）
            </span>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              className="modal"
            >
              <h2>{selectedDate}のイベントを登録</h2>
              <textarea
                value={eventText}
                onChange={(e) => setEventText(e.target.value)}
                placeholder="イベント内容を入力"
              />
              <button onClick={saveEvent}>保存</button>
              <button onClick={closeModal}>キャンセル</button>
            </Modal>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
};

  // {
  //   testArray.map((item) => {
  //     return <li key={item}>{item}</li>;
  //   });
  // } map関数に置き換え下書き
export default CalendarApp;