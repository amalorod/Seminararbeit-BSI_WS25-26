import { useState } from "react";
import "./index.scss";

const UserAvatar = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
  };

  return (
    <div className="user-avatar">
      <input
        type="file"
        id="profileUpload"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      <img
        src={avatar}
        alt="Profilfoto"
        onClick={() => document.getElementById("profileUpload")?.click()}
        className="avatar-img"
      />
    </div>
  );
};

export default UserAvatar;
