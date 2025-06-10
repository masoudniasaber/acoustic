'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export default function Home() {
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('wall');
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/v1/calculate/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ weight, type }),
    });

    const data = await response.json();
    setResult(data.screws);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🔩 Screw Calculator</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <b>Weight (kg):</b><br />
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              className={styles.input}
            />
          </label>

          <br /><br />

          <label>
            <b>Type:</b><br />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={styles.select}
            >
              <option value="wall">Wall</option>
              <option value="floor">Floor</option>
            </select>
          </label>

          <br /><br />

          <button type="submit" className={styles.button}>➤ Calculate</button>
        </form>

        {result && <div className={styles.result}>✅ {result}</div>}
      </div>
    </div>
  );
}
