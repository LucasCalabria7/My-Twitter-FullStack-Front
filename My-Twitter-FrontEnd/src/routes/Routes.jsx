import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from '../pages/LoginPage'
import {SignUpPage} from '../pages/SignUpPage'
import {PostsPage} from '../pages/PostsPage'
import {ErrorPage} from '../pages/ErrorPage'
import { PhoneHeader } from "../components/PhoneHeader";

export function Router () {

    return (
        <BrowserRouter>
        <PhoneHeader />
        <Routes>
            <Route index element={< LoginPage />}/>
            <Route path="/signup" element={< SignUpPage />}/>
            <Route path="/posts" element={< PostsPage />}/>
            <Route path="*" element={< ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}