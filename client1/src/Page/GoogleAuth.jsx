import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux Actions
import { googleAuth } from "../Redux/Reducer/Auth/auth.action";

const GoogleAuth = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(token) {
            dispatch(googleAuth(token)).then(() => history.push("/delivery"));
        }
    },[token]);

    return (
        <>
            Loading, Please Wait.....
        </>
    );
};

export default GoogleAuth;