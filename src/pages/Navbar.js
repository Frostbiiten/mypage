function NavOption({text})
{
  return (
    <button> {text}</button>
  );
}

function Navbar() {
  const directories = [
    {text: "Text A", dir:"a"},
    {text: "Text B", dir:"b"},
    {text: "Text C", dir:"c"},
    {text: "Text D", dir:"d"},
  ]

  return (
    <div class="rounded-xl m-4 p-5 fixed backdrop-blur z-50 bg-gray-100/70 shadow-md">
      <div class="flex flex-row gap-10 pl-3 font-SpaceGrotesk text-slate-950">
        {directories.map((d) => (
          <NavOption text={d.text}/>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
