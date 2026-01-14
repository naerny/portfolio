import { listData } from '../data/listData';

export default function List() {
  // Function to extract year from period string
  const extractYear = (period: string) => {
    const [startYear, endYear] = period.split('-').map(Number);
    return startYear + (endYear - startYear) / 2; // Return average year
  };

  // Sort the listData by extracted year in descending order
  const sortedListData = listData.sort((a, b) => {
    const yearA = extractYear(a.period);
    const yearB = extractYear(b.period);
    return yearB - yearA; // Descending order
  });

  return (
    <section className="w-full section-list">
      <h2 className="h2 reveal-left">Education et expérience</h2>

      <ul className="flex flex-col gap-4">
        {sortedListData.map((item, index) => (
          <li key={index} className="reveal flex flex-wrap border-b border-stone-300 pb-4 pt-2">
            <div className="w-full flex md:flex-1 align-bottom">
              <p className="flex flex-col mt-auto">
                <span className="mb-[-5px] text-stone-500">{item.title}</span>
                <span className="h4">{item.subtitle}</span>
              </p>
            </div>
            <div className="flex flex-1 align-bottom text-stone-500 md:text-(--foreground)">
              <p className="mt-auto">
                <span className="h4">{item.type === 'education' ? item.school : item.company}</span>
                <span> </span>
                <span className="text-stone-500">- {item.location}</span>
              </p>
            </div>
            <div className="flex align-bottom text-stone-500 md:text-(--foreground)">
              <p className="md:mt-auto">{item.period}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}