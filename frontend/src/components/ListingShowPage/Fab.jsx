const Fab = props => {
    return (
      <div className={props.hidden ? 'fab is-hidden' : 'fab'} onClick={props.onClick}>
        <span aria-label="add" role="img" className="fab-symbol"><i className="fa-regular fa-pen-to-square"></i></span>
      </div>
    );
  };
  
  export default Fab;