import { useConfirm } from "material-ui-confirm";
import { useState, useEffect } from "react";

import { getUserInfo } from "../services/users";
import { updateUserInfo } from "../services/users"; 
import { useNavigate } from "react-router-dom";

function UserInfoUpdate({ user }) {

    const token = localStorage.getItem("token");
    const confirm = useConfirm()

    const [editing, setEditing] = useState(false); 
    const [userData, setUserData] = useState(user); 

    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {

        if (token) {

            getUserInfo(token)
                .then(data => setUserData(data.UserInfo))
                .catch((err) => {
                    console.log(err);
                    navigate("/login");
                });
        
        } else {
            navigate("/login");
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {

        if (userData) {

            setUserName(userData.username);
            setEmail(userData.email);

        }

    }, [userData])

    const toggleEdit = () => setEditing(!editing); 
    
    const handleSave = async () => {
        if (token) {

            const updatedData = {
                ...userData,
                username: username,
                email: email,
                password: password
            }

            await updateUserInfo(token, updatedData);  
            setUserData(updatedData)
            setEditing(false);

        } else {
            navigate("/login")
        }
    };

    const handleCancel = () => {

        setUserName(userData.username);
        setEmail(userData.email);  // Reset to the original user data
        setPassword(undefined)
        setEditing(false);  // Exit editing mode

    };

    return (
        <div>
            { (userData != undefined) && (
                <div>
                    { editing ? (
                        <form className="profile-edit-info">
                            <div>
                                <p className="label">Username:</p>
                                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div>
                                <p className="label">Email:</p>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <p className="label">Password:</p>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>
                    ) : (
                        <div className="profile-edit-info">
                            <div>
                                <p className="label">Username:</p>
                                <p>{name}</p>
                            </div>
                            <div>
                                <p className="label">Email:</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="profile-edit-buttons">
                {editing ? (
                    <>
                        <button 
                    
                        onClick={() => {

                            confirm({ description: "User information will be overwritten" })
                                .then(() => {
                                    handleSave()
                                })
                                .catch(() => {
                                    console.log("Save updated user info cancelled")
                                })
                            }}
                        >Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </>
                ) : (
                    <button onClick={toggleEdit}>Edit Profile</button>
                )}
            </div>
        </div>
    );
}

export default UserInfoUpdate;
