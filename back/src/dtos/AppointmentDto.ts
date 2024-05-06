interface AppointmentDto {
    date: Date,
    time: string,
    status: 'active' | 'cancelled',
};

export default AppointmentDto;