function Education() {
  return (
    <>
      <input type="text" name="school" placeholder="School Name" />
      <input type="text" name="title" placeholder="Title of study" />
      <input
        type="text"
        name="date"
        placeholder="Date of study"
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => {
          if (!e.target.value) {
            e.target.type = "text";
          }
        }}
      />
    </>
  );
}

export default Education;
