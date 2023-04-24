import React from 'react';

const Background = ( { children } ) =>
{
  return (

    <body className="bg-white dark:bg-indigo-400 transition-all">
    {children}
    </body>
  )
}

export default Background;
