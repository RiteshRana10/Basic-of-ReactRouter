import React,{component} from 'react';
import {NavLink} from 'react-router-dom';
const Header=()=>(
    <div>
       <h1> Soltrick</h1>
       {/* <Link to="/">Home</Link>
       <Link to="/create">Add</Link>
       <Link to="/edit">Edit</Link>
       <Link to="/help">Help</Link> */}

<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
       <NavLink to="/create" activeClassName="is-active">Add</NavLink>
       <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
       <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
);

export default Header;