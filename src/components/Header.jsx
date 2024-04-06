import logo from '../assets/images/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center font-poppins pt-6">
      <img src={logo} alt="site logo" />
      <p className="text-neutral-500 text-lg font-normal mt-5 mb-2">Journalism Without Fear or Favour</p>
      <p className="text-neutral-500 text-xl font-medium">
        <span className="text-neutral-700">{moment().format('dddd,')}</span> {moment().format('MMMM D, YYYY')}
      </p>
    </header>
  );
};

export default Header;
