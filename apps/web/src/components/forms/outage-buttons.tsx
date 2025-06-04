import { Button } from "@mantine/core";

interface Props {
  isSubmitting: boolean;
  getStatus: () => "DRAFT" | "APPROVED" | "REJECTED";
  setStatus: (status: "DRAFT" | "APPROVED" | "REJECTED") => void;
  triggerSubmit: () => void;
  // Only provided for creating new outages
  cancel?: () => void;
}

export default function OutageFormButtons({
  isSubmitting,
  triggerSubmit,
  getStatus,
  setStatus,
  cancel,
}: Props) {
  return (
    <>
      <Button
        loading={isSubmitting && getStatus() === "APPROVED"}
        onClick={() => {
          setStatus("APPROVED");
          triggerSubmit();
        }}
        color="green"
      >
        {cancel ? "Create and approve" : "Approve"}
      </Button>

      {!cancel && (
        <Button
          loading={isSubmitting && getStatus() === "REJECTED"}
          onClick={() => {
            setStatus("REJECTED");
            triggerSubmit();
          }}
          color="red"
          variant="light"
        >
          Reject
        </Button>
      )}

      {!cancel && (
        <Button
          loading={isSubmitting && getStatus() === "DRAFT"}
          onClick={() => {
            setStatus("DRAFT");
            triggerSubmit();
          }}
          color="orange"
          variant="light"
        >
          Revert to draft
        </Button>
      )}

      {cancel && (
        <Button onClick={cancel} color="blue" variant="light">
          Cancel
        </Button>
      )}
    </>
  );
}
