import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col text-center text-white p-10 gap-10 bg-rose-600' id="contact">
        <h1 className="text-2xl font-bold">CONTACT</h1>
        <p className="font-bold">Mobile || +447831302489 </p>
        <div>
        <button class="btn-primary bg-slate-100 pl-5 pr-5 text-black">Send Email</button>
        </div>
    </div>
  )
}

export default Contact;