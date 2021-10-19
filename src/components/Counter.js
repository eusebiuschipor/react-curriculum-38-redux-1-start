const Counter = () => {
  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      <div className="value"></div>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Increase by 5</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
