export default function Ambience({ restaurant }) {
  const ambienceZero =
    restaurant?.ambience[0] === undefined ? "" : restaurant?.ambience[0];
  const ambienceOne =
    restaurant?.ambience[1] === undefined ? "" : restaurant?.ambience[1];
  if (ambienceZero || ambienceOne) {
    return <h2>{`${ambienceZero} ${ambienceOne}`}</h2>;
  } else {
    return null;
  }
}
