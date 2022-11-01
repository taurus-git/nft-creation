import React from 'react';
import Header from "../layouts/header/Header";
import Slider from "../components/Slider/Slider";
import Container from "../layouts/container/Container/Container";
import Section from "../layouts/container/Section/Section";
import SectionHeader from "../components/SectionInfo/Title/SectionHeader";
import CardCategories from "../layouts/container/CardCategories/CardCategories";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Slider/>
                    <Section>
                        <SectionHeader title="Browse by Category" icon="#collection"/>
                    </Section>
                    <CardCategories/>
                    <Section class="picked-collections">
                        <div className="picked-collections--title">
                            <SectionHeader title="Hand Picked Collections " icon="#collection"/>
                        </div>
                        <div className="picked-collections--link">
                            <a href="/#">
                                <SectionHeader title="Trending Collections" icon="#chevron" />
                            </a>
                        </div>
                    </Section>
                </Container>
            </main>
        </>
    );
};

export default Home;
