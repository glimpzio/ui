import { Text, Container } from "@glimpz-io/ui";

export default function Page(): JSX.Element {
    return (
        <Container direction="vertical" size="half">
            <Text type="title" alignment="centre">
                We're still <Text type="highlight">building</Text>. Care for a sneak <Text type="highlight">peek</Text>?
            </Text>
            <Text type="p" alignment="centre">
                Swipe left on swiping and quit overthinking your opening lines! Introducing <Text type="bold">Glimpz</Text>, your new best mate for all face-to-face interactions!
            </Text>
            <Text type="p" alignment="centre">
                Ever wondered if someone was <Text type="bold">single</Text> and been hesitatant to chat them up? Ever <Text type="bold">hit it off</Text> with someone at a party but forgot to get
                their <Text type="bold">number</Text>? <Text type="bold">Glimpz</Text> has got your back, streamlining all these social snags!
            </Text>
            <Text type="h3" alignment="centre">
                <Text type="bold">Join</Text> the wait-list to receive <Text type="bold">exclusive updates</Text> and the chance to gain <Text type="bold">early access</Text>!
            </Text>
        </Container>
    );
}
