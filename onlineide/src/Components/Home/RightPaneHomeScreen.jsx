import React from 'react'
import PlaygroundCard from './PlaygroundCard'

function RightPaneHomeScreen() {
  return (
    <div>
        <div>
            <h3>My Playground</h3>
            <h4>+ New Folder</h4>
        </div>
        <hr/>
        <div>
            <div className="left">
                 <img></img>
                <h4> My Folder</h4>
            </div>

            <div className="right">
                 <img></img>
                 <img></img>
                <h5>+ New Playground</h5>
            </div>
           

           
        </div>
        <hr/>

        <PlaygroundCard />
        <PlaygroundCard />
        <PlaygroundCard />
        <PlaygroundCard />
    </div>
  )
}

export default RightPaneHomeScreen