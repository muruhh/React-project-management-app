export default function Button({ classes, children }, ...props) {
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
