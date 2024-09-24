
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";
import Home from "./pages/home";
import Footer from './components/footer';
import Courses from './pages/courses';
import BooksPage from './pages/books';
import Login from './pages/login';
import "./App.css";


export default function App(){
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/books" element={<BooksPage/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}



