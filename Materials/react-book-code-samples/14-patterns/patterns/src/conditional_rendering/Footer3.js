const Footer3 = ({data}) => {
  return data == null ? (
    <div>No Records</div>
  ) : (
    <div>{data.length} Records</div>
  );
}

export default Footer3;