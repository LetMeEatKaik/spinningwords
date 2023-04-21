import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap"
import { useState, useEffect, useRef } from 'react'
import Chat from './components/Chat'
import Spin from './components/Spin'
import InfoCard from './components/InfoCard' // Import the InfoCard component`
import './App.css'

export default function App() {
  const [name, setName] = useState(null);
  const [nameFieldText, setNameFieldText] = useState("");

  return (
    <div style={{ padding: "15px" }}>
      
      {/* <hr />
      <hr /> */}
      
      <Spin />
      <div style={{ position: "fixed", bottom: "15px", right: "15px" }}>
        <InfoCard />
      </div>
    </div>
  );
}
