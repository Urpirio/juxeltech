import { Html,Head,Body,Img,Tailwind,Text,Container } from "@react-email/components";

export default function JuxelTechCode({CodeForVerify}) {
  return (
    <Html>
        <Head></Head>
        <Body style={{fontFamily: 'sans-serif'}} >
            <Tailwind>
                <Container className="rounded-2xl shadow-2xl" style={{border: '1px solid gray'}}>
                    <Container className="text-center" >
                        <Text className="text-blue-600 font-bold text-3xl">JX<span className="font-light text-black" >Tech</span></Text>
                    </Container>
                    <Container className="gap-5 text-center">
                        <Text className="text-2xl">Verification code</Text>
                        <Text className="text-3xl font-bold">{CodeForVerify}</Text>

                    </Container>
                </Container>
            </Tailwind>
        </Body>
    </Html>
  )
}
