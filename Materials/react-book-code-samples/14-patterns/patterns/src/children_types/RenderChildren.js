const RenderChildren = ({words}) => {
  return (
    <div>
      {<h3>String type render</h3>}
      <h4>{[<b>This</b>, " is ", <i>Good</i>]}</h4>
      <h5>{[...words]}</h5>
    </div>
  );
}

export default RenderChildren;