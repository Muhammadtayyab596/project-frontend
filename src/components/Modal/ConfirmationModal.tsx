/* eslint-disable react/self-closing-comp */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import SubmitButton from "../Button/SubmitButton";

interface Props {
  open: boolean;
  heading: string;
  message: string;
  handleClose: () => void;
  handleAction?: () => void;
}

const ConfirmationModal = ({
  open,
  heading,
  message,
  handleClose,
  handleAction,
}: Readonly<Props>) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.mainStyle}>
          <ReportGmailerrorredIcon sx={{ fontSize: 100 }} />
          <div className="hl" />
          <Typography sx={styles.text}>{heading}</Typography>
          <Typography
            sx={styles.desc}
            dangerouslySetInnerHTML={{ __html: message }}
          ></Typography>
          <Box sx={styles.btnBox}>
            <SubmitButton
              label="Yes"
              type="button"
              sx={styles.btnStyleYes}
              onClick={handleAction}
            />
            <SubmitButton
              label="Cancel"
              type="button"
              sx={styles.btnStyle}
              onClick={handleClose}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;

const styles = {
  mainStyle: {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    borderRadius: "30px",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    width: 600,
    height: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyleYes: {
    py: 1,
    px: 2,
    borderRadius: "5px",
    fontSize: "14px",
    background: "blue",
    color: "#fff",
    width: "170px",
  },
  btnStyle: {
    py: 1,
    px: 2,
    borderRadius: "5px",
    fontSize: "14px",
    background: "red",
    color: "#fff",
    width: "170px",
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  desc: {
    mt: 1,
    mb: 3,
    color: "#595969",
    fontSize: "18px",
    whiteSpace: "pre-line",
  },
  text: {
    fontSize: "24px",
    mt: 1,
    fontWeight: 500,
  },
};
