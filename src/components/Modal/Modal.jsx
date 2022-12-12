export const Modal = ({ url, text }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={url} alt={text} />
      </div>
    </div>
  );
};