import React from 'react'

const WidgetTag = () => {
  const tags = ['alligator','sdad','adqwd', 'snake', 'lizard', 'c++', 'python', 'firebase', 'dsa','dbms' ,'c++', 'python', 'firebase', 'dsa','dbms'];
  return ( 
  
    <div className="widget-tags">
      <h3>Watched tags</h3>
      <div className="widget-tags-div">
        {tags.map((tag) =>(
          <p key={tag}>{tag}</p>
        ) )
        }
      </div>
    </div>
  
  )
}

export default WidgetTag