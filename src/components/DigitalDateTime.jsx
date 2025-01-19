//リアルタイム時計
import {useEffect, useState} from 'react';

const weekday = ['日', '月', '火', '水', '木', '金', '土'];
const DigitalDateTime = () => {
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

useEffect(() => {
setInterval(() => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let dayOfWeek = d.getDay();
        setDate(year + '年' + month + '月' + day + '日' + " " + '('+ weekday[dayOfWeek] + ')');
    let hour = d.getHours().toString().padStart(2, '0');
    let minute = d.getMinutes().toString().padStart(2, '0');
    let seconds = d.getSeconds().toString().padStart(2, '0');
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