import React, {useEffect, useState} from "react";
import TinderCard from "react-tinder-card";
import './DatingCards.css'
import database from "./firebase";

function DatingCards() {
    const [people, setPeople] = useState([]);
        // {
        //     name: 'steve jobs',
        //     url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        // },
        // {
        //     name: 'mark zuckerberg',
        //     url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'
        // }
    // ])

    useEffect(() => {
        const unsubsribe = database
            .collection('people')
            .onSnapshot((snapshot) =>
              setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            unsubsribe();
        }
    }, []);

    return (
        <div>
            {/*<h1>DatingCards</h1>*/}
                <div className={"datingCards__cardContainer"}>
                    {people.map((person) => (
                        <TinderCard
                            className={"swipe"}
                            key={person.name}
                            preventSwipe={['up', 'down']}
                        >
                            <div style={{ backgroundImage: `url(${person.url})` }} className={"card"}>
                            <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>
        </div>
    );
}

export default DatingCards;