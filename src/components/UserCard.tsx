import Image from 'next/image';

interface UserCardProps {
  id?: string;
  login?: string;
  avatarUrl: string;
  name?: string;
}

const UserCard: React.FC<UserCardProps> = ({ id, login, avatarUrl }) => {
  return (
    <li
      className="flex w-full flex-col items-center text-center shadow"
      key={id}
    >
      <a href={`/user?login=${login}`}>
        <Image
          src={avatarUrl}
          width={300}
          height={240}
          alt={'GitInsight logo'}
        />
        <h3 className="my-4 text-2xl">{login}</h3>
      </a>
    </li>
  );
};

export default UserCard;
