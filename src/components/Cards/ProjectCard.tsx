import React, { useState } from "react";
import { Edit } from "@mui/icons-material";
import ArchiveIcon from "@mui/icons-material/Archive";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { dateFormatter } from "../../utils/dateFormatter";
import ConfirmationModal from "../Modal/ConfirmationModal";
import EditModal from "../Modal/EditModal";

type CardTypes = {
  projectsDeatils: any;
};

const ProjectCard: React.FC<CardTypes> = ({ projectsDeatils }) => {
  const [openIsComplete, setOpenIsComplete] = useState<boolean>(false);
  const [openIsArchive, setOpenIsArchive] = useState<boolean>(false);
  const [openIsEditModal, setOpenIsEditModal] = useState<boolean>(false);
  const [defaultData, setDefaultData] = useState<any>();

  const handleClose = () => {
    setOpenIsComplete(false);
  };

  const handleOpen = () => {
    setOpenIsComplete(true);
  };

  const handleIsArchiveClose = () => {
    setOpenIsArchive(false);
  };

  const handleIsArchiveOpen = () => {
    setOpenIsArchive(true);
  };

  const editclose = () => {
    setOpenIsEditModal(false);
  };

  const handleOpenEditModal = (projectsDeatils: any) => {
    setOpenIsEditModal(true);
    setDefaultData(projectsDeatils);
  };

  const handleComplete = () => {
    console.log("complete");
  };

  const handleArchive = () => {
    console.log("Archive");
  };

  return (
    <>
      <Card sx={styles.cardMian}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              {projectsDeatils?.name[0].toUpperCase()}
            </Avatar>
          }
          title={projectsDeatils?.name}
          subheader={dateFormatter(projectsDeatils?.startDate)}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent sx={styles.CardContent}>
          <Typography variant="body2" color="text.secondary">
            {projectsDeatils?.description}
          </Typography>

          <Typography sx={{ mt: 2, fontSize: "14px", fontWeight: "bold" }}>
            Github URL:
          </Typography>

          <a
            href={projectsDeatils?.githubRepoLink}
            style={{ fontSize: "12px", color: "blue" }}
          >
            {projectsDeatils?.githubRepoLink}
          </a>

          <Typography sx={{ mt: 2, fontSize: "14px", fontWeight: "bold" }}>
            Technology Used
          </Typography>
          <Typography sx={{ fontSize: "12px" }} color="text.secondary">
            {projectsDeatils?.techstack}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            sx={styles.iconStyle}
            aria-label="edit"
            onClick={handleOpenEditModal}
          >
            <Edit />
          </IconButton>
          <IconButton aria-label="share" onClick={handleOpen}>
            <CheckCircleOutlineIcon sx={styles.iconStyle} />
          </IconButton>
          <IconButton aria-label="share" onClick={handleIsArchiveOpen}>
            <ArchiveIcon sx={styles.iconStyle} />
          </IconButton>
        </CardActions>
      </Card>

      <ConfirmationModal
        open={openIsComplete}
        handleClose={handleClose}
        heading="Complete Project"
        message="Are you sure you want to complete this project?"
        handleAction={handleComplete}
      />

      <ConfirmationModal
        open={openIsArchive}
        handleClose={handleIsArchiveClose}
        heading="Archive Project"
        message="Are you sure you want to Archive this project?"
        handleAction={handleArchive}
      />

      <EditModal
        open={openIsEditModal}
        handleClose={editclose}
        setOpenIsEditModal={setOpenIsEditModal}
        defaultData={defaultData}
      />
    </>
  );
};

export default ProjectCard;

const styles = {
  cardMian: { maxWidth: 345, boxShadow: "0px 12px 24px #919EAB1F" },
  CardContent: {
    paddingBottom: "0px",
  },
  iconStyle: {
    color: "blue",
  },
};
