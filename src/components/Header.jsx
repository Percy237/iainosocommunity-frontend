const Header = () => {
  return (
    <header className="flex justify-between text-orange-600 p-5">
      <h1 className="text-xl">Noso</h1>
      <div>
        <ul className="flex gap-x-4 hover:cursor-pointer">
          <li>Home</li>
          <li>More</li>

          <li>Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
