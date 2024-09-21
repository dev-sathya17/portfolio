import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { professionalSummary } from "../../data/professionalSummary";
import "./ProfessionalSummary.css";

const ProfessionalSummary = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <h1 className="title">professional Summary</h1>
      <Box
        className="vertical-tabs-container"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={selectedTab}
          onChange={handleTabChange}
          className="tabs"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "30%",
            marginBottom: { xs: 2, md: 0 },
            justifyContent: "flex-end",
            "& .MuiTab-root": {
              color: "var(--white)",
              "&.Mui-selected": {
                color: "var(--accent)",
                backgroundColor: "var(--light)",
                borderRight: "2px solid var(--accent)",
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--accent)",
            },
          }}
          aria-label="Vertical Professional Summary Tabs"
        >
          {professionalSummary.map((item, index) => (
            <Tab key={index} label={item.title} className="tab" />
          ))}
        </Tabs>

        <Box
          className="tab-content"
          sx={{
            padding: 3,
          }}
        >
          <div>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "var(--accent)",
              }}
            >
              {professionalSummary[selectedTab].title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {professionalSummary[selectedTab].duration}
            </Typography>
          </div>
          <List>
            {professionalSummary[selectedTab].highlights.map(
              (highlight, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={highlight}
                    sx={{
                      textAlign: "justify",
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default ProfessionalSummary;
