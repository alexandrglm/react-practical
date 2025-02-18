import "./Dialog.css";

const CommonDialog = ({ dialogClass, content, ...props }) => {
  return  <div className={`dialog ${dialogClass}`} {...props} >
      {content}
    </div>;
}

export default CommonDialog;