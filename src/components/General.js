import "../styles/General.css";

function General() {
  return (
    <div className="general">
      <input type="text" name="first_name" placeholder="First Name" />
      <input type="text" name="last_name" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="phone" name="phone" placeholder="Phone Number" />
    </div>
  );
}

export default General;
