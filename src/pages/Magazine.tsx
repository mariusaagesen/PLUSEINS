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
    <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: '#f5f0eb' }}>
      <div className="max-w-3xl mx-auto">
        {pages.map(({ num, label }) => (
          <img
            key={num}
            src={`/magazine-pages/${num}.png`}
            alt={label}
            className="w-full h-auto block"
            loading={num === 1 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
