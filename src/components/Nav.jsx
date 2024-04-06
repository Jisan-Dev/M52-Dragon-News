import user from '../assets/images/user.png';
import { Button } from './ui/button';

const Nav = () => {
  return (
    <nav className="flex items-center mt-5">
      <div className="flex-grow">
        <ul className="flex items-center justify-center gap-6 text-neutral-500 text-lg font-normal">
          <li>Home</li>
          <li>About</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <img src={user} className="w-10" alt="" />
        <Button className="bg-stone-900 hover:bg-stone-800 px-8 text-base">Login</Button>
      </div>
    </nav>
  );
};

export default Nav;
