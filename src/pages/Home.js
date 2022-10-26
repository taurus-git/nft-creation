import React from 'react';
import Header from "../layouts/header/Header";
import Slider from "../components/Slider/Slider";
import Container from "../layouts/container/Container/Container";
import SectionInfo from "../layouts/container/SectionInfo/SectionInfo";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Slider/>
                    <SectionInfo>
                        <SectionTitle title="Browse by Category" icon="#collection" />
                    </SectionInfo>
                </Container>
            </main>
        </>
    );
};

export default Home;
