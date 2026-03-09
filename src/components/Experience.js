function Experience() {
  return (
    <>
      <input type="text" name="company" placeholder="Company Name" />
      <input type="text" name="title" placeholder="Position Title" />
      <textarea
        name="responsibilities"
        placeholder="Main Responsibilities"
        rows={15}
      ></textarea>
      <input
        type="text"
        name="from_date"
        placeholder="From Date"
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => {
          if (!e.target.value) {
            e.target.type = "text";
          }
        }}
      />
      <input
        type="text"
        name="to_date"
        placeholder="To date"
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

export default Experience;
