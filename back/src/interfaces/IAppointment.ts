interface IAppointment {
    id: number,
    date: Date,
    time: Date,
    userId: number,
    status: 'active' | 'cancelled'
};

export default IAppointment;