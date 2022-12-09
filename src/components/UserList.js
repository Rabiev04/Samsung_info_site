import { userInfo } from "../mockData/anArray";

export default function UserList() {
  return (
    <div className="user_list_box">
      {userInfo.map((item) => {
        return (
          <div className="user_list_card" key={item.id}>
            <p>{item.name}</p>
            <p>{item.job}</p>
            <p>{item.maritalStatus}</p>
          </div>
        );
      })}
    </div>
  );
}
