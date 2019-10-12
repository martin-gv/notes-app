import React from "react";

import Button from "../../../Shared/Button";

function EditTagModalCloseButton({ close }) {
  return (
    <div style={{ textAlign: "right", marginTop: 15 }}>
      <Button onClick={close}>Close</Button>
    </div>
  );
}

export default EditTagModalCloseButton;
