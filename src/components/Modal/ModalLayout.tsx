import Modal from "@mui/material/Modal";

interface Props {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactElement;
  width?: string;
  height?: string;
}

const style = {
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
  //   p: '70px 120px',
};

const ModalLayout = ({ open, handleClose, children, width, height }: Props) => (
  <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={style}
    >
      {children as React.ReactElement}
    </Modal>
  </div>
);

export default ModalLayout;
