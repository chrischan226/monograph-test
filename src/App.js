import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {
  const [{ feedback, party, emoji, storage, width }, setState] = 
    useState({ feedback: '', party: 2, emoji: 4, storage: ['😡', '🙁', '😐', '😊', '😍'], width: window.innerWidth });
  
  const update = ({target: { name, value }}) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const isMobile = width <= 900;

  const handleWindowresize = useCallback(() => {
    update({'target' : {'name': 'width', 'value':  window.innerWidth }});
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowresize);

    return () => {
      window.removeEventListener('resize', handleWindowresize);
    };
  }, [handleWindowresize]);


  return (
    <div className="app">
      {isMobile ?
      <div>
        <Header />
        <main className="app-main">
          <section className="app-top">
            <Preview feedback = {feedback} partySize = {party} emoji = {emoji} storage = {storage}/>
          </section>
          <section className = "app-bottom">
            <Form update = {update} feedback = {feedback} party = {party} emoji = {emoji} storage = {storage} />
          </section>
        </main>
      </div>
      :
      <div>
        <Header />
        <main className="app-main">
          <section className="app-left">
            <Form update = {update} feedback = {feedback} party = {party} emoji = {emoji} storage = {storage} />
          </section>
          <section className="app-right">
            <Preview feedback = {feedback} partySize = {party} emoji = {emoji} storage = {storage}/>
          </section>
        </main>
      </div>
    }
    </div>
  );
}

export default App;
