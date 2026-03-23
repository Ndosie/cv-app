function General({ formData, nextStep, handleChange }) {
  return (
    <div className="general">
      <h2>General Details</h2>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number 255000000000"
        required
      />
      <button onClick={() => nextStep()}>Next</button>
    </div>
  );
}

export default General;
