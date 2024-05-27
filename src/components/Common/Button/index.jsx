import "./styles.css";

// eslint-disable-next-line react/prop-types
function Button({ text, onClick, outlined }) {
  return (
    <div className={outlined ? "outline-btn" : "btn"} onClick={() => onClick()}>
      {text}
    </div>
  );
}

export default Button;
