import './Home.css';

const HoursTable = () => {
    const daysOfWeek = [
      { day: 'Wednesday', hours: '9:00 a.m. - 6:30 p.m.' },
      { day: 'Thursday', hours: '9:00 a.m. - 6:30 p.m.' },
      { day: 'Friday', hours: '9:00 a.m. - 6:30 p.m.' },
      { day: 'Saturday', hours: '9:00 a.m. - 5:00 p.m.' },
      { day: 'Sunday', hours: 'Closed' },
      { day: 'Monday', hours: '9:00 a.m. - 6:30 p.m.' },
      { day: 'Tuesday', hours: '9:00 a.m. - 6:30 p.m.' },
    ];
  
    return (
      <div className="hours-table-container">
        <h2 className="hours-table-title">Shop Opening Hours</h2>
        <table className="hours-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {daysOfWeek.map((dayInfo, index) => (
              <tr key={index} className={dayInfo.day === 'Sunday' ? 'closed-day' : ''}>
                <td>{dayInfo.day}</td>
                <td>{dayInfo.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default HoursTable;