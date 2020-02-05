import React, { useState }                       from 'react';
import styled from "@emotion/styled";

const mapImageUrl = "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";
const personImageUrl = "https://images.unsplash.com/photo-1550831858-3c2581fed470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80";

const Card = styled('div')({
    display:'flex',
    width: '30vw',
    height:"300px",
    border: '1px solid #d4d4d5',
    boxShadow: '0 1px 3px 0 #d4d4d5',
    borderRadius: '3px',
    backgroundImage:`url(${mapImageUrl})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"100% 70%"
})

const LeftSide = styled('div')({
    display:'flex',
    width:'50%',
    justifyContent:'center',
    padding:'1em',
    flexDirection:'column'
})

const RightSide = styled('div')({
    display:'flex',
    width:'50%',    
    marginTop:'220px',
    justifyContent:'center',
})

const ImageWrapper = styled('div')({
    width:'200px',
    height:'200px'
})

const PersonImage = styled('img')({
    width:'200px',
    height:'200px',
    position: 'absolute',
    zIndex:'1'
})

const NameOverlay = styled('div')({
    position:'absolute',
    height:'50px',
    width:'200px',
    zIndex:'100',
    display:'flex',
    marginTop:'150px',
    justifyContent:'center',
    alignItems:'center',
    backgroundImage: 'linear-gradient(rgb(255,255,255,0), rgb(0,0,0))',
    color:'white',
})

const InDevPersonCard = () => {
  return (
      <Card>
              <LeftSide>
                  <ImageWrapper>
                    <PersonImage src={personImageUrl}/>
                    <NameOverlay>
                            <h3>
                            Baby Councilperson
                                </h3>
                    </NameOverlay>
                  </ImageWrapper>
                  <span style={{fontSize:'10px',paddingTop:'10px'}}>
                    Baby stuff, more baby stuff, and even more babystuff
                </span>
                <span style={{fontSize:'10px'}}>
                    1st term - sponsored 8 diapers
                </span>
                
              </LeftSide>
              <RightSide>
                District 0 - Crib District
              </RightSide>
        </Card>
  )
}

export default InDevPersonCard;