import { useState } from 'react';
import './Styles.css';

function Home() {
  const [student, setStudent] = useState({
    name: '',
    department: '',
    yearOfStudy: '',
    certificate: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleFileChange = (e) => {
    setStudent({ ...student, certificate: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Details: ', student);
    alert('Form submitted successfully!');
    // You can now send student to a backend server, if you need.
  };

  return (
    <div className="Home">
      <h2>Student Portal</h2>
      <form onSubmit={handleSubmit}>
        {/* Student Name */}
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="name"     
            value={student.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Department */}
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={student.department}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Year of Study */}
        <div>
          <label>Year of Study:</label>
          <select
            name="yearOfStudy"
            value={student.yearOfStudy}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        {/* Certificate Upload */}
        <div>
          <label>Upload Certificate:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
