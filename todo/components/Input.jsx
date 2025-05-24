function Input() {
  return (
    <div className="mb-5 flex justify-center items-center">
      <input
        type="text"
        placeholder="write a todo..."
        className="input input-primary rounded-r-none"
      />
      <button className="btn bg-blue-600 text-black border-[#005fd8] rounded-l-none hover:text-white">
        ADD
      </button>
    </div>
  );
}

export default Input;
