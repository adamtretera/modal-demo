import { Modal } from "modules/ui";

export function Modal1() {
  const buttons = [
    {
      title: "Button",
    },
    {
      title: "Button",
    },
    {
      title: "Button",
    },
    {
      title: "Button",
    },
  ];

  return (
    <Modal dialogTrigger={<button>Open</button>}>
      <Modal.Header
        title={"Close"}
        icon={<Modal.Close>X</Modal.Close>}
        buttons={buttons}
      />
      <h2>Content</h2>
      <p>Lorem impsum...</p>
      <Modal.Footer buttons={buttons} description={"Description of modal"} />
    </Modal>
  );
}
