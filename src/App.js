import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecoundaryButton } from "./components/atoms/button/SecoundaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "じゃけえ",
  image: "https://kobeans-blog.com/site/img/kob.jpg",
  email: "aaa@gmail.com",
  phone: "000-9999-8888",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecoundaryButton>検索</SecoundaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
