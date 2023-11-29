"use client";

import { Button, Modal, Text } from "@glimpzio/ui";
import { useAnalytics } from "@glimpzio/hooks";
import { Trash } from "tabler-icons-react";
import { useState, useTransition } from "react";
import { deleteConnection } from "./actions";

interface CustomConnectionProps {
    id: string;
}

export function Delete(props: CustomConnectionProps): JSX.Element {
    const analytics = useAnalytics();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [_, startTransition] = useTransition();

    return (
        <>
            <Modal
                title={`Delete Contact`}
                showModal={showModal}
                setShowModal={(show) => {
                    setShowModal(show);
                }}
            >
                <Text type="warning">This action cannot be undone.</Text>
                <Text type="p">You are about to permanently delete this contact. Are you sure you want to do this?</Text>
                <Button type="submit" color="red" size="small" icon={() => <Trash />} onClick={() => startTransition(() => deleteConnection(props.id))}>
                    Yes, Delete This Contact
                </Button>
            </Modal>
            <Button type="submit" color="red" size="small" icon={() => <Trash />} onClick={() => setShowModal(true)}>
                Delete
            </Button>
        </>
    );
}