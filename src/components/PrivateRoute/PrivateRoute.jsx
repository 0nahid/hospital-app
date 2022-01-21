import React from "react";
import { Navigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

export default function PrivateRoute({ children }) {
    const { user, isLoading } = useFirebase();
    if (isLoading) {
        return (
            <div className="flex place-items-center h-screen justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-[#f91944]"></div>
            </div>
        );
    }
    return user?.email ? (
        children
    ) : (
        <Navigate
            to={{
                pathname: "/login",
            }}
        />
    );
}