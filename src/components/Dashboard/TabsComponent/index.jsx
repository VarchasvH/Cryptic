/* eslint-disable react/prop-types */
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "../Grid";
import List from "../List";
import "./styles.css";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: "600",
    textTransform: "Capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#6772e5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList
          variant='fullWidth'
          onChange={handleChange}
          aria-label='lab API tabs example'
        >
          <Tab
            label='Grid'
            value='grid'
            sx={{ ...style, fontFamily: "Ubuntu, sans-serif" }}
          />
          <Tab
            label='List'
            value='list'
            sx={{ ...style, fontFamily: "Ubuntu, sans-serif" }}
          />
        </TabList>
        <TabPanel value='grid'>
          <div className='grid-flex'>
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value='list'>
          <table className='list-table'>
            {coins.map((coin, i) => {
              return <List coin={coin} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
