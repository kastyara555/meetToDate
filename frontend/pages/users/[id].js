import { useRouter } from "next/router";

import MainContainer from "../../components/MainContainer";

const UserById = () => {
    const { query } = useRouter();

    return (
        <MainContainer>
            <h1>UserById {query.id}</h1>
        </MainContainer>
    );
};

export default UserById;
