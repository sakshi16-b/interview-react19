import React from 'react'

const Profile = () => {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <h2><b>Passing JSX As  Props</b></h2>
            <ProfileCard
                name="Alice"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice, have a wonderful Day!</strong>
                    </div>
                }>
                <p>Hobbies:Reading,Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Bob"
                age={25}
                greeting={
                    <div>
                        <strong>Hi Bob, have a wonderful Day!</strong>
                    </div>
                }>
                <p>Hobbies:Reading,Cooking</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    )
}

export default Profile;



export const ProfileCard = (props) => {
    const { name, age, greeting } = props;
    console.log(props)
    return (
        <>
            <h2><b>Name:{name}</b></h2>

            <p>Age:{age}</p>

            <p>Greeting:{greeting}</p>
            <div>{props.children}</div>

        </>

    )
}