import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Accordion = withStyles({
  root: {
    background: "#121212",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    background: "#121212",
    color: "white",
    borderBottom: "1px solid #272727",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
      color: "white",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function FaqData({ data, index }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        onChange={handleChange("panel1")}
        defaultExpanded={index == 0 ? true : false}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          expanded={expanded === "panel1"}
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
        >
          <Typography variant="h6">{data.head}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "#dce0e6" }}>{data.summary}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
