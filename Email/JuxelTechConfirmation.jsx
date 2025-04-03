import { Html,Head,Body,Img,Tailwind,Text,Container } from "@react-email/components";

export default function JuxelTechConfirmation({FullName}) {

  return (
    <Html>
        <Head></Head>
        <Body style={{fontFamily: 'sans-serif'}}>
            <Tailwind>
                <Container style={{border: '1px solid gray'}} className="p-5 rounded-2xl shadow-2xl">
                    <Container className="text-center" >
                        <Text className="text-blue-600 font-bold text-3xl">JX<span className="font-light text-black" >Tech</span></Text>
                    </Container>
                    <Container>
                        <Text className="text-xl font-bold">{FullName}</Text>
                        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla tempora blanditiis expedita iure amet autem. Recusandae deleniti voluptate illo, exercitationem, quisquam dolores rerum, cupiditate quibusdam fugiat quam natus tempora vel.</Text>
                    </Container>
                    <Container>
                        <Text className="font-semibold">Att: <span className="text-blue-600 font-light">JuxelTech</span></Text>
                    </Container>
                </Container>
            </Tailwind>
        </Body>
    </Html>
  )
};
