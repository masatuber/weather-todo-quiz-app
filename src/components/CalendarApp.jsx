//CalendarApp.js
import  { useState, useEffect } from "react";
import Modal from "react-modal";
import localforage from "localforage";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "../Calendar.css";
import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

Modal.setAppElement("#root");

const CalendarApp = () => {
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
          default: darkMode ? "#121212" : "#ffffff", // 背景色の設定
          paper: darkMode ? "#1d1d1d" : "#ffffff", // Paperコンポーネントの背景色
        },
        text: {
          primary: darkMode ? "#ffffff" : "#000000", // テキストの色
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

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${month + 1}-${day}`;
      row.push(
        <td
          key={day}
          onClick={() => openModal(dateKey)}
          className={events[dateKey] ? "event-day" : ""}
        >
          <div>
            {day}
            {events[dateKey] && <div className="event">{events[dateKey]}</div>}
          </div>
        </td>
      );

      if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
        calendar.push(<tr key={`row-${day}`}>{row}</tr>);
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Paper} style={{ padding: "10px", marginTop: "1%" }}>
        <div id="calendar">
          <div className="CalendarBody">
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
                  <th>日</th>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                </tr>
              </thead>
              <tbody>{generateCalendar()}</tbody>
            </table>
            <span>
              カレンダーアプリ
              <CalendarMonthIcon color="secondary" sx={{ fontSize: 25 }} />
              <br />
              予定の保存を行いましたら、予定削除は空欄で保存をしてくだいさい。（ローカルストレージに保存されます）
            </span>
          </div>

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
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default CalendarApp;