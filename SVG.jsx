/*
*   <SVG/> React Component
*   Version: 1.3
*   Author: Abdullah Fatota
*   License: MIT

*   Limitations

    Due to the async nature of reading the SVG files during runtime, there is a noticeable lag between when the time the browser first loads the page and the subsequent separate loading (and coloring) of the SVG file.

*   Usage example:
        <SVG path="/sun-solid.svg" />

*   Mandatory Props:
        "path": (string) path to the svg file to be loaded

*   Optional Props:
        "set-fill": (boolean) by default set to `true`; sets fill="currentColor" attribute value pair on the DOM svg element
        "set-stroke": (boolean) by default set to `false`;  sets stroke="currentColor" attribute value pair on the DOM svg element
*/

import { useState, useEffect } from "react";

export const SVG = ({
    path,
    className,
    style,
    "set-fill": setFill,
    "set-stroke": setStroke,
}) => {
    /*
        returns an object from DOM element's attributes e.g. {xmlns: "http://www.w3.org/2000/svg" viewBox: "0 0 512 512"} 
        from the element e.g. <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> 
    */
    const getAttributes = (element) =>
        [...element.attributes].reduce((obj, { name: originalName, value }) => {
            const name = originalName === "class" ? "className" : originalName;
            obj[name] = value;
            return obj;
        }, {});

    const [state, setSVG] = useState({
        loaded: false,
        svgElement: undefined,
    });

    const readSVGFile = async () => {
        try {
            const promise = await fetch(path);
            const xml = await promise.text();
            return { completed: true, xml };
        } catch (error) {
            /* icon `path` is most probably invalid */
            console.error(error);
            return { completed: false };
        }
    };

    const parseSVG = async () => {
        const response = await readSVGFile();

        if (response.completed === false) return;

        const { xml } = response;

        const svgElement = new DOMParser()
            .parseFromString(xml, "image/svg+xml")
            .querySelector("svg");

        if (setFill !== false) svgElement.setAttribute("fill", "currentColor");
        if (setStroke === true)
            svgElement.setAttribute("stroke", "currentColor");

        setSVG((prevState) => ({
            ...prevState,
            loaded: true,
            svgElement,
        }));
    };

    useEffect(() => {
        parseSVG();
    }, []);

    return (
        <svg
            style={style}
            className={className}
            {...(state.loaded
                ? {
                      ...getAttributes(state.svgElement),
                      dangerouslySetInnerHTML: {
                          __html: state.svgElement.innerHTML,
                      },
                  }
                : {})}
        ></svg>
    );
};
