import profile from './jsonFiles/user.json';
import data from './jsonFiles/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

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
    </div>
  );
};
