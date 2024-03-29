// React
import { useContext } from "react";
import Typography from "@mui/material/Typography";
//context
import ideContext from "../ideContext";
// mui
import Button from "@mui/material/Button";

export default function Navigation() {
    const { openDirectory, directoryReady, serialReady, connectToSerialPort } = useContext(ideContext);

    return (
        <Typography component="div" sx={{ margin: "20pt" }}>
            <p> Please connect your microcontroller to this computer by a usb data cable before following the steps.</p>
            <ul>
                <li>
                    Step 0.
                    <Button
                        onClick={() => {
                            window.open(
                                "https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython",
                                "_blank"
                            );
                        }}
                    >
                        Install CircuitPython
                    </Button>
                    (Skip if you already did)
                </li>
                <li>
                    Step 1. <Button onClick={openDirectory}>Open CircuitPy Drive</Button>
                    {directoryReady ? "✅" : ""}
                </li>
                <li>
                    Step 2. <Button onClick={connectToSerialPort}>Connect to Serial Port</Button>
                    {serialReady ? "✅" : ""}
                </li>
                {serialReady && directoryReady ? (
                    <li>🎉 Setup complete! Open your file and let's start coding!</li>
                ) : (
                    ""
                )}
            </ul>
        </Typography>
    );
}
