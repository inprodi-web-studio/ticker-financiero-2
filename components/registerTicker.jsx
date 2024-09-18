import React from "react";
import registerComponent from "@plasmicapp/host/registerComponent";
import { ReactTicker } from "@guna81/react-ticker";

const stockItem = (item) => {
    const percent = Number( item.percent );

    return (
        <div
            style={{
                display : "flex",
                gap : "20px",
                alignItems : "center",
                marginRight : "100px"
            }}
        >
            <img src={ item.image } alt={ item.symbol } height={ 60 } style={{ borderRadius : "6px" }} />

            <div>
                <p style={{ color : "white", fontWeight : 700, fontSize : "24px", whiteSpace : "nowrap" }}>{ item.name }</p>

                <div style={{ display : "flex", gap : "20px" }}>
                    <p style={{ color : "white", fontSize : "24px", fontWeight : 500 }}>{ item.price ?? "-"}</p>

                    <p style={{ color : percent < 0 ? "red" : "green", fontSize : "24px", fontWeight : 500 }}>{ item.percent ?? "-" }%</p>
                </div>
            </div>
        </div>
    );
};

export const Ticker = ({
    ...props
}) => {
    return (
        <ReactTicker
            component={ stockItem }
            tickerStyle={{
                width: "100%",
                height: "72px",
            }}
            {...props}
        />
    );
};

export const tickerMeta = {
    name: "Ticker",
    displayName: "Ticker",
    props: {
        data : {
            type : "array",
            defaultValue : [],
        },
        speed : {
            type : "number",
            defaultValue : 40,
        },
        delay : {
            type : "number",
            defaultValue : 0,
        },
    },
    importPath: "./components/registerTicker",
    importName: "Ticker",
};

export function registerTicker(
    loader,
    customTickerMeta,
) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Ticker, customTickerMeta ?? tickerMeta);
};