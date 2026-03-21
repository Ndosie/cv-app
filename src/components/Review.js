function Review({ formData, prevStep }) {
  return (
    <>
      <button onClick={() => prevStep()}>Back</button>
      <button>Print</button>
    </>
  );
}

export default Review;
