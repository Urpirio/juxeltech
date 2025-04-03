import { Html,Head,Body,Img,Tailwind,Text,Container } from "@react-email/components";

export default function JuxelTechDataForm({
    FullName,
    Email,
    Phonenumber,
    AboutProyect,
    Company
}) {
  return (
    <Html>
        <Head></Head>
        <Body style={{fontFamily: 'sans-serif'}}>
            <Tailwind>
                <Container className="rounded-2xl shadow-2xl p-5" style={{border: '1px solid gray'}}> 
                    <Container className="text-center" >
                        <Text className="text-blue-600 font-bold text-3xl">JX<span className="font-light text-black" >Tech</span></Text>
                    </Container>
                    <Container className="flex">
                        <Text className="font-bold text-[16px]">Nombre Completo: <span className="font-light">{FullName}</span> </Text>
                        
                    </Container>
                    <Container>
                        <Text className="font-bold text-[16px]">Email: <span className="font-light">{Email}</span></Text>
                    </Container>
                    <Container>
                        <Text className="font-bold text-[16px]">Numero Celular: <span className="font-light">{Phonenumber}</span></Text>
                    </Container>
                    <Container>
                        <Text className="font-bold text-[16px]">Compañia: <span className="font-light">{Company}</span></Text>
                    </Container>
                    <Container>
                        <Text className="font-bold text-[16px]">Acerca del proyecto:</Text>
                        <Text>{AboutProyect}</Text>
                    </Container>
                </Container>
            </Tailwind>
        </Body>
    </Html>
  )
}
