import React from 'react';
import Navbar from './components/Navbar';
import Routees from './Routees';
import { useLocation } from 'react-router';
import { Toaster } from 'react-hot-toast';

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  // console.log(isSellerPath.pathname);


  return (
    <div>
      <div>
       {isSellerPath ? null : <Navbar />}
      </div>




      <Toaster/>
      <div className= {`${isSellerPath ? "" :"px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routees/>
      </div>
    </div>
  );
};

export default App;