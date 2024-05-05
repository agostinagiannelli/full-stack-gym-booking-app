interface AppointmentDto {
    date: Date,
    time: Date,
    userId: number,
    status: 'active' | 'cancelled'
};

export default AppointmentDto;