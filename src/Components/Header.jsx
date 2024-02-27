import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar light bgColor='black'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#' className='text-light ms-1'>
        <img
          src='https://www.bing.com/th/id/OGC.15a701899149c2e72e812402ab56e9b5?pid=1.7&rurl=https%3a%2f%2fweblium.com%2fblog%2fwp-content%2fuploads%2f2017%2f09%2fcounter.gif&ehk=QNETZS93YwUXheK8livbdRGpo3Rkzhek5S0HzZ7yUsA%3d'
          height='30'
          alt=''
          loading='lazy'
        />
        Counter Application
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header