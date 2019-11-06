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
         <button className="button" onClick={this.showDropdownMenu}>Account Options</button>

          { this.state.displayMenu ? (
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/setting">Setting</Link></li>
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