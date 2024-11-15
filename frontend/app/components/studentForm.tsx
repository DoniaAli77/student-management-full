// components/StudentForm.tsx
import React, { useState } from 'react';
///////////check it agin
interface StudentFormProps {
  initialName?: string;
  onSubmit: (name: string) => void;
}

export default function StudentForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
          required
        />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>
        {name ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
};

