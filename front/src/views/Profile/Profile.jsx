import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../redux/slices'
import { Title, Logout, NavBar, Footer } from '../../components'
import { formatDate, showToast, getUserById } from '../../helpers'

export default function Profile() {
    const [user, setUser] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = useSelector((state) => state.user.userId);
    const userName = useSelector((state) => state.user.userName);

    useEffect(() => {
        if (userId) {
            getUserById(userId)
                .then((res) => {
                    const { email, dateOfBirth, identityNumber } = res;
                    setUser({ email, dateOfBirth, identityNumber });
                })
                .catch((err) => {
                    console.error(err.response.data);
                });
        }
    }, [userId]);

    const formattedDateOfBirth = user ? formatDate(user.dateOfBirth) : null;

    const handleLogout = () => {
        showToast({
            text: "Leaving so soon? Click to confirm 👋",
            onClick: () => {
                dispatch(removeUser());
                navigate('/');
                showToast({ text: "Logged out successfully! See you next workout 💪" });
            }
        })
    };

    return (
        <>
            <div className="bg-image d-flex flex-column min-vh-100">
                <NavBar />
                <Title
                    title="Profile"
                    link="/schedule"
                    linkTitle="Save Your Spot"
                />
                {userId ? (
                    <div className="d-flex flex-fill">
                        <div className="container d-flex justify-content-center align-items-start">
                            <div className="card text-center mb-3 shadow-sm col-12 col-md-4">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush row-gap-2">
                                        <li className="list-group-item"><b>Name:</b> {userName}</li>
                                        <li className="list-group-item"><b>Email:</b> {user ? user.email : null}</li>
                                        <li className="list-group-item"><b>DOB:</b> {formattedDateOfBirth}</li>
                                        <li className="list-group-item"><b>ID Number:</b> {user ? user.identityNumber : null}</li>
                                    </ul>
                                    <button className="btn btn-outline-primary btn-white mt-4 w-100" onClick={handleLogout}>Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Logout />
                )}
                <Footer />
            </div>
        </>
    )
}