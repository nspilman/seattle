import React from "react";
import { Container } from "semantic-ui-react";
import styled from "@emotion/styled";
import PersonCard from '../components/PersonCard';

const districts = []
for(let i = 0; i < 8; i++){
    districts.push(i)
}

const People = () => {
    return (
        <section>
            {districts.map(
                district => {
                    return <PersonCard district={district}/>
                }
            )}
        </section>
    );
}

export default People;
