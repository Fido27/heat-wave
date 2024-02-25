import './App.css';


export default function DateComponent() {
    const date = new Date();
    const day = date.toLocaleString('default', { weekday: 'long' });
    const month = date.toLocaleString('default', { month: 'long' });
    const dayNum = date.getDate();
    const year = date.getFullYear();
    return (
        <div className="date">
        <h4 className="day">{day}</h4>
        <p className="format">{month} {dayNum}, {year}</p>
        </div>
    );
    }   
