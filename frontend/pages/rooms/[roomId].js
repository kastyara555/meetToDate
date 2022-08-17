import MainContainer from "../../components/MainContainer";

const Room = ({ room }) => {
    return (
        <MainContainer>
            <h1>Room {room.title}</h1>
        </MainContainer>
    );
};

export async function getServerSideProps(context) {
    const responseData = await fetch(`https://jsonplaceholder.typicode.com/albums/${context.params.roomId}`);
    const unserializedData = await responseData.json();

    return {
        props: {
            room: unserializedData,
        },
    }
}

export default Room;
