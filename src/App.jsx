import React from 'react';
import { Route, Routes } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './Pages/Home';
import Login from './Pages/Login';
export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
