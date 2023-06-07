import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import "./CarroselHome.css";





export default function Example(props) {
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle,

    })


    return (
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            {props.items !== undefined && <Carousel
                slides={props.items}
                goToSlide={state.goToSlide}
                offsetRadius={state.offsetRadius}
                animationConfig={state.config}
            />}
            <div
                style={{
                    margin: "0 auto",
                    marginTop: "2rem",
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <div >
                    <button className="botaodireito"
                        onClick={() => {
                            setState({ goToSlide: state.goToSlide - 1 });
                        }}
                    >
                        Left Arrow
                    </button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button
                        onClick={() => {
                            setState({ goToSlide: state.goToSlide + 1 });
                        }}
                    >
                        Right Arrow
                    </button>
                </div>
            </div>
        </div>
    );
}

