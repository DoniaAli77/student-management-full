// components/CourseForm.tsx
import React, { useState } from 'react';

interface CourseFormProps {
  initialName?: string;
  onSubmit: (name: string) => void;
}

export default function CourseForm () {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <div>
        <label>Course Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter course name"
          required
        />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>
        {name ? 'Update Course' : 'Add Course'}
      </button>
    </form>
  );
};

