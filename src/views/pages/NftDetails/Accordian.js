import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "aut0",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: "0",
    marginBottom: -1,
    backgroundColor: "#1a1919",
    color: "#ececec",
    borderBottom: "1px solid rgb(229, 232, 235)",
    minHeight: 46,
    "&$expanded": {
      minHeight: 46,
      borderBottom: "1px solid rgb(229, 232, 235)",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: "rgb(251, 253, 255)",
  },
}))(MuiAccordionDetails);

export default function Accordian({ title, children }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1d-content"
        >
          <Typography variant="h4" className="accordianText">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bgCardcolor" style={{ display: "block" }}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
