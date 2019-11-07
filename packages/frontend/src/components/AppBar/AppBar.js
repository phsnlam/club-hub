import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './AppBar.module.css'
import { Link } from 'react-router-dom'
import { SearchBar } from '@clubhub/components'


const AppBar = () => {
  return (
    <div className = "navBar">
      <div1><SearchBar/></div1>
      <div2><Dropdown/></div2>
    </div>
  )
}


class Dropdown extends Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown">
          {/* To get this to work with a profile picture, pull link from database
          and replace the title "Account Options" */}
          <button className="button" onClick={this.showDropdownMenu}>
            Account Options
          </button>

          { this.state.displayMenu ? (
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/login"><li>Login</li></a>
            <a href="/register"><li>Register</li></a>
            <a href="/setting"><li>Setting</li></a>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default AppBar