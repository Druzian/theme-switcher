import "./styles.css"
import { useContext } from "react";
import ThemeContext from "../../contexts/themeContexts";

const Box = () => {
    const theme = useContext(ThemeContext);

    return <div className={`box ${theme}`}></div>;
};
export default Box;