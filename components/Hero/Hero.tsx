// Components
import { Button, Typography } from "@mui/material";
import Image from "next/image";

// Styles
import { HeroContainerStyled, TextContainerStyled } from "./HeroStyles";

// Hooks & Context
import { useRouter } from "next/router";

// Redux

// Types

const Hero = () => {
  const router = useRouter();
  return (
    <HeroContainerStyled>
      <TextContainerStyled>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          My Contacts!
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
          doloremque aliquid at soluta nemo veritatis. Dolores vero qui soluta
          atque?
        </Typography>
        <Button
          variant="contained"
          fullWidth={false}
          onClick={() => router.push("/contact")}
        >
          Go to my contacts!
        </Button>
      </TextContainerStyled>
      <Image
        src={"/home.png"}
        alt=""
        layout="responsive"
        width={480}
        height={480}
      />
    </HeroContainerStyled>
  );
};

export default Hero;
