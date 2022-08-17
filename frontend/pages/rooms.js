import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Rooms = ({ rooms }) => {
    return (
        <MainContainer>
            <h1>Rooms</h1>
            {rooms.map(({ title, id }) => (
                <Link href={`/rooms/${id}`}>
                    <h3 key={id}>{title}</h3>
                </Link>
            ))}
        </MainContainer>
    );
};

export async function getStaticProps(context) {
    const responseData = await fetch('https://jsonplaceholder.typicode.com/albums');
    const unserializedData = await responseData.json();

    return {
        props: {
            rooms: unserializedData,
        },
    }
}

export default Rooms;
