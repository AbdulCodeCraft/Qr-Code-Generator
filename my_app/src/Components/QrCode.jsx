import React from 'react'
import '../css/QrCode.css';

const QrCode = () => {
  return (
    <div className='App-Container'>
        <img src='https://placehold.co/150
'/>
      <div>
        <label htmlFor='dataInput' className='Input-label'>
            Data for QR code:
        </label>
        <input type='text' id='dataInput' placeholder='Enter data for QR code'/>
        <label htmlFor='sizeInput' className='Input-label'>
            Image size (e.g., 150)
        </label>
        <input type='text' id='sizeInput' placeholder='Enter image size'/>
        <button>Generate QR code</button>
        <button>Download QR code</button>
      </div>
    </div>
  )
}

export default QrCode
