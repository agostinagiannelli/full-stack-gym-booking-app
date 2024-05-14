export function formatDate(dateString) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
};

export function formatTime(time) {
    const timeMap = {
        '07:00:00': '7am to 8am',
        '08:00:00': '8am to 9am',
        '17:00:00': '5pm to 6pm',
        '18:00:00': '6pm to 7pm',
        '19:00:00': '7pm to 8pm',
        '20:00:00': '8pm to 9pm',
    };
    return timeMap[time] || 'Unknown';
};