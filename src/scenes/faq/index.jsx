import { Box, useTheme, Typography } from "@mui/material"
import Header from "../../components/header"
import { Accordion } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import { AccordionDetails } from "@mui/material"
import { ExpandMoreOutlined } from "@mui/icons-material"
import { tokens } from "../../theme"


export const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Question Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon= {<ExpandMoreOutlined />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An importan Question
                </Typography>
            </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Reiciendis aspernatur .
                        ipsam quae enim cupiditate, at excepturi 
                        similique officiis consectetur doloribus
                        eum possimus culpa nostrum! Nam voluptatum 
                        quam dolor doloremque ex?
                    </Typography>
                </AccordionDetails> 
        </Accordion>
        <Accordion defaultExpanded>
                <AccordionSummary expandIcon= {<ExpandMoreOutlined />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An importan Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Reiciendis aspernatur .
                        ipsam quae enim cupiditate, at excepturi 
                        similique officiis consectetur doloribus
                        eum possimus culpa nostrum! Nam voluptatum 
                        quam dolor doloremque ex?
                    </Typography>
                </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
                <AccordionSummary expandIcon= {<ExpandMoreOutlined />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An importan Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Reiciendis aspernatur .
                        ipsam quae enim cupiditate, at excepturi 
                        similique officiis consectetur doloribus
                        eum possimus culpa nostrum! Nam voluptatum 
                        quam dolor doloremque ex?
                    </Typography>
                </AccordionDetails>
        </Accordion>

        </Box>
    )}
