export const Header = ({ name, image }: { name: string; image: string }) => {
  return (
    <div>
      <img src={image} alt="album poster" className="w-40 h-40 rounded" />
      <h1 className="text-white text-2xl font-semibold pt-3">{name}</h1>
    </div>
  );
};
