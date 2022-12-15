import React from 'react';
import {NewComp} from "./NewComp"

class App extends React.Component{
    state ={
        data: {},
        country:'',
    }


    render() {
            return (
     
                <div >
                   
                     <h2>hello</h2>
                     <h2>hello</h2>
                     <h2>hello</h2>
                     <div>
                     <h2>body</h2>
                     <h2>test</h2>
                     <h2>hello</h2>
                     </div>
                     <div>
                        <NewComp/>
                     </div>
                 </div>

                    
                
            )
    }
}
export default App;
