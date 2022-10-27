import React from 'react';
import Header from "../layouts/header/Header";
import Slider from "../components/Slider/Slider";
import Container from "../layouts/container/Container/Container";
import Section from "../layouts/container/Section/Section";
import SectionTitle from "../components/SectionInfo/Title/SectionTitle";
import CardCategories from "../layouts/container/CardCategories/CardCategories";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Slider/>
                    <Section>
                        <SectionTitle title="Browse by Category" icon="#collection" />
                    </Section>
                    <CardCategories />
                </Container>
            </main>
        </>
    );
};

export default Home;
