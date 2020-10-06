import React, { useState } from "react";
import { obj } from "../data";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Drawer from "../Drawer/drawer";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useStyles } from "./style.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Class() {
  const classes = useStyles();
  const [drawer, showDrawer] = useState({});
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {  
    setValue(newValue);
    console.log("value"+value);
  };

  const displayDrawer = (student) => {
    showDrawer(student.student);
  };

  return (
    <div>
      <div className={classes.root}>
        {Object.entries(obj).map(([schoolClass, Sections]) => {
          return (
            <>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Class {schoolClass}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Tabs value={value} onChange={handleChange}>
                      {Object.entries(Sections).map(
                        ([sectionName, students]) => {
                          return <Tab label={`Section ${sectionName}`} />;
                        }
                      )}
                    </Tabs>

                    {Object.entries(Sections).map(
                      ([sectionName, students], index) => {
                        return (
                          <>
                            <TabPanel value={value} index={index}>
                              <div className={classes.root}>
                                {students.map((student) => {
                                  return (
                                    <>
                                      <Tooltip
                                        key={student.rollNumber}
                                        title={
                                          <React.Fragment>
                                            <Typography color="inherit">
                                              {"Name"} <b>{student.name}</b>
                                            </Typography>
                                            <Typography color="inherit">
                                              {"Age"} <b>{student.age}</b>
                                            </Typography>
                                            <Typography color="inherit">
                                              {"Gender"} <b>{student.gender}</b>
                                            </Typography>
                                            <Typography color="inherit">
                                              {"Sports"}{" "}
                                              <b>
                                                {student.sports.map(
                                                  (sport, i) => {
                                                    return sport;
                                                  }
                                                )}
                                              </b>
                                            </Typography>
                                          </React.Fragment>
                                        }
                                      >
                                        <Button
                                          display="none"
                                          variant="contained"
                                          onClick={() => {
                                            displayDrawer({ student });
                                          }}
                                        >
                                          {student.name}
                                        </Button>
                                      </Tooltip>
                                    </>
                                  );
                                })}
                              </div>
                            </TabPanel>
                          </>
                        );
                      }
                    )}
                  </div>
                </AccordionDetails>
              </Accordion>
            </>
          );
        })}
      </div>
      <Drawer student={drawer} />
    </div>
  );
}

export default Class;
