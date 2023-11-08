import { Text, Container, Button, Input } from "@glimpz-io/ui";
import { redirect } from "next/navigation";
import { Mail } from "tabler-icons-react";

export default function Page(): JSX.Element {
    const formId = "list";
    const fieldName = "email";
    const mailIcon = () => <Mail />;

    // eslint-disable-next-line @typescript-eslint/require-await -- this is a server action
    async function action(formData: FormData) {
        "use server";

        const out = formData.get(fieldName);
        if (!out) return;

        redirect("/subscribed");
    }

    return (
        <Container direction="vertical" size="half">
            <Text type="title" alignment="centre">
                We&apos;re still <Text type="highlight">building</Text>... care for a sneak <Text type="highlight">peek</Text>?
            </Text>
            <Text type="p" alignment="centre">
                Swipe left on swiping and quit overthinking your opening lines! Introducing <Text type="bold">Glimpz</Text>, your new best mate for all face-to-face interactions!
            </Text>
            <Text type="p" alignment="centre">
                Ever wondered if someone was <Text type="bold">single</Text> and been hesitatant to chat them up? Ever <Text type="bold">hit it off</Text> with someone at a party but forgot to get
                their <Text type="bold">number</Text>? <Text type="bold">Glimpz</Text> has got your back, streamlining all these social snags!
            </Text>
            <Text type="h3" alignment="centre">
                <Text type="bold">Jump</Text> on our wait list! Bag <Text type="bold">exclusive updates</Text> and a shot at <Text type="bold">early access</Text>!
            </Text>
            <Input type="email" form={formId} name={fieldName} placeholder="awesomeuser@xyz.com" />
            <Button type="submit" form={formId} size="large" icon={mailIcon}>
                Join Wait List
            </Button>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises -- this is a server action  */}
            <form action={action} id={formId} />
        </Container>
    );
}
