import React, {useState} from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../image/logo.png'
export default function NavbarMovie(props) {

    const [keyword, setKeyword] = useState('')

    let onChange = (e) => {
        // console.log(event.target.value)
        setKeyword(e.target.value)
        props.onSearch(e.target.value)
    }

    return (
        <div>
            <Navbar style={{background: 'black'}} variant="dark">
                <Navbar.Brand className="ml-3" href="#home"><img style={{height: '70px', width:'70px'}} src={logo} alt=""/></Navbar.Brand>
                <Nav className="mr-auto">
                   
                </Nav>
                <Form inline>
                    <FormControl onChange={onChange} value={keyword} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={() => props.onSearch(keyword)} variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
