/* eslint-disable react/self-closing-comp */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ProjectForm from "../Form/ProjectForm";

interface Props {
  open: boolean;
  handleClose: () => void;
  setOpenIsEditModal: (value: boolean) => void;
  defaultData: any;
}

const EditModal = ({
  open,
  handleClose,
  setOpenIsEditModal,
  defaultData,
}: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.mainStyle}>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
            Edit Project
          </Typography>
          <Box>
            <ProjectForm
              setOpenIsEditModal={setOpenIsEditModal}
              defaultData={defaultData}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;

const styles = {
  mainStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "30px",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    width: 800,
    height: "auto",
    px: 6,
    py: 4,
  },

  text: {
    fontSize: "24px",
    mt: 1,
    fontWeight: 500,
  },
};
