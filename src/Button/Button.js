import "./Button.css"

function Button({ label, onClick }) {
  return (
    <div className="button-container" onClick={onClick}>
      <p className="label">{label}</p>
    </div>
  );
}

export default Button;
