export default function Button({ extraClasses, children, clickHandler }) {
  let defaultClasses = `font-bold p-3 rounded-lg mt-6 bg-blue-700 text-white cursor-pointer drop-shadow hover:bg-blue-500 transition-all ${extraClasses}`;

  return (
    <button className={defaultClasses} onClick={clickHandler}>
      {children}
    </button>
  );
}
