function Card({ todo }) {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <p>{todo}</p>
      </div>
    </div>
  );
}

export default Card;
