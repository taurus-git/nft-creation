import React from 'react';
import Header from "../layouts/header/Header";
import Slider from "../components/Slider/Slider";
import Container from "../layouts/container/Container/Container";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Slider />
                </Container>
            </main>
        </>
    );
};

export default Home;
