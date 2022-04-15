

import { Container } from 'react-grid-system';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Content from './components/content';
import Home from './components/home';
import Insurance from './components/Insurance';
import Footer from './components/footer';
import InsuranceHome from './components/insuranceHome';
import Login from './components/Login';
import PatientHome from './components/patientHome';
import MainMenu from './components/mainMenu';
import Hospitals from './components/hospitals';



function App() {
  return (
    <Container>
    <div>
      <Header/>
    </div>
    
    <MainMenu/>
    
    <Footer/>
    </Container>
  );
}

export default App;
