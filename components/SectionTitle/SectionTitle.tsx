// Components
import { Divider, Typography } from "@mui/material";

// Styles

// Hooks & Context

// Redux

// Types

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title = "" }: SectionTitleProps) => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: "30px",
        }}
      >
        {title}
      </Typography>
      <Divider />
    </>
  );
};

export default SectionTitle;
