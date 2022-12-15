import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from "./api";
import styles from './App.module.css';
import coronaImage from './images/image.png';
import Particles from "react-particles-js";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";


class App extends React.Component{
    state ={
        data: {},
        country:'',
    }


    render() {
            return (
     
                <div >
                   
                     <h2>hello</h2>
                 </div>

                    
                
            )
    }
}
export default App;
