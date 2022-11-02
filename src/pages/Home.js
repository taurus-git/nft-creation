import React, { useEffect, useState } from 'react';
import Header from "../layouts/header/Header";
import Slider from "../components/Slider/Slider";
import Container from "../layouts/container/Container/Container";
import Section from "../layouts/container/Section/Section";
import SectionHeader from "../components/SectionInfo/Title/SectionHeader";
import CardCategories from "../layouts/container/CardCategories/CardCategories";
import CollectionWrapper from "../layouts/container/CollectionWrapper/CollectionWrapper";
import { apisFunctions } from "../services/apis/ApisFunctions";
import { getRandomInt } from "../services/Helpers/helpers";

const Home = () => {
    const [collections, setCollections] = useState( [] );
    const [singleCollection, setSingleCollection] = useState( [] );

    useEffect( () => {
        const loadData = async () => {
            const openseaCollections = await apisFunctions( 50 );
            const collections = openseaCollections.filter( collection => {
                if ( collection.banner_image_url !== null ) {
                    return collection.banner_image_url;
                }
            } );

            setCollections( collections );
            setSingleCollection( collections[getRandomInt( collections.length )] );
        };
        loadData();
    }, [] );

    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Slider collections={ collections }/>
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
                                <SectionHeader title="Trending Collections" icon="#chevron"/>
                            </a>
                        </div>
                    </Section>
                    <CollectionWrapper singleCollection={ singleCollection }/>
                </Container>
            </main>
        </>
    );
};

export default Home;
