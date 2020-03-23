import React, { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import logo from '../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
export default function NavbarMovie(props) {

    const [keyword, setKeyword] = useState('')

    let onChange = (e) => {
        // console.log(event.target.value)
        setKeyword(e.target.value)
        props.onSearch(e.target.value)
    }

    return (
        <div className="w-100 ">
            <Navbar className="navbar-movie fixed-top" variant="dark">
                <Navbar.Brand className="ml-3" href="#home"><img style={{ height: '70px', width: '70px' }} src={logo} alt="" /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-light" href="#link" onClick={() => props.onFilterCategory('top_rated')}> <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} /> Top Rated</Nav.Link>
                    <Nav.Link className="text-light" href="#home" onClick={() => props.onFilterCategory('now_playing')}><FontAwesomeIcon icon={faPlay} style={{ color: 'yellow' }} /> Current Playing</Nav.Link>
                    <NavDropdown title="Sort Popularity" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" onClick={() => props.onSortByHighestPopularity()}> Highest Popularity</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" onClick={() => props.onSortByLowestPopularity()}>Lowest Popularity</NavDropdown.Item>
                       
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl onChange={onChange} value={keyword} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={() => props.onSearch(keyword)} variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
