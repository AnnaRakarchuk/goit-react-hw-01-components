import profile from './jsonFiles/user.json';
import data from './jsonFiles/data.json';
import friends from './jsonFiles/friends.json'
import transactions from './jsonFiles/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
    <Profile
    username={profile.username}
    tag={profile.tag}
    location={profile.location}
    avatar={profile.avatar}
    followers={profile.stats.followers}
    views={profile.stats.views}
    likes={profile.stats.likes}
  />
   <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </div>
  );
};
