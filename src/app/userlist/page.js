import Link from "next/link";

async function getuserlist() {
  let data = await fetch(`http://localhost:3000/api/userlist`);
  //   let data = await fetch(`http://localhost:3000/userlist`);
  data = await data.json();
  return data;
}

export default async function Home() {
  let userdata = await getuserlist();
  console.log(userdata);
  return (
    <main className=" text-white-700">
      <div>
        <h1 className="text-center text-2xl">User List here</h1>
        <div>
          {userdata.map((item) => {
            return (
              <li className="text-xl list-disc" key={item.name}>
                <Link href={`userlist/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </main>
  );
}
