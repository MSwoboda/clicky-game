import React from "react";
import Image from 'react-bootstrap/Image'

function ImageCard(props) {
    return (
        <Image src={props.src} className="m-2 image-card" width={170} height={170} thumbnail />
    );
}

function ImageList(props) {

    const items = [];

    for (const [index, value] of props.elements.entries()) {
      items.push(<ImageCard  key={index} className="align-self-center" src={window.location.origin + '/assets/images/' + index + '.png'}/>)
    }

    return (
        <main className="row d-flex justify-content-center m-5">
            {items}
        </main>
    );
}

export default ImageList;


