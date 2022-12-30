import React from 'react'

//1h7m

function LeftPaneHomeScreen() {
  return (
    <div className="border-2 border-black h-screen bg-black flex justify-end">
        
        <div className="mx-auto flex flex-col items-center justify-center gap-3 text-center">\
            <img src="./astro.jpg"  width="100px" style={{borderRadius: "15px"}}/>
            <h3 className='font-semibold text-white'>Online IDE</h3>
            <h4 className='font-semibold text-white'>Practice Code Anywhere</h4>
            <button className='w-full p-4 bg-white shadow-lg rounded-full drop-shadow-2xl'>
                + Create New Playground
            </button>

        </div>
        
        </div>
  )
}

export default LeftPaneHomeScreen