import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { StripToolConfig } from "../types";
import { TimeControls } from "./components/TimeControls/timeControls";
import { GraphOptions } from "./components/GraphOptions/graphOptions";


interface ControlsTabProps {
    graphOptions: StripToolConfig
  }
  
// On modify button press, load the other
export const ControlsTab = (props: ControlsTabProps): JSX.Element => {

    return (
        <Box sx={{width: "100%"}}>
            <Box sx={{width: "50%"}}>
              Time Controls
              <TimeControls graphOptions={props.graphOptions}/>
              <Button colorScheme="blue" variant="outline">Modify</Button>
            </Box>
            <Box sx={{width: "50%"}}>
              Graph Options
              <GraphOptions graphOptions={props.graphOptions}/>
            </Box>
        </Box>
    );
}