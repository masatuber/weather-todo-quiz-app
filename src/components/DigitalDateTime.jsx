//リアルタイム時計
import {useEffect, useState} from 'react';

const weekday = ['日', '月', '火', '水', '木', '金', '土'];
const DigitalDateTime = () => {
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

useEffect(() => {
setInterval(() => {
    let dateInstance = new Date();
    let year = dateInstance.getFullYear();
    let month = dateInstance.getMonth();
      month++;

    let day = dateInstance.getDate();
    let dayOfWeek = dateInstance.getDay();
        setDate(year + '年' + month + '月' + day + '日' + " " + '('+ weekday[dayOfWeek] + ')');
    let hour = dateInstance.getHours().toString().padStart(2, "0");
    let minute = dateInstance.getMinutes().toString().padStart(2, "0");
    let seconds = dateInstance.getSeconds().toString().padStart(2, "0");
        setTime(hour + ':' + minute + ':' + seconds);
    }, 1000);
}, []);

return (
    <div className="Digit">
      <p className="digit">{date} <span>{time}</span></p>
    </div>
  );
}

export default DigitalDateTime;