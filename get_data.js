const get_data = async () => {
  const promise = await fetch('/data.json');
  const json = await promise.json();
  return json;
}
export default get_data;