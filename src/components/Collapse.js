import React, { useState } from 'react';

function Collapse(props) {
  const [showContent, setShowContent] = useState(false);

  const showMore = () => {
    setShowContent(!showContent);
  }

  return (
    <div>
      <button className="btn btn-primary w-100" onClick={showMore}>
        {props.children.props.cardTitle}
      </button>
      {
        showContent ? (
          <div>
            {props.children}
          </div>
        ) : null
      }
    </div>
  );
}

export default Collapse;
