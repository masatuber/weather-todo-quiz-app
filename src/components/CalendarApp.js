import React, { useState } from "react";
import '../Calendar.css';
const CalendarApp = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 現在の年月を取得
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 月初と月末の計算
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // カレンダーのレンダリング用配列を生成
  const generateCalendar = () => {
    const calendar = [];
    let row = [];

    // 空白セルを追加
    for (let i = 0; i < firstDay; i++) {
      row.push(<td key={`empty-${i}`}></td>);
    }

    // 日付セルを追加
    for (let day = 1; day <= daysInMonth; day++) {
      row.push(
        <td
          key={day}
          onClick={() => alert(`${year}年${month + 1}月${day}日を選択しました`)}
        >
          {day}
        </td>
      );

      // 土曜日で行を区切る
      if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
        calendar.push(<tr key={`row-${day}`}>{row}</tr>);
        row = [];
      }
    }

    return calendar;
  };

  // 月の切り替え関数
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div id="calendar">
      <header>
        <button onClick={handlePrevMonth}>＜</button>
        <h2>{`${year}年 ${month + 1}月`}</h2>
        <button onClick={handleNextMonth}>＞</button>
      </header>
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
      <p>カレンダーアプリ</p>
    </div>
  );
};

export default CalendarApp;