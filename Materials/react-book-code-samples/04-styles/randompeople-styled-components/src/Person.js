import { Person, PersonImage, PersonName, PersonLocation } from './Person.styles'

function PersonComponent ({person}) {
    return (
        <Person gender={person.gender}>
            <PersonImage alt={person.name} src={person.picture.medium}/>
            <PersonName>
                {person.name.title} {person.name.first}
            </PersonName>
            <PersonLocation>
                {person.location.city} <br /> {person.location.state}
            </PersonLocation>
        </Person>          
    );
}

export default PersonComponent;