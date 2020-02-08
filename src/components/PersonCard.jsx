import React, { useState } from 'react';
import styled from "@emotion/styled";
import backgroundImageByDistrict from "../utils/backgroundImageByDistrict"

const personImageUrl = "https://images.unsplash.com/photo-1550831858-3c2581fed470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80";

const Card = styled('div')({
    display: 'flex',
    width: '700px',
    height: "375px",
    border: '1px solid #d4d4d5',
    boxShadow: '0 1px 3px 0 #d4d4d5',
    borderRadius: '3px',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 70%",
    margin:"3em 1em",
})

const LeftSide = styled('div')({
    display: 'flex',
    width: '50%',
    padding: '1em',
    flexDirection: 'column'
})

const RightSide = styled('div')({
    display: 'flex',
    width: '50%',
    marginTop: '275px',
    justifyContent: 'center',
})

const ImageWrapper = styled('div')({
    width: '300px',
    height: '300px'
})

const PersonImage = styled('img')({
    width: '300px',
    height: '300px',
    position: 'absolute',
    zIndex: '1'
})

const NameOverlay = styled('div')({
    position: 'absolute',
    height: '50px',
    width: '300px',
    zIndex: '100',
    display: 'flex',
    marginTop: '250px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(rgb(255,255,255,0), rgb(0,0,0))',
    color: 'white',
})
const stringByDistrict =(district) => {
    return district != 0 ? <span>District {district} - Crib District`</span>:
    <span>All Seattle</span>
}

const PersonCard = (props) => {
    return (
        <Card style={{backgroundImage : `url(${backgroundImageByDistrict(props.district)})`}}>
        {/* <Card> */}
            <LeftSide>
                <ImageWrapper>
                    <PersonImage src={personImageUrl} />
                    <NameOverlay>
                        <h3>
                            Baby Councilperson
                                </h3>
                    </NameOverlay>
                </ImageWrapper>
                <span style={{ fontSize: '10px', paddingTop: '10px' }}>
                    Baby stuff, more baby stuff, and even more babystuff
                </span>
                <span style={{ fontSize: '10px' }}>
                    1st term - sponsored 8 diapers
                </span>

            </LeftSide>
            <RightSide>
                {stringByDistrict(props.district)}
              </RightSide>
        </Card>
    )
}

export default PersonCard;