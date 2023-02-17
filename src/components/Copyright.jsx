import logo from '../../public/images/logo.png';

function Copyright() {
  return (
    <div className="bg-[#000000]  text-[#fff] p-5 pb-14">
      <img className='bg-[#fff] rounded-3xl border-white border mb-5 -ml-1' src={logo} alt="oficial logo" />
      <h2 className='text-xl font-semibold'>© Copyright 2023</h2>
      <p>Abstract Studio Design, Inc.</p>
      <p>All rights reserved</p>
    </div>
  );
}

export default Copyright;
