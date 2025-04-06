import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { professionalSummary } from "../../data/professionalSummary";
import "./ProfessionalSummary.css";

const ProfessionalSummary = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <h1
        className="title"
        id="professional-summary"
        name="professional-summary"
      >
        Work Experience
      </h1>
      <Box
        className="vertical-tabs-container"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        <Tabs
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="scrollable"
          value={selectedTab}
          onChange={handleTabChange}
          className="tabs"
          sx={{
            borderRight: isMobile ? "none" : 1,
            borderBottom: isMobile ? 1 : "none",
            borderColor: "divider",
            width: { xs: "100%", md: "30%" },
            marginBottom: { xs: 2, md: 0 },
            justifyContent: { md: "flex-end" },
            "& .MuiTab-root": {
              color: "var(--white)",
              "&.Mui-selected": {
                color: "var(--accent)",
                backgroundColor: "var(--light)",
                borderRight: { md: "2px solid var(--accent)" },
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--accent)",
            },
          }}
          aria-label="Professional Summary Tabs"
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
