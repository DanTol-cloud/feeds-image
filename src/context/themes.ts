import { Theme } from "./types";

export const themes: { light: Theme; dark: Theme } = {
    light: {
        name: "light",
        backgroundColor: "#FFFFFF",
        items: "#add8e6",
        textColor: "#000000",
        formBg: "#d3d3d3",
    },
    dark: {
        name: "dark",
        backgroundColor: "#121212",
        items: "#2A2A2A",
        textColor: "#E0E0E0",
        formBg: "#3D3D3D"
    },
};