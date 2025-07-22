import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-6 py-10 mt-20 backdrop-blur-md shadow-inner rounded-t-3xl">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

    {/* Left: Logo + Description */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-bold fancy">Sudan Redefined</h1>
      <p className="text-gray-400 mt-2 max-w-xs text-sm">
        A digital protest to reclaim the true face of Sudan — rich in history, culture, and power.
      </p>
    </div>

    {/* Center: Navigation Links */}
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
      <a href="/" className="hover:text-white transition">Home</a>
      <a href="#culture" className="hover:text-white transition">Culture</a>
      <a href="#icons" className="hover:text-white transition">Icons</a>
      <a href="#identity" className="hover:text-white transition">Identity</a>
      <a href="#message" className="hover:text-white transition">Message</a>
    </div>

    {/* Right: Social Icons */}
    <div className="flex gap-4 text-gray-300">
      <a href="https://x.com/sudan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 4.4a8.2 8.2 0 0 1-2.3.6A4.1 4.1 0 0 0 21.4 3a8.3 8.3 0 0 1-2.6 1A4.1 4.1 0 0 0 11.5 8a11.7 11.7 0 0 1-8.5-4.3A4 4 0 0 0 4 9.1a4.1 4.1 0 0 1-1.8-.5v.1a4.1 4.1 0 0 0 3.3 4A4.1 4.1 0 0 1 3 12v.1a4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 17a11.7 11.7 0 0 0 6 1.8"/></svg>
      </a>
      <a href="https://instagram.com/sudan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.5.2.9.5 1.3.9s.7.8.9 1.3c.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.5-.5.9-.9 1.3s-.8.7-1.3.9c-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4a4.2 4.2 0 0 1-1.3-.9 4.2 4.2 0 0 1-.9-1.3c-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.5.5-.9.9-1.3s.8-.7 1.3-.9c.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 0.1 5.7 0.2 4.7 0.3 3.9 0.6c-.9.3-1.7.7-2.4 1.4S.9 3.9.6 4.8C.3 5.6.2 6.6.1 7.9 0 9.2 0 9.6 0 12c0 2.4 0 2.8.1 4.1.1 1.3.2 2.3.5 3.1.3.9.7 1.7 1.4 2.4s1.5 1.1 2.4 1.4c.8.3 1.8.4 3.1.5 1.3.1 1.7.1 4.1.1s2.8 0 4.1-.1c1.3-.1 2.3-.2 3.1-.5.9-.3 1.7-.7 2.4-1.4s1.1-1.5 1.4-2.4c.3-.8.4-1.8.5-3.1.1-1.3.1-1.7.1-4.1s0-2.8-.1-4.1c-.1-1.3-.2-2.3-.5-3.1-.3-.9-.7-1.7-1.4-2.4s-1.5-1.1-2.4-1.4c-.8-.3-1.8-.4-3.1-.5C14.8 0 14.4 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"/></svg>
      </a>
      <a href="https://youtube.com/sudan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M10 15l5.2-3-5.2-3v6zm12-3c0-2-.2-3.3-.6-4.4-.3-.9-.9-1.6-1.7-2.1C18.5 5 17 5 14.5 5H9.5C7 5 5.5 5 4.3 5.5c-.8.4-1.4 1.2-1.7 2.1C2.2 8.7 2 10 2 12s.2 3.3.6 4.4c.3.9.9 1.6 1.7 2.1 1.2.5 2.7.5 5.2.5h5c2.5 0 4 0 5.2-.5.8-.4 1.4-1.2 1.7-2.1.4-1.1.6-2.4.6-4.4z"/></svg>
      </a>
    </div>

  </div>

  {/* Copyright */}
  <div className="text-center text-gray-500 text-xs mt-6 border-t border-gray-700 pt-4">
    © 2025 Sudan Redefined. Built by <a className='text-blue-500' href='/' target='__blank'>Shaheen Amjed.</a>
  </div>
</footer>

  )
}

export default Footer