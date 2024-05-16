export function formatDate(dateString) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
};

export function formatTime(time) {
    const timeMap = {
        '07:00:00': '7am Yoga',
        '08:00:00': '8am Crossfit',
        '17:00:00': '5pm Pilates',
        '18:00:00': '6pm Calisthenics',
        '19:00:00': '7pm Yoga',
        '20:00:00': '8pm Crossfit',
    };
    return timeMap[time] || 'Unknown';
};