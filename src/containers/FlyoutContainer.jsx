import React from "react";
import { JsonViewer } from "clcomponents";

export const FlyoutContainer = ({data}) => {

    return(
        <JsonViewer inputJSONData={data} isCopyEnabled={true} />
    )
};