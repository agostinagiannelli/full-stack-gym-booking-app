import IClass from "./IClass";
import IUser from "./IUser";

interface IAppointment {
    id: number,
    date: Date,
    time: string,
    status: 'active' | 'cancelled',
    userId: IUser['id'],
    classId: IClass['id'];
};

export default IAppointment;