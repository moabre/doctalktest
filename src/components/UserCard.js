import UserAddress from "./UserAddress";

const UserCard = ({ user }) => {
  return user.map(({ id, name, email, address }) => (
    <div
      className="p-8 rounded-lg justify-between flex m-2 bg-white p-2 text-white container mx-auto text-black"
      key={id}
    >
      <div>
        <div className="text-indigo-500">{name}</div>
        <p>{email}</p>
      </div>
      <UserAddress
        suite={address.suite}
        street={address.street}
        city={address.city}
      />
    </div>
  ));
};

export default UserCard;
