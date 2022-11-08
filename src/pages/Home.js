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
import { getSingleCollection } from "../services/apis/nftImages";

const Home = () => {
    const [collections, setCollections] = useState( [] );
    const [singleCollection0, setSingleCollection0] = useState( [] );
    const [singleCollection1, setSingleCollection1] = useState( [] );
    const [socialTag, setSocialTag] = useState( [] );

    const [nftImages0, setNftImages0] = useState( null );
    const [nftImages1, setNftImages1] = useState( null );

    useEffect( () => {
        const loadData = async () => {
            const openseaCollections = await apisFunctions( 50 );
            const collections = openseaCollections.filter( collection => {
                if ( collection.banner_image_url !== null ) {
                    return collection.banner_image_url;
                }
            } );

            setCollections( collections );
            setSingleCollection0( collections[getRandomInt( collections.length )] );
            setSingleCollection1( collections[getRandomInt( collections.length )] );
        };
        loadData();
    }, [] );

    useEffect( () => {
        const getNftImages = async term => {
            const images0 = await getSingleCollection( term[0], 2 );
            const images1 = await getSingleCollection( term[1] );
            setNftImages0( images0.data.results );
            setNftImages1( images1.data.results );
        }

        getNftImages( ["Arts", "Virtual Worlds"] );
    }, [] );

    useEffect( () => {
        if ( !singleCollection0.slug ) return;
        if ( !singleCollection1.slug ) return;

        setSocialTag( singleCollection0.slug.toUpperCase() );
        setSocialTag( singleCollection1.slug.toUpperCase() );
    }, [singleCollection0.slug, singleCollection1.slug] );

    if ( !nftImages0 ) return null;
    if ( !nftImages1 ) return null;

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
                    <CollectionWrapper socialTag={ socialTag } nft={ nftImages0 }
                                       singleCollection={ singleCollection0 }/>
                    <CollectionWrapper class="promo" socialTag={ socialTag } nft={ nftImages1 }
                                       singleCollection={ singleCollection1 }/>
                </Container>
            </main>
        </>
    );
};

export default Home;
