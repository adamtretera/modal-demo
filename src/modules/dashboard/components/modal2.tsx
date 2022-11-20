import { Check, Modal } from "modules/ui";

export function Modal2() {
  const headerButtons = [
    {
      title: "Button 1",
      icon: Check,
    },
    {
      title: "Button 2",
      icon: Check,
    },
  ];

  return (
    <Modal dialogTrigger={<button>Open second</button>}>
      <Modal.Header
        title={"Close"}
        icon={<Modal.Close>X</Modal.Close>}
        buttons={headerButtons}
      />
      <h2>Content</h2>
      <p>Lorem impsum...</p>
      <Modal.Footer description={"Description of modal"} />
    </Modal>
  );
}
