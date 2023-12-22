import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Register, Login, Main, About, Program, Events, News } from "./components/index";
import {
  Home,
  List, ListPrograms, ListEvents,
  New, NewProgram, NewEvent,
  Single, DetailProgram, DetailEvent
} from './pagesAdminPanel/index';

import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Main />} />
        <Route path="/adminpanel/">
          <Route index element={<Home />} />
          <Route path='users/'>
            <Route index element={<List />} />
            <Route path=':id' element={<Single />} />
          </Route>
          <Route path='programs/'>
            <Route index element={<ListPrograms />} />
            <Route path=':id' element={<DetailProgram />} />
            <Route path='new' element={<NewProgram />} />
          </Route>
          <Route path='news/'>
            <Route index element={<List />} />
            <Route path=':id' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='events/'>
            <Route index element={<ListEvents />} />
            <Route path=':id' element={<DetailEvent />} />
            <Route path='new' element={<NewEvent />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;