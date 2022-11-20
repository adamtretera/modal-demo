import { Check, Modal } from "modules/ui";
import React from "react";

export function Modal1() {
  const footerButtons = [
    {
      title: "Button 1",
      icon: Check,
    },
  ];
  return (
    <Modal dialogTrigger={<button>Open</button>}>
      <Modal.Header title={"Title"} icon={Check} />
      <h2>Content</h2>
      <p>Lorem impsum...</p>
      <Modal.Footer
        description={"Description of modal"}
        buttons={footerButtons}
      />
    </Modal>
  );
}
