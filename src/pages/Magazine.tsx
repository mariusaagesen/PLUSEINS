const pages = [
  { num: 1, label: 'Cover' },
  { num: 2, label: 'Page 2' },
  { num: 3, label: 'Page 3' },
  { num: 4, label: 'Page 4' },
  { num: 5, label: 'Page 5' },
  { num: 6, label: 'Page 6' },
  { num: 7, label: 'Page 7' },
  { num: 8, label: 'Page 8' },
  { num: 9, label: 'Page 9' },
  { num: 10, label: 'Page 10' },
  { num: 11, label: 'Back page' },
];

export default function Magazine() {
  return (
    <div className="bg-stone-100 min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col gap-2">
        {pages.map(({ num, label }) => (
          <img
            key={num}
            src={`/magazine-pages/${num}.png`}
            alt={label}
            className="w-full h-auto block shadow-md"
            loading={num === 1 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
