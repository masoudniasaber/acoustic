// ✅ Required for Client-Side Rendering in Next.js App Router
'use client';

import { useState } from 'react';

// ✅ Functional React Component
export default function Home() {
  // ✅ State for first number input
  const [num1, setNum1] = useState('');

  // ✅ State for second number input
  const [num2, setNum2] = useState('');

  // ✅ State for result (nullable number)
  const [result, setResult] = useState<number | null>(null);

  // ✅ Handles form submission
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // ❌ Prevents default page reload on form submit

    // ✅ Converts both string inputs to numbers and adds them
    const sum = Number(num1) + Number(num2);

    // ✅ Updates the result state
    setResult(sum);
  };

  return (
    <main style={{ padding: '20px' }}>
      <h1>Add Two Numbers</h1>

      {/* ✅ Form to input and calculate sum */}
      <form onSubmit={handleAdd}>
        {/* Input for first number */}
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)} // updates num1 state
        />

        {/* Input for second number */}
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)} // updates num2 state
        />

        {/* Submit button */}
        <button type="submit">Add</button>
      </form>

      {/* ✅ Only show result if not null */}
      {result !== null && <p>Result: {result}</p>}
    </main>
  );
}
