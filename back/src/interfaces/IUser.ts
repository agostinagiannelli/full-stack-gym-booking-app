import IAppointment from "./IAppointment";
import ICredential from "./ICredential";

interface IUser {
    id: number,
    name: string,
    email: string,
    dateOfBirth: Date,
    identityNumber: number,
    credentialsId: ICredential['id'],
    appointments: IAppointment[]
};

export default IUser;