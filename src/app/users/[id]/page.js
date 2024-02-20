async function GetUser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data;
}

export default async function page(content) {
  console.log("id:", content.params.id);
  let userdatas = await GetUser(content.params.id);
  console.log("user detail", userdatas);
  return (
    <div>
      <h1 className="text-center text-3xl">User Detail</h1>
      <div className="text-white">Name: {userdatas.result[0].name}</div>
      <div className="text-white">ID: {userdatas.result[0].id}</div>
      <div className="text-white">
        Address: {userdatas.result[0].ethereum_address}
      </div>
    </div>
  );
}
