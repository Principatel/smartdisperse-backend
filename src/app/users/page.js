import Link from "next/link";

async function Getuser(id) {
  let data = await fetch(`http://localhost:3000/api/users`);
  data = await data.json();
  return data;
}
export default async function page() {
  let userdatas = await Getuser();
  return (
    <div>
      <h1 className="text-3xl text-center">User List here</h1>
      <div>
        {userdatas.map((item) => {
          return (
            <li className="text-xl list-disc" key={item.name}>
              <button>
                <Link href={`/users/${item.id}`}>{item.id}</Link>
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
