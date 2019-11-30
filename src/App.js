import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {
  const [{ feedback, party, emoji, storage }, setState] = 
    useState({ feedback: '', party: 2, emoji: 4, storage: ['😡', '🙁', '😐', '😊', '😍'] });

  const update = ({target: { name, value }}) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="app">
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
  );
}

export default App;
