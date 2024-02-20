import React from 'react'; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DisplayEvents from './Views/DisplayEvents';
import Form from './Components/Forms/Form';
import { Route, Routes } from 'react-router-dom';
import { TodoContextProvider } from './Store/TodoContext';
const App = () => {
  return (
    <>
      <TodoContextProvider>
        <div className='bg-[#F2F2F2] font-sans tracking-wide text-2xl flex h-dvh '>
          <Header/> 
          <div className='flex-1'>
          <Routes>
            <Route path="/" element={<DisplayEvents />}></Route>
            <Route path="/edit/:id" element={<Form />}></Route>
            <Route path="/addtask" element={<Form />}></Route>
          </Routes> 
          </div>
          <Footer />
        </div>
      </TodoContextProvider>
    </>
  );
}
export default App;