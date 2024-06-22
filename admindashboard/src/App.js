import React from 'react';
import Sidebar from './Componets/Sidebar/sidebar';
import Main from './Componets/Main/main';

const App = () => {
  return (
    <div className='flex h-screen bg-white dark:bg-slate-900'>
<section className='W-[10%] sm:w-[15%]'>
  <Sidebar/>
</section>
<section className='flex flex-col w-[90%] sm:w-[85%] overflow-auto'>
<Main/>
</section>
    </div>
  );
}

export default App;
